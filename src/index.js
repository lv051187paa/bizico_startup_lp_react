import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./scss/style.scss";
import "./scss/fonts.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ContentContext } from './context';
import content from "./mocks.json";

import ContentProvider from './context/ContentProvider';


ReactDOM.render(
  <ContentProvider>
    <ContentContext.Provider value={content}>
      <App/>
    </ContentContext.Provider>
  </ContentProvider>,
  document.getElementById( "root" )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
