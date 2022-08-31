import React from 'react';
import { getCountyApi } from './fetchApi';


/* fetch data from external api */

const App = () => {
  
  const [fetchedData, setFetchedData] = React.useState([])

  React.useEffect(() => {
    getCountyApi().then(({features}) => setFetchedData(features ));
  }, []);


  return (
    <div className="App">
      <pre>{JSON.stringify(fetchedData, null, 2)}</pre>

      </div>
  );
}

export default App;
