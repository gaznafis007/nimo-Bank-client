import React from 'react'
import styles,{layout} from "../styles"
import Button from './Button'
import {features} from "../constants/index"
import FeatureCard from './FeatureCard'
const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
          <h2 className={`capitalize ${styles.heading2}`}>you do the business, <br className='sm:block hidden'/>we'll handle the money</h2>
          <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
          </p>
        {/* <button className='bg-blue-gradient p-4 text-primary rounded-md mt-5 font-medium outline-none text-[18px] font-poppins'>Get Started</button> */}
        <Button styles="mt-5"></Button>
      </div>
      <div className={`flex-col ${layout.sectionImg}`}>
        {
          features.map(feature=><FeatureCard key={feature.id} {...feature}></FeatureCard>)
        }
      </div>
    </section>
  )
}

export default Business