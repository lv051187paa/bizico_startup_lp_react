import React, {useState, useEffect} from 'react';

import axios from 'axios';

const ContentContext = React.createContext();

const ContentProvider = ({children}) => {
  const [content, setContent] = useState({});
  useEffect(() => {
    axios.get('mocks.json')
      .then((result) => {
        setContent(result)
      })
  }, [])
  return (
   <ContentContext.Provider value={content}>
     {children}
   </ContentContext.Provider>
  )
}

export default ContentProvider;
