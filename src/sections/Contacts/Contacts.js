import React, {useContext, useState} from "react";
import SectionTitle from "../../components/SectionTitle";
import {ContentContext} from "../../context/ContentProvider";
import EmployeeCard from './EmployeeCard';
import FeedbackForm from '../../components/Forms/FeedbackForm';
import ContactAddress from './ContactAddress';
import {Button} from "../../components/Forms/formComponents";
import LandingDrawer from '../../components/LandingDrawer/LandingDrawer';


const Contacts = () => {
  const {contacts} = useContext(ContentContext);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const showDrawer = () => setDrawerVisible(true);
  const hideDrawer = () => setDrawerVisible(false);
  return (
    <section className="contacts">
      <div className="container">
        <SectionTitle className="contacts__title" content={contacts.title}/>
        <Button title="Contact us" onClick={showDrawer} className="contacts__form-toggle" />
        {/*<div className="contacts__block">*/}
          {/*<div className="contacts__list">*/}
            {/*{contacts.employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)}*/}
          {/*</div>*/}
          {/*<div className="contacts__form">*/}
            {/*<FeedbackForm/>*/}
          {/*</div>*/}
          {/*<div className="contacts__addresses">*/}
            {/*{contacts.address.map(address => <ContactAddress key={address.country} address={address}/>)}*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
      <LandingDrawer
        title="Contuct us"
        onClose={hideDrawer}
        visible={drawerVisible}
      >
        <div className="container">
          <div className="contacts__block">
            <div className="contacts__list">
              {contacts.employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)}
            </div>
            <div className="contacts__form">
              <FeedbackForm/>
            </div>
            <div className="contacts__addresses">
              {contacts.address.map(address => <ContactAddress key={address.country} address={address}/>)}
            </div>
          </div>
        </div>
      </LandingDrawer>
    </section>
  );
};

export default Contacts;
