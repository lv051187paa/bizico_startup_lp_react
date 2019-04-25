import React, { useContext } from "react";
import SectionTitle from "../components/SectionTitle";
import { ContentContext } from "../context/ContentProvider";
import WorkfloewItem from '../components/WorkflowItem';

const Workflow = () => {
  const { workflow } = useContext(ContentContext);
  return (
    <section className="workflow">
      <div className="container">
        <SectionTitle content={workflow.title} />
        <div className="workflow__list">
          {workflow.items.map(item => <WorkfloewItem key={item.id} item={item}/> )}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
