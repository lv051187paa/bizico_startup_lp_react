import React, {Component, Fragment} from "react";
import {Header, Competencies, Advantages, About, Cases, Workflow, Contacts, Footer} from "./sections";

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
        <Contacts />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
