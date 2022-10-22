import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.jsx'

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  const cardElements = data.map(data => {
    return (<Card 
      img={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      location={data.location}
      title={data.title}
      price={data.price}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
    {/* <Hero /> */}
      {cardElements}
    </div>
  )
}