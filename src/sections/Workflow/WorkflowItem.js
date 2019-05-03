import React from 'react';
import PropTypes from 'prop-types';
import {blocks} from '../../img'

const WorkflowItem = ({item}) => {
  const {title, icon, content} = item;
  return (
    <div className="workflow__item">
      <div className="">
        <img src={blocks[icon.toLowerCase()]} alt=""/>
        <h4>{title}</h4>
      </div>
      <div className="workflow__item-content">
        {content.map(content => <p key={content.id}>{content.text}</p>)}
      </div>
    </div>
  )
};

WorkflowItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default WorkflowItem;
