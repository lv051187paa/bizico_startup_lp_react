/* eslint-disable react/no-unused-state */
import React, { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const ResizeObserverContext = React.createContext();
const ResizeObserverConsumer = ResizeObserverContext.Consumer;

const getElementSize = (element) => {
  const {left, top, width, height} =
  element.contentRect || element.getBoundingClientRect();
  return {left, top, width, height};
};

const ResizeObserverProvider = ({children, element}) => {

  const [elementSize, setElementSize] = useState(getElementSize(element ));

  useEffect(() => {
    const observer = new ResizeObserver( (entries) => {
      entries.forEach( (entry) => setElementSize( getElementSize( entry ) ) );
    } );
    observer.observe( element );
  }, [])

  return (
    <ResizeObserverContext.Provider value={elementSize}>
      {children}
    </ResizeObserverContext.Provider>
  );

}

export {
  ResizeObserverContext,
  ResizeObserverProvider,
  ResizeObserverConsumer,
};
