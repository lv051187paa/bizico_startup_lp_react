import React from 'react';

const WorkflowItem = ({item}) => {
  return (
    <div className="workflow__item">
      <h4>{item.title}</h4>
      <img src="$" alt=""/>
      <div>
        {item.content.map(content => <p key={content.id}>{content.text}</p>)}
      </div>
    </div>
  )
};

export default WorkflowItem;
