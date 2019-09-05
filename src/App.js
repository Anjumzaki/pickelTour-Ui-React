import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home'
import Nav from './components/navbar/Nav'
import MyHeader from './components/header/MyHeader'
import SubHeader from './components/subheader/SubHeader'



function App() {
  return (
    <div className="App">
     <Nav/>
     <MyHeader/>
     <SubHeader/>
     <Home/>
    </div>
  );
}

export default App;
