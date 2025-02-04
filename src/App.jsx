import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Body from './Body'


function App() {
  const placeholders = ["e.g. oregano", "e.g. honey", "e.g. cheese"];
  let currentIndex = 0;
  setInterval(function() {
    document.querySelector(".textbox").placeholder = placeholders[currentIndex];
    currentIndex = (currentIndex + 1) % placeholders.length;
  }, 3000);
  
  return(
  <>
  <Header/>
  <Body/>
  </>
  )
}

export default App
