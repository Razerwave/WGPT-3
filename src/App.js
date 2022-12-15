import { useState } from "react";
import {Article, Brand, CTA, Feature, Navbar } from './components'
import {Blog, Features, Footer, Header, WhatGPT3, Possibility } from './container'
import './App.css';

function App() {
  
    return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
          <Brand/>
          <WhatGPT3/>
          <Feature/>
          <Possibility/>
          <CTA/>
          <Blog/>
          <Footer/>
      </div>
    )
  
}

export default App;
