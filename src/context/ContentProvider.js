import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import content from '../mocks.json';

import { Preloader } from '../components/Preloader';

export const ContentContext = React.createContext();

const ContentProvider = ({children}) => {
  const [content, setContent] = useState( null );
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  useEffect( () => {
    const fetchData = async () => {
      await sleep(800);
      await axios.get( 'mocks.json' )
        .then( (result) => {
          setContent( content => result.data )
        } )
    };
    fetchData();
  }, [] );
  return (
    <ContentContext.Provider value={content}>
      {content ? children : <Preloader/>}
      {/*{children}*/}
    </ContentContext.Provider>
  )
};

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentProvider;
