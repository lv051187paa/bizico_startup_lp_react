import React, {useContext, useState} from "react";
import {Drawer, PageHeader } from 'antd';
import SectionTitle from "../components/SectionTitle";
import {ContentContext} from "../context/ContentProvider";
import EmployeeCard from '../components/EmployeeCard';
import FeedbackForm from '../components/Forms/FeedbackForm';
import ContactAddress from '../components/ContactAddress';
import {Button} from "../components/Forms/formComponents";
import BackArrow from '../img/back-arrow.svg';


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
      <Drawer
        title={<PageHeader
          onBack={hideDrawer}
          title="Contact us"
          backIcon={<img src={BackArrow} />}
        />}
        placement="right"
        closable={false}
        width="auto"
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
      </Drawer>
    </section>
  );
};

export default Contacts;
