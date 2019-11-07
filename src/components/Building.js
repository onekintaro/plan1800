import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import GoodItem from "./GoodItem";
import BuildingInput from "./BuildingInput";
import Chart from "./Chart";
import RecommendedAddButton from "./RecommendedAddButton";
import producers from "../data/game/producers";
import Input from "reactstrap/es/Input";

export default class Building extends Component {
  render() {
    const {needOrProducer, island, balance, fnSetBuildingCount} = this.props

    let producer = producers.find(p => p.key === needOrProducer.key)
    if (!producer && needOrProducer.provides !== undefined) {
      producer = producers.find(p => p.key === needOrProducer.provides) //or simply needOrProducer?
    }

    let buildingBalance, recommendedCount, recommendedAdd = 0
    let max = undefined
    if (producer) {
      buildingBalance = balance*producer.productionTime/60
      recommendedCount = Math.ceil(island.buildings[producer.key] - buildingBalance);
      recommendedAdd = recommendedCount - island.buildings[needOrProducer.key];

      if (producer.needs.includes("deposit")) {
        max = island.regionalResources[producer.key] ? island.regionalResources[producer.key] : 0
      }
      if (producer.needs.includes("fertility")) {
        max = island.fertilities.includes(producer.provides) ? 99 : 0
      }
    }

    return (
      <label htmlFor={"input_"+needOrProducer.key} className='d-block mb-0'>
      <GoodItem resource={needOrProducer} producer={producer}>
        {!producer ?
          <Input
            id={"input_"+needOrProducer.key}
            type='checkbox'
            checked={island.buildings[needOrProducer.key]}
            onChange={e => fnSetBuildingCount(island.id, needOrProducer.key, e.target.checked ? 1 : 0)}
          />
          : <>
            <span className="mr-2">{(island.buildings[producer.key] - buildingBalance).toFixed(2)}</span>{/** @todo remove? */}

            <BuildingInput
              blend={-buildingBalance}
              buildingCount={island.buildings[producer.key]}
              buildingKey={producer.key}
              islandId={island.id}
              fnSetBuildingCount={fnSetBuildingCount}
              max={max}
            />

            <span className="mr-2"><Chart balance={buildingBalance}/></span>{/** @todo remove? */}
            <span className="mr-2"><Chart balance={balance} max={3}/></span>
            {max === 0 || recommendedCount > max ? '' :
            <RecommendedAddButton add={recommendedAdd} action={() => fnSetBuildingCount(island.id, producer.key, recommendedCount)} />
            }
          </>
        }
      </GoodItem>
      </label>
    )
  }
}

Building.propTypes = {
  needOrProducer: PropTypes.object.required,
  island: PropTypes.object.required,
  balance: PropTypes.int, //.required,
  fnSetBuildingCount: PropTypes.func.required,
};
