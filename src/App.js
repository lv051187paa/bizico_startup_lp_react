import React, { Component, Fragment } from "react";
import { Header, Competencies, Advantages, About, Cases } from "./sections";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Competencies />
        <Advantages />
        <About />
        <Cases />
      </Fragment>
    );
  }
}

export default App;
