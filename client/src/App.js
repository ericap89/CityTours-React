import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import TourList from './components/TourList/TourList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <TourList/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
