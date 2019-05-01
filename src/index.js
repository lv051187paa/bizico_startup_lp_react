import "@babel/polyfill";
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';

import React from "react";
import {hydrate, render} from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import "antd/dist/antd.css";
import "./scss/style.scss";
import "./scss/fonts.scss";
import App from "./App";
import NotFound from "./components/pages/NotFound";
import * as serviceWorker from "./serviceWorker";
import {DeviceDetectorProvider} from './context/DeviceDetector';
import ContentProvider from './context/ContentProvider';
import StickyHeader from './components/StickyHeader';
import registerServiceWorker from "./registerServiceWorker";

const rootElement = document.getElementById("root");
const RootApp = () => (

  <DeviceDetectorProvider>
    <ContentProvider>
      <BrowserRouter>
        <StickyHeader/>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </ContentProvider>
  </DeviceDetectorProvider>


);

if (rootElement.hasChildNodes()) {
  hydrate(<RootApp/>, rootElement);
} else {
  render(<RootApp/>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
registerServiceWorker();
