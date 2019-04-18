import React, { Component, Fragment } from "react";
import { Header, Competencies } from "./sections";


class App extends Component {
  render() {
    // console.log(content);
    return (
      <Fragment>
        <Header />
        <Competencies />
      </Fragment>
    );
  }
}

export default App;
