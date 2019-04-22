import React, {Component, Fragment} from "react";
import {Header, Competencies, Advantages, About, Cases, Workflow} from "./sections";

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
      </Fragment>
    );
  }
}

export default App;
