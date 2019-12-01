import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Container, Input} from 'reactstrap';
import './App.scss'
import worlds from "./data/worlds";
import needs from "./data/needs";
import producers from "./data/producers";
import ResetButton from "./components/ResetButton";
import WorldSwitch from "./components/WorldSwitch";
import IslandButton from "./components/IslandButton";
import IslandPopulations from "./components/IslandPopulations";
import Fertilities from "./components/Fertilities";
import {trans} from "./functions/translation";
import * as game from "./functions/game";
import Producers from "./components/Producers";
import TieredMap from "./classes/TieredMap";
import GoodItem from "./components/GoodItem";
import tiers from "./data/tiers";

const debugEnabled = true
const jst = JSON.stringify
const jpa = JSON.parse
const jcl = foo => jpa(jst(foo)) // clone function
const cl = console.log
// eslint-disable-next-line
const d = debugEnabled ? cl : () => null
// eslint-disable-next-line
const dd = debugEnabled ? (...foo) => <div className='d-inline-block font-italic text-break'>{foo}</div> : () => null

class App extends Component {
  saveLogic = {
    waitMs: 500,
    timeout: null
  }
  initialState = {
    darkMode: false,
    islands: [],
    unlockedWorlds: debugEnabled ? [1, 2, 3] : [1],
    activeWorld: 1,
    activeIslands: {},
    unlockedProducers: [],
    unlockedNonProducers: [],
    trades: [],
  }


  constructor(props) {
    // localStorage.clear();
    super(props);

    let oldState = localStorage.getItem('state');
    this.state = this.prepareStateString(oldState ? oldState : jst(this.initialState))

    if (debugEnabled && !this.state.islands.length) {
      setTimeout(() => this.addIsland(1), 1)
    }
    function handleHighlight(e) {
      let elem = document.querySelector('.hi-self')
      if (elem) {
        const clas = Array.from(elem.classList).find(c => c.startsWith('provides-'))
        if (clas) {
          GoodItem.highlight(producers.find(p => p.provides === clas.split('provides-')[1]), e.ctrlKey)
        }
      }
    }
    // initialise darkMode in index.html
    document.getElementsByTagName('body')[0].classList.toggle('bg-secondary', !!this.state.darkMode)

    document.addEventListener('keydown', handleHighlight)
    document.addEventListener('keyup',   handleHighlight)

    document.addEventListener('keydown', e => { this.setState({modifier: this.modifier(e)}) })
    document.addEventListener('keyup',   e => { this.setState({modifier: this.modifier(e)}) })
  }

  reset = () => {
    if (!debugEnabled && !window.confirm('Start from beginning?')) {
      return;
    }
    localStorage.clear();
    const darkMode = this.state.darkMode
    this.setState(prevState => jcl(this.initialState), () => {
      if (darkMode) {
        this.toggleDarkMode()
      }
      if (debugEnabled) {
        this.addIsland(1)
      }
    })
  }
  prepareStateString(string) {
    let newState = JSON.parse(string)
    for (let island of newState.islands) {
      island.residences              = TieredMap.createFromJson(island.residences)
      island.populationPerResidence  = TieredMap.createFromJson(island.populationPerResidence)
      island.population              = TieredMap.createFromJson(island.population)
      island.prohibitedNeeds         = TieredMap.createFromJson(island.prohibitedNeeds)
    }
    return newState
  }
  loadState(string) {
    localStorage.clear();
    this.setState(prevState => this.prepareStateString(string), this.persistState);
  }
  saveState() {
    // it works but has a smell
    this.setState(prevState => prevState, this.persistState);
  }
  persistState() {
    if (this.saveLogic.timeout) {
      clearTimeout(this.saveLogic.timeout);
    }
    this.saveLogic.timeout = setTimeout(() => {
      localStorage.setItem('state', jst(this.state));
    }, this.saveLogic.waitMs)
  }
  toggleDarkMode = () => {
    let darkMode = !this.state.darkMode

    document.getElementsByTagName('body')[0].classList.toggle('bg-secondary', darkMode)

    this.setState({darkMode: darkMode}, this.persistState)
  }
  modifier = (event) => {
    let step = 1
    if (event.ctrlKey)  { step *= 5  }
    if (event.shiftKey) { step *= 10 }
    // if (event.altKey)   { step *= 5  }
    return step
  }

