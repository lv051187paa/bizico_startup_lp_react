import React, { Fragment } from "react";
import { Header, Competencies, Advantages, About, Cases, Workflow, Contacts, Footer } from "./sections";
import Modal from './components/Modal';
import CookiesWarn from './components/cookies/CookiesWarn';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Competencies/>
      <Advantages/>
      <About/>
      <Cases/>
      <Workflow/>
      <Contacts/>
      <Footer/>
      <CookiesWarn />
      {/*<Modal initialVisibile={true} root="modal-root" blockScroll={false}*/}
             {/*component={(callback) => <CookiesWarn showToggle={() => callback()}/>}/>*/}
    </Fragment>
  );

}

export default App;
