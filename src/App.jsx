import React from 'react'
import styles from "./styles"
import {Navbar, Hero, Billing, Business, Clients, CardDeals, Footer, Testimonials, Stats} from "./components/components"
import CallToAction from './components/CallToAction'

const App = () => {
  return (
    <div className={`bg-primary w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeals/>
        <Testimonials/>
        <Clients/>
        <CallToAction/>
        <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App