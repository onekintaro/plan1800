import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Input} from "reactstrap";
// import {RGB_Log_Blend} from "../functions/color";

export default class BuildingInput extends Component {
  render() {
    const { blend, buildingCount, buildingKey, max, fnSetBuildingCount } = this.props;

    if (max === 0) {
      return (
        <Input id={"input_" + buildingKey}
               type='text'
               bsSize='sm'
               className={'BuildingInput mr-2 text-center'}
               value='&#10005;' // icon-x
               disabled={true}
        />
      )
    }

    const boostClass = this.props.boost ? 'overlay-boost boost-'+ this.props.boost : ''

    return (<div className='overlay-wrapper'>
      {this.props.electricityIcon}
      <Input
        id={"input_"+buildingKey}
        type='number'
        bsSize='sm'
        // style={{
        //   backgroundColor:
        //     RGB_Log_Blend(
        //       Math.min(Math.max(blend, 0), 1),
        //       // 'rgba(100,200,255,0.5)',
        //       'rgba(100,255,100,0.5)',
        //       'rgba(255,50,50,0.5)',
        //     ),
        // }}
        className={
          'BuildingInput mr-2 text-center ' + boostClass
          + (blend > 0 ? ' is-invalid' : '')
          // + (blend < 0 ? ' border-primary' : '')
        }
        max={max !== undefined ? max : 99}
        value={buildingCount}
        onChange={e => fnSetBuildingCount(e.target.value)}
        onMouseEnter={e => e.target.focus()}
      />
      </div>
    )
  }
}

BuildingInput.propTypes = {
  blend: PropTypes.number,
  islandId: PropTypes.number,
  buildingCount: PropTypes.number,
  buildingKey: PropTypes.string,
  max: PropTypes.number,
  boost: PropTypes.number,
  fnSetBuildingCount: PropTypes.func,
};
