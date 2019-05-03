import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentProvider";
import SectionTitle from "../../components/SectionTitle";
import AdvantagesItem from "./AdvantagesItem";

const Advantages = () => {
  const { advantages } = useContext(ContentContext);
  return (
    <section className="advantages">
      <div className="container">
        <SectionTitle content={advantages.title} className="advantages__title" />
        <div className="advantages__list" >
            {advantages.items.map(item => <AdvantagesItem key={item.id} title={item.title} content={item.text} icon={item.icon} />)}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
