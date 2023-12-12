import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='gradient__bg'>
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

// https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3