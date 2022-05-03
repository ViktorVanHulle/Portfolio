import React, { Component } from "react";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
// import Box from "./components/Box";
class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Home />
        {/* <Router>
          <Routes>
            <Route path="/" exact component={Home}></Route>
          </Routes>
        </Router> */}
      <Footer />
      </>
    )
  }
}

export default App