  // Islands and Worlds
  generateEmptyIsland = (worldId, newIslandId) => {
    const world = worlds.find(w => w.id === worldId)

    return {
      id: newIslandId,
      worldId: worldId,
      fertilities: debugEnabled ? world.fertilities : [],
      regionalResources: world.regionalResources.reduce((obj,res) => ({...obj, [res]:debugEnabled ? 5 : 0}), {}),
      name: `(${newIslandId}) ${trans(world)}`,
      residences: new TieredMap(world.socialClassIDs, 0),
      populationPerResidence: new TieredMap(world.socialClassIDs, 0),
      population: new TieredMap(world.socialClassIDs, 0),
      buildings: {},
      productivity: {},
      unlockedNeeds: [],
      prohibitedNeeds: new TieredMap(world.socialClassIDs, [])
    }
  }
  setIslandName = (id, name) => {
    let islands = this.state.islands
    islands.find((i) => i.id === id).name = name

    this.setState({islands: islands}, this.persistState);
  }
  addIsland(worldId) {
    let islands = this.state.islands
    let increment = islands.reduce((prev, next, i) => Math.max(prev, next.id), 0) + 1
    let newIsland = this.generateEmptyIsland(worldId, increment)

    this.setState({islands: [...islands, newIsland]}, () => {this.switchIsland(increment)})
  }
  switchIsland = (id) => {
    let activeIslands = this.state.activeIslands
    activeIslands[this.state.activeWorld] = id
    this.setState({activeIslands: activeIslands}, this.persistState)
  }
  deleteIsland = (islandId) => {
    if (!debugEnabled && !window.confirm('Insel "'+this.state.islands.find((i) => i.id === islandId).name+'" löschen?')) {
      return;
    }
    let islands = this.state.islands.filter((i) => i.id !== islandId)

    this.setState({islands: islands}, () => {
      this.persistState();
      let otherIsland = this.state.islands.find(i => i.worldId === this.state.activeWorld);
      if (otherIsland) {
        this.switchIsland(otherIsland.id)
      }
      else if (debugEnabled) {
        this.addIsland(this.state.activeWorld)
      }
    })
  }
  unlockWorld = (worldId) => {
    this.state.unlockedWorlds.push(worldId)

    this.setState({unlockedWorlds: this.state.unlockedWorlds}, this.persistState)
  }
  switchWorld = (worldId) => {
    this.setState({activeWorld: worldId}, this.persistState)
    if (debugEnabled) {
      if (!this.state.islands.filter(i => i.worldId === worldId).length) {
        setTimeout(() => this.addIsland(worldId), 500)
      }
    }
  }
  getAllPopulation = (worldId = false) => {
    let allPopulation = new TieredMap(tiers.reduce((all, t) => [...all, t.id], []), 0)
    let islands = this.state.islands.filter(i => worldId === false || i.worldId === worldId)
    islands.forEach(island => {
      island.population.forEach((pop, tierId) => {
        allPopulation.add(tierId, pop)
      })
    })
    return allPopulation
  }

