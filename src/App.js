import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './cmp/Home';
import About from './cmp/About';
import Listing from './cmp/Listing';
import Protected from './cmp/Protected';
import Auth from './cmp/Auth';
import Nav from './cmp/Nav';

import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  return (
    <div className="App">

      <Router>

        <Nav />

        <Routes>

          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Auth />} />

          {/* <Route path="/home">
            <Home />
          </Route>

          <Route path="/">
            <Auth />
          </Route> */}
        </Routes>



      </Router>



    </div>
  );
}

export default App;
