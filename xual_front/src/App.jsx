import React from 'react'
import styles from './style'

import { Navbar, Hero, Stats, Business, Footer, Slider } from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    
    {/*Navbar compontent*/}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Slider />
        <Business />
        <Footer />
      </div>
    </div>

  </div>
)

export default App