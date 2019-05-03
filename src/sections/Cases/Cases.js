import React, { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import CaseItem from "./CaseItem";
import CaseItemMobile from "./CaseItemMobile";
import { ContentContext } from "../../context/ContentProvider";
import { DeviceDetectorContext } from '../../context/DeviceDetector'

const Cases = () => {
  const { cases } = useContext(ContentContext);
  const isMobile = useContext( DeviceDetectorContext );
  const Component = !isMobile ? CaseItem : CaseItemMobile;
  return (
    <section className="cases">
      <div className="container">
        <SectionTitle content={cases.title} />
        <div className="cases__list">
         {cases.caseList.map((caseItem, index) => <Component key={caseItem.id} className={(index % 2 && !isMobile) ? 'cases__item_inverse' : ''} caseItem={caseItem}/> )}
          
        </div>
      </div>
    </section>
  );
};

export default Cases;
