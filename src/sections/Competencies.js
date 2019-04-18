import React, { useContext, useRef, useEffect } from "react";

import SectionTitle from "../components/SectionTitle";
import { ContentContext } from "../context";
import Lightulb from "../img/light_bulb.svg";
import LazyLinePainter from "lazy-line-painter";

const Competencies = () => {
  const { competencies } = useContext(ContentContext);
  useEffect(() => {
    const config = {
        ease: "easeLinear",
        strokeWidth: 1.9,
        strokeOpacity: 1,
        strokeColor: "#9e181a",
        strokeCap: "square",
        repeat: -1
      };
      const animation = new LazyLinePainter(svg.current.querySelector('svg'), config);
      animation.paint(); 
  })
  const svg = useRef(null);

  return (
    <section className="competencies">
      <div className="container">
        <div ref={svg} style={{display: 'flex'}}>
            <Lightulb  />
            <SectionTitle content={competencies.title} />
        </div>
        
        
        <p className="competencies__subtitle">
        {competencies.description}
        </p>
        <div className="competencies__description">
          <p>
            Working together in teams with our senior engineers you are always
            in direct control of the scope, time, budget, and quality of your
            project.
          </p>
          <p>
            You are able to focus on your solution requirements while we take
            care of the development and testing.
          </p>
          <p>
            It is our responsibility to deliver quality results in the shortest
            period of time to you and your clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
