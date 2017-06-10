import React, { Component } from 'react';

import Banner from './components/banner';
import Tab from './components/tab';
import Collection from './components/collection';
import Arrival from './components/arrival';
// import Offer from './components/offer';
import Feature from './components/feature';
import Special from './components/special';
import Newsletter from './components/newsletter';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Banner />
      	<Tab />
      	<Collection />
      	<Arrival />
        <Feature />
        <Special />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default App;
