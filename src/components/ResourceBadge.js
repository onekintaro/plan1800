import React, {Component} from 'react';
import PropTypes from 'prop-types/';

export default class ResourceBadge extends Component {
  render() {
    const {resource, count, fnChangeResourceCount} = this.props;
    const editMode = fnChangeResourceCount !== undefined

    return (
      <span
        className='badge badge-secondary badge-pill mr-2'
        onClick={(e) => {if (editMode) { fnChangeResourceCount(1) }}}
        onWheel={(e) => {if (editMode) { fnChangeResourceCount(Math.sign(-e.deltaY)); e.preventDefault() }}}
        onContextMenu={(e) => {if (editMode) {fnChangeResourceCount(-1)} e.preventDefault()}}
      >
        {count}
        &times;
        <img src={"./icons/goods/" + resource + ".png"} alt={resource} title={resource} style={{width: 22, height: 22}}/>
      </span>
    )
  }
}

ResourceBadge.propTypes = {
  count: PropTypes.number,
  resource: PropTypes.string.isRequired,
  fnChangeResourceCount: PropTypes.func,
};
