import React, {useState, useEffect} from 'react';

import axios from 'axios';

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
     {content ? children : <div>...loading</div>}
   </ContentContext.Provider>
  )
}

export default ContentProvider;
