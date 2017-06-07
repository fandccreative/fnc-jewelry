import React, { Component } from 'react';
import Header from './components/header';
import Newsletter from './components/newsletter';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header />
      	<Newsletter />
      	<Footer />
      </div>
    );
  }
}

export default App;
