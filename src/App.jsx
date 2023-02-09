import React from 'react'
import styles from "./styles"
import {Navbar, Hero, Billing, Business, Clients, CardDeals, Footer, Testimonials, Stats} from "./components/components"

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
        <Clients/>
        <CardDeals/>
        <Testimonials/>
        <Billing/>
        <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App