import React, {useContext} from "react";
import SectionTitle from "../components/SectionTitle";
import {ContentContext} from "../context";
import EmployeeCard from '../components/EmployeeCard';
import FeedbackForm from '../components/Forms/FeedbackForm';


const Contacts = () => {
  const {contacts} = useContext(ContentContext);
  return (
    <section className="contacts">
      <div className="container">
        <SectionTitle className="contacts__title" content={contacts.title}/>
        <div className="contacts__list">
          {contacts.employees.map(employee => <EmployeeCard employee={employee}/>)}
        </div>
        <div className="contacts__form">
          <FeedbackForm/>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
