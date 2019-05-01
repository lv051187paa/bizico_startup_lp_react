/* eslint-disable react/no-unused-state */
import React, { useEffect, useState } from 'react';
import {
  ResizeObserverProvider,
  ResizeObserverConsumer,
} from './ResizeObserverContext';

const DeviceDetectorContext = React.createContext();
const MOBILE_MAX_WIDTH = 992;

const isMobileDevice = (size) =>
  size.width <= MOBILE_MAX_WIDTH;

const DeviceDetector = ({size, children}) =>{


  const [isMobile, setisMobile] = useState(isMobileDevice(size));

  useEffect(() => {
    if(isMobile !== isMobileDevice(size)){
      setisMobile(isMobileDevice(size))
    }

  });

    return (
      <DeviceDetectorContext.Provider value={isMobile}>
        {children}
      </DeviceDetectorContext.Provider>
    );

}

const DeviceDetectorProvider = ({ children }) => (
  <ResizeObserverProvider element={document.body}>
    <ResizeObserverConsumer>
      {(size) => <DeviceDetector size={size}>{children}</DeviceDetector>}
    </ResizeObserverConsumer>
  </ResizeObserverProvider>
);


export {
  DeviceDetectorContext,
  DeviceDetectorProvider,
};
