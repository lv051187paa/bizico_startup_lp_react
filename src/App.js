import React, {Component, Fragment} from "react";
import {Header, Competencies, Advantages, About, Cases, Workflow, Contacts, Footer} from "./sections";
import Modal from './components/Modal';
import CookiesWarn from './components/cookies/CookiesWarn';


class App extends Component {

  render() {
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
        <Modal initialVisibile={true} root="modal-root" blockScroll={false}
               component={(callback) => <CookiesWarn showToggle={() => callback()}/>}/>
        {/*<Modal initialVisibile={true} root="modal-root"*/}
               {/*component={(callback) => <CookiesText showToggle={() => callback()}/>}/>*/}
      </Fragment>
    );
  }
}

export default App;
