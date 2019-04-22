import React, { useContext } from "react";
import { ContentContext } from "../context";
import SectionTitle from "../components/SectionTitle";
import AdvantagesItem from "../components/AdvantagesItem";

const Advantages = () => {
  const { advantages } = useContext(ContentContext);
  return (
    <section className="advantages">
      <div className="container">
        <SectionTitle content={advantages.title} />
        <div className="advantages__list" >
            {advantages.items.map(item => <AdvantagesItem key={item.id} title={item.title} content={item.text} icon={item.icon} />)}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
