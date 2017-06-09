import React, { Component } from 'react';

import Banner from './components/banner';
import Tab from './components/tab';
import Collection from './components/collection';
import Arrival from './components/arrival';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Banner />
      	<Tab />
      	<Collection />
      	<Arrival />
      </div>
    );
  }
}

export default App;
