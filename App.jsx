import React from 'react';
import InstantSearch from './containers/InstantSearchContainer.js';

class App extends React.Component {
   render() {
      return (
         <div>
            <h3> Instant Search </h3>
            <InstantSearch
            />
         </div>
      );
   }
}

export default App;