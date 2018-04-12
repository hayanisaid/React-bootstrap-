import React, { Component } from 'react';
import Home from './components/home'
import About from './components/about'
import News from './components/news'
import Contact from './components/contact'
import CostumeNav from './components/costumeNav'
import {BrowserRouter as Router,Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>

          <div>
          <CostumeNav/>
          <Route exact path='/' component={Home} />
          <Route  path='/about' component={About}  />
          <Route  path='/news' component={News}  />
          <Route  path='/contact' component={Contact}  />
          </div> 
        </Router>
  
    );
  }
}

export default App;
