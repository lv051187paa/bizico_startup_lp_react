import React from "react";

const CaseItem = ({ className, caseItem }) => {
  const technologies = Object.entries(caseItem.technologies);
  return (
    <div className={`${className} cases__item`}>
      <div className="cases__item-description">
        <div className="cases__item-params">
          <span className="cases__item-title">Location: </span>
          <span className="cases__item-text">{caseItem.location} </span>
          <img src="#" alt="flag" />
        </div>
        <div className="cases__item-params">
          <span className="cases__item-title idea">Idea: </span>
          <span className="cases__item-text">{caseItem.idea}</span>
        </div>
        <div className="cases__item-params">
          <span className="cases__item-title solutions">Solutions: </span>
          <span className="cases__item-text">{caseItem.solutions}</span>
        </div>
        <div className="cases__item-params">
          <span className="cases__item-title technologies">Technologies:</span>
          {technologies.map((technology, index) => (
            <div key={index}>
              <span className="cases__item-title">{technology[0].replace(/_/g, ' ')}: </span>
              <span className="cases__item-text">{technology[1]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="cases__item-illustrations" />
    </div>
  );
};

export default CaseItem;
