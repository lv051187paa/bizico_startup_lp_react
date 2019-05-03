import React, { useContext, useRef, useEffect } from "react";

import SectionTitle from "../../components/SectionTitle";
import CompetenciesItem from "./CompetenciesItem";
import { ContentContext } from "../../context/ContentProvider";
import {ReactComponent as Lightulb} from "../../img/light_bulb_animated.svg";
import Vivus from "vivus";

const Competencies = () => {
  const { competencies, srcPath } = useContext(ContentContext);
  useEffect(() => {
    const myVivus = new Vivus(svg.current);
    myVivus.play(5);
  })
  const svg = useRef(null);

  return (
    <section className="competencies">
      <div className="container">
        <div className="competencies__title">
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
