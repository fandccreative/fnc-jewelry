import React, { Component } from 'react';

// import Header from './components/header';
import Slider from './components/slider';
import Infoslider from './components/infoslider';
// import Newsletter from './components/newsletter';
// import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Slider />
      	<Infoslider />
      </div>
    );
  }
}

export default App;
