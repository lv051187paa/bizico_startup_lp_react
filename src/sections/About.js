import React, { useContext, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { ContentContext } from "../context/ContentProvider";
import MainImg from '../img/about_center.svg';

const About = () => {
    const { about } = useContext(ContentContext);
    const [listVisible, setListVisible] = useState(false);
  const toggleModal = () => setListVisible( !listVisible );
  return (
    <section className={`about ${listVisible ? 'show' : ''}`}>
      <div className="container">
        <SectionTitle content={about.title} className="about__title" />
        <div className="about__history">
            <img className="about__history-image" src={MainImg} alt="" onClick={toggleModal}/>
            <div className="about__history-list">
              {about.historyList.map((historyItem, index) => (<div key={historyItem.id} className={`about__history-item ${index > 5 ? 'bottom' : 'top'}`}>{historyItem.text}</div>))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
