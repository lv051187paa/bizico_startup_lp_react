import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Preloader} from '../components/Preloader';

export const ContentContext = React.createContext();

const ContentProvider = ({children}) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    axios.get('mocks.json')
      .then((result) => {
        setContent(content => result.data)

      })
  }, []);

  return (
   <ContentContext.Provider value={content}>
     {content ? children : <Preloader />}
   </ContentContext.Provider>
  )
}

export default ContentProvider;
