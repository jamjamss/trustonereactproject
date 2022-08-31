import React from 'react';
import { getCountyApi } from './fetchApi';


/* fetch data from external api */

const App = () => {
  
  const [fetchedData, setFetchedData] = React.useState([])
  const [flattenedFeatures, setFeatures] = React.useState([]);
  

  React.useEffect(() => {
    getCountyApi()
    .then(({features}) => {
      setFetchedData(features);
      setFeatures(features.map((features) => features.attributes));
    })
    .catch((error) => console.log(error.message));
 
  }, []); 


  return (
    <div className="App">
      <pre>{JSON.stringify(flattenedFeatures, null, 2)}</pre>

      </div>
  );
} 

export default App;