  // Island settings
  setFertilities = (island, fertilities) => {
    island.fertilities = fertilities
    this.saveState()
  }
  changeResourceCount = (island, resource, addend) => {
    let resources = island.regionalResources
    resources[resource] = Math.max(0,(resources[resource] ? parseInt(resources[resource]) : 0) + addend)

    this.saveState()
  }
  setProhibitedNeeds = (island, tierId, needs) => {
    island.prohibitedNeeds.set(tierId, needs)

    this.updatePopulationPerResidence(island, tierId)
    this.recalculatePopulation(island, tierId)

    while (this.updateUnlockedNeeds(island)) {
      d("updateUnlockedNeeds", "tierId", tierId)
      this.updatePopulationPerResidence(island, tierId)
      this.recalculatePopulation(island, tierId)
    }

    this.saveState()
  }
  changeResidences = (event, island, tierId, direction, move = false) => {
    const step = this.modifier(event)

    if (move === true) {
      island.residences.move(tierId, direction + tierId, step)
      this.postChangeResidences(island, tierId+(direction>0?1:0))
      this.recalculatePopulation(island, tierId+(direction>0?0:-1))
    } else {
      island.residences.add(tierId, direction * step)
      this.postChangeResidences(island, tierId)
    }

    this.saveState()
  }
  setResidences = (island, tierId, number) => {
    island.residences.set(tierId, number ? parseInt(number) : 0)

    this.postChangeResidences(island, tierId)
    this.saveState()
  }
  postChangeResidences = (island, tierId) => {
    const highestFrom0 = tierId > island.population.highestTier() // population not yet calculated / still 0
    const thisFrom0 = !island.population.present(tierId) // population not yet calculated / still 0
    const highestTo0 = tierId > island.residences.highestTier()   // residences already set to 0 in this action
    const handleLowerTiers = highestFrom0 || highestTo0
    const handleNoOtherTiers = tierId < island.residences.highestTier()

    if (handleNoOtherTiers) {
      this.recalculatePopulation(island, tierId)
      if (thisFrom0) {
        needs.filter(n => n.tierIDs.includes(tierId)).forEach(need => {
          this.enableDisabledBuilding(island, producers.find(p => p.key === need.key), -1)
        })
      }
      return
    }

    this.recalculatePopulation(island, tierId)

    while (this.updateUnlockedNeeds(island)) {
      d("updateUnlockedNeeds", "tierId", tierId)
      this.updatePopulationPerResidence(island, tierId)
      this.recalculatePopulation(island, tierId)
    }
    if (island.residences.has(tierId+1)) { // wenn ausgeblendet, reicht .present
      d("updatePopulationPerResidence", "+1",tierId+1)
      this.updatePopulationPerResidence(island, tierId+1)
    }
    while (handleLowerTiers && island.residences.has(--tierId)) {
      d("updatePopulationPerResidence", '--', tierId)
      this.updatePopulationPerResidence(island, tierId)
      this.recalculatePopulation(island, tierId)
      if (island.residences.present(tierId)) {
        break
      }
    }
    this.updateUnlockedProducers(island)

    this.saveState()
  }
  updatePopulationPerResidence(island, tierId) {
    const relevantNeeds = needs.filter(n =>
      island.unlockedNeeds.includes(n.key)                       // unlocked on this island
      && n.tierIDs.includes(tierId)                              // relevant for this tier
      && !island.prohibitedNeeds.ofTier(tierId).includes(n.key)  // not prohibited for this tier
    )
    island.populationPerResidence.set(tierId, 0)
    relevantNeeds.forEach(n => {
      // d('add', n.influx[n.tierIDs.indexOf(tierId)], 'for', tierId, n.key)
      island.populationPerResidence.add(tierId, n.influx[n.tierIDs.indexOf(tierId)])
    })
  }
  recalculatePopulation = (island, tierId) => {
    island.population.set(tierId, island.residences.ofTier(tierId) * island.populationPerResidence.ofTier(tierId))
  }

