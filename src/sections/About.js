import React, { useContext } from "react";
import SectionTitle from "../components/SectionTitle";
import { ContentContext } from "../context";
import MainImg from '../img/about_center.svg';

const About = () => {
    const { about } = useContext(ContentContext);
  return (
    <section className="about">
      <div className="container">
        <SectionTitle content={about.title} className="about__title" />
        <div className="about__history-list">
            <img className="about__history-image" src={MainImg} alt=""/>
          {about.historyList.map((historyItem, index) => (<div key={historyItem.id} className={`about__history-item ${index > 5 ? 'bottom' : 'top'}`}>{historyItem.text}</div>))}
        </div>
      </div>
    </section>
  );
};

export default About;
