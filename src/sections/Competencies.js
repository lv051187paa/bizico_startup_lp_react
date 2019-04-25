import React, { useContext, useRef, useEffect } from "react";

import SectionTitle from "../components/SectionTitle";
import CompetenciesItem from "../components/CompetenciesItem";
import { ContentContext } from "../context/ContentProvider";
import {ReactComponent as Lightulb} from "../img/light_bulb.svg";
import LazyLinePainter from "lazy-line-painter";

const Competencies = () => {
  const { competencies, srcPath } = useContext(ContentContext);
  useEffect(() => {
    const config = {
        ease: "easeLinear",
        strokeWidth: 1.9,
        strokeOpacity: 1,
        strokeColor: "#9e181a",
        strokeCap: "square",
        repeat: -1
      };
      const animation = new LazyLinePainter(svg.current, config);
      animation.paint(); 
  })
  const svg = useRef(null);

  return (
    <section className="competencies">
      <div className="container">
        <div style={{display: 'flex'}}>
            <Lightulb  ref={svg}/>
            <SectionTitle content={competencies.title} />
        </div>
        
        
        <p className="competencies__subtitle">
        {competencies.description}
        </p>
        <div className="competencies__list">
          {competencies.items.map(item => <CompetenciesItem key={item.id} path={srcPath} content={item.text} icon={item.icon} />)}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
