import React from 'react'
import styles, { layout } from '../styles'
import Button from './Button'

const CallToAction = () => {
  return (
    <section className={`${styles.flexCenter} bg-black-gradient rounded-xl sm:my-16 my-6 sm:flex-row flex-col box-shadow ${styles.padding}`}>
        <div className='flex-1 flex flex-col'>
            <h2 className={`${styles.heading2} capitalize`}>let's try our service now</h2>
            <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>Everything you need to accept card payments<br className='sm:block hidden'/> and grow your business anywhere on the planet.</p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button></Button>
        </div>
    </section>
  )
}

export default CallToAction