  // Buildings and Needs
  updateUnlockedProducers = (island) => {
    const unlockedProducers = producers.filter(p =>
      // only this world
      island.population.has(p.tierId) && (
      // unlocked by higher tier present
      (p.tierId < island.residences.highestTier())
      // unlocked by requirement with highest tier
      || (p.tierId === island.residences.highestTier() && island.population.highestTierValue() >= p.requirement)
    ))

    unlockedProducers
      .filter(p => !this.state.unlockedProducers.includes(p.key))
      .forEach(producer => {
        this.state.unlockedProducers.push(producer.key)
        island.buildings[producer.key] = 0
        island.productivity[producer.key] = producer.needs.includes("otherWorld") ? 0 : 100
      })
  }
  updateUnlockedNeeds = (island) => {
    const unlockedNeeds = needs.filter(n =>
      // only this world
      island.population.has(n.tierIDs[0]) && (
      // unlocked by higher tier present
      (n.tierIDs[0] < island.residences.highestTier())
      // unlocked by requirement with highest tier
      || (n.tierIDs[0] === island.residences.highestTier() && island.population.highestTierValue() >= n.requirement)
    ))

    unlockedNeeds.filter(n => n.tierIDs.filter(t => island.population.present(t)).length)
      .forEach(need => {
        this.enableDisabledBuilding(island, producers.find(p => p.provides === need.key && island.population.has(p.tierId)), -1)
      })

    const keys = unlockedNeeds.reduce((all, need) => [...all, need.key], [])
    const keysWithMarketplace = keys.length ? keys : ["Marketplace"]
    if (island.unlockedNeeds.length !== keysWithMarketplace.length) {
      island.unlockedNeeds = keysWithMarketplace
      return true
    }
    return false
  }
  setBuildingCount = (island, producer, number) => {
    let buildings = island.buildings;

    if (number===null) {
      buildings[producer.key] = null
      island.productivity[producer.key] = null
    } else {
      if (number > 0) {
        this.enableDisabledBuilding(island, producer, -1)
      }
      island.productivity[producer.key] = producer.needs.includes("otherWorld") ? 0 : 100
      buildings[producer.key] = number ? Math.max(parseInt(number), 0) : 0
    }

    this.setState(prevState => prevState, this.persistState);
  }
  enableDisabledBuilding = (island, producer, recursive = 0) => {
    if (!producer) {
      return
    }
    if (recursive !== 0) {
      producers.filter(p => producer.needs.includes(p.provides) && island.population.has(p.tierId)).forEach(p => {
        this.enableDisabledBuilding(island, p, --recursive)
        if (document.querySelector('.hi-self')) {
          setTimeout(() => GoodItem.highlight(producer), 1)
        }
      })
    }

    if ([undefined, null].includes(island.buildings[producer.key])) {
      this.setBuildingCount(island, producer, 0)
    }
  }

  // Productivity
  setProductivity = (island, producer, productivity) => {
    island.productivity[producer.key] = productivity
    this.saveState()
  }

  // Trading
  upsertTrade = (oldTrade, newTrade) => {
    // d(from, to, good, amount)
    let trades = this.state.trades;
    // remove possibly existing trade
    if (oldTrade) {
      // trades = trades.filter(r => !(r.from === oldTrade.from && r.to === oldTrade.to && r.good === oldTrade.good))
      trades = trades.filter(r => r !== oldTrade)
    }
    if (newTrade) {
      // if (!isNaN(newTrade.amount)) {
      //   if (newTrade.amount > 0) {
      //     newTrade.amount = newTrade.amount
      //   }
      // }
      // add new trade / re-add changed trade
      trades = [...trades, newTrade]
    }
    this.setTrades(trades)
    // this.props.fnbsTrades(trades)
  }
  setTrades = (trades) => {
    this.setState({trades: trades}, this.persistState)
  }

  // Resource Balance
  productionPerTick = (resource, island) => {
    return producers
      .filter(p => island.buildings[p.key] !== undefined) // omit buildings not (yet) built
      .filter(p => p.provides === resource)        // only providers of that resource
      .reduce((sum, p) => sum + island.buildings[p.key] * (60 / p.productionTime) * (island.productivity[p.key]/100), 0)
  }
  consumptionThroughBuildingsPerTick = (resource, island) => {
    return producers
      .filter(p => island.buildings[p.key] !== undefined) // noch nie gebaut
      .filter(p => p.needs.includes(resource)) // isConsumingResource
      .reduce((sum, p, i) => sum + island.buildings[p.key] * (60 / p.productionTime) * (island.productivity[p.key]/100), 0)
  }
  consumptionThroughPopulationPerTick = (resource, island) => {
    let need = needs.find(n => n.key === resource && island.population.has(n.tierIDs[0]))
    if (!need) {
      return 0
    }

    const isUnlocked = island.unlockedNeeds.includes(need.key);
    return need.tierIDs
      .filter(id =>
        isUnlocked
        // && island.population.present(id)
        && !island.prohibitedNeeds.ofTier(id).includes(resource)
      )
      .reduce((prev, next, i) => prev + island.population.ofTier(next) * need.consumption[i], 0)
  }
  calculateTradeBalance = (good, island) => {
    const trades = this.state.trades.filter(t => t.good === good);
    const loading  = trades.filter(t => t.from === island.id && t.to   !== null).reduce((sum, that) => sum + that.amount, 0);
    const dropping = trades.filter(t => t.to   === island.id && t.from !== null).reduce((sum, that) => sum + that.amount, 0);
    return dropping - loading
  }
  calculateBalance = (resource, island) => {
    return (
      + this.productionPerTick(resource, island)
      - this.consumptionThroughBuildingsPerTick(resource, island)
      - this.consumptionThroughPopulationPerTick(resource, island)
      + this.calculateTradeBalance(resource, island)
    )
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Card className={'my-3' + (this.state.darkMode ? ' bg-dark' : '')}>
            {/*   Welt auswahl   */}
            <CardHeader>
                {worlds.map((world, worldKey) => (
                  <WorldSwitch
                    key={world.id}
                    world={world}
                    activeWorld={this.state.activeWorld}
                    unlocked={this.state.unlockedWorlds.includes(world.id)}
                    islands={this.state.islands}
                    allPopulation={this.getAllPopulation()}
                    fnSwitchWorld={this.switchWorld}
                    fnUnlockWorld={this.unlockWorld}
                  />
                ))}
              <ResetButton resetFunction={this.reset}/>
              {/*eslint-disable-next-line*/}
              <Button onClick={this.toggleDarkMode} color={'primary'} className='float-right mr-3'>&#128161;{/*icon-lamp*/}</Button>
              <Button onClick={() => game.loadFromFile((fileContent) => this.loadState(fileContent))} color={'secondary'} className='float-right mr-3'>&#128194;{/*icon-load*/}</Button>
              <Button onClick={() => game.exportToFile(this.state)} color={'secondary'} className='float-right mr-3'>&#128190;{/*icon-save*/}</Button>
            </CardHeader>
            {/*   Insel auswahl   */}
            <CardBody className={'overflow-auto text-nowrap'}>
              <Button onClick={() => this.addIsland(this.state.activeWorld)} className={'px-1 py-0 mr-2'}>
                <img src={'./icons/Icon_plus.png'} alt='Hinzufügen' style={{width: 36, height: 36}}/>
              </Button>
              {this.state.islands.filter(island => island.worldId === this.state.activeWorld).map((island, islandKey) => (
                <IslandButton
                  key={island.id}
                  island={island}
                  activeIsland={this.state.activeIslands[this.state.activeWorld]}
                  onClick={this.switchIsland}
                  fnSetIslandName={this.setIslandName}
                />
              ))}
            </CardBody>
          </Card>
          {this.state.islands.filter(island => island.id === this.state.activeIslands[this.state.activeWorld]).map((island, islandKey) => (
            <Card key={island.id} className={'my-3' + (this.state.darkMode ? ' bg-dark' : '')}>
              {/*   Inselname & Bevölkerung & Fruchtbarkeiten  */}
              <CardHeader>
                <strong className={'d-inline-block mr-3'}>
                  <img src={"./icons/population/Population.png"} alt="" style={{height: 40, width: 40}}/>
                  { island.population.sum() }
                </strong>

                <Fertilities
                  island={island}
                  forceEdit={!island.fertilities.length && !Object.keys(island.regionalResources).reduce((prev, next, i) => prev + island.regionalResources[next], 0)}
                  fnSetFertilities={this.setFertilities}
                  fnChangeResourceCount={this.changeResourceCount}
                />

                <Button onClick={() => this.deleteIsland(island.id)} size='sm' className='float-right'>&#10005;{/*icon-x*/}</Button>
              </CardHeader>
              {/*   Bevölkerungsstufen   */}
              <CardHeader>
                <IslandPopulations
                  island={island}
                  fnChangeResidences={this.changeResidences}
                  fnSetResidences={this.setResidences}
                  fnSetProhibitedNeeds={this.setProhibitedNeeds}
                />
              </CardHeader>

              {/*   Zeug auf der Insel   */}
              <CardBody>
                {/*   Producers   */}
                <Producers
                  island={island}
                  trades={this.state.trades}
                  fnTrade={this.upsertTrade}
                  fnBalance={(resource) => this.calculateBalance(resource, island)}
                  fnSetBuildingCount={this.setBuildingCount}
                  fnEnableDisabledBuilding={this.enableDisabledBuilding}
                  unlockedProducers={this.state.unlockedProducers}
                  fnSetProductivity={this.setProductivity}
                />
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
