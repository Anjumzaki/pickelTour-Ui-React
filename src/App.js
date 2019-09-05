import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home'
import Nav from './components/navbar/Nav'
import MyHeader from './components/header/MyHeader'
import SubHeader from './components/subheader/SubHeader'
import Tornaments from './components/tournaments/Tornaments'
import Footer from './components/footer/Footer'





function App() {
  return (
    <div className="App">
     <Nav/>
     <MyHeader/>
     <SubHeader/>
     <Tornaments/>
     <Footer/>
     
    </div>
  );
}

export default App;
