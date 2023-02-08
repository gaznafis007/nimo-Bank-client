import React from 'react'
import styles from "./styles"

const App = () => {
  return (
    <div className={`bg-primary w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className="text2xl text-white text-center">Hello</h2>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <h2 className="text-4xl text-white">Hero</h2>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
        <h2 className="text-4xl text-white">Hero</h2>
        </div>
      </div>
    </div>
  )
}

export default App