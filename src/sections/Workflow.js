import React, { useContext } from "react";
import SectionTitle from "../components/SectionTitle";
import { ContentContext } from "../context";
import WorkfloewItem from '../components/WorkflowItem';

const Workflow = () => {
  const { workflow } = useContext(ContentContext);
  return (
    <section className="cases">
      <div className="container">
        <SectionTitle content={workflow.title} />
        <div className="cases__list">
          {workflow.items.map(item => <WorkfloewItem key={item.id} item={item}/> )}
        </div>
      </div>
    </section>
  );
};

export default Workflow;