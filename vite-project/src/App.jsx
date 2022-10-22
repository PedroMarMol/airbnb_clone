import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
              {/* <Hero /> */}
  return (
    <div className="App">
      <Navbar />
      <Card 
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount="6"
        country="Spain"
        title="Test 1 of props usage"
        price="136"
      />
    </div>
  )
}