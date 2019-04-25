import React, { useContext } from "react";
import SectionTitle from "../components/SectionTitle";
import CaseItem from "../components/CaseItem";
import { ContentContext } from "../context/ContentProvider";

const Cases = () => {
  const { cases } = useContext(ContentContext);
  return (
    <section className="cases">
      <div className="container">
        <SectionTitle content={cases.title} />
        <div className="cases__list">
         {cases.caseList.map((caseItem, index) => <CaseItem key={caseItem.id} className={index % 2 && 'cases__item_inverse'} caseItem={caseItem}/> )}
          
        </div>
      </div>
    </section>
  );
};

export default Cases;
