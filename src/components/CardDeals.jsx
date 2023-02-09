import React from 'react'
import { card } from '../assets'
import styles,{ layout } from '../styles'
import Button from "./Button"

const CardDeals = () => {
  return (
    <section className={`overflow-hidden ${layout.section}`}>
      <div className={layout.sectionInfo}>
      <h2 className={`capitalize ${styles.heading2}`}>find a better card deal <br className='sm:block hidden'/>within few steps</h2>
          <p className={`${styles.paragraph} text-dimWhite mt-5 max-w-[470px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
        {/* <button className='bg-blue-gradient p-4 text-primary rounded-md mt-5 font-medium outline-none text-[18px] font-poppins'>Get Started</button> */}
        <Button styles="mt-5"></Button>
      </div>
      <div className={`flex-col ${layout.sectionImg}`}>
        <img src={card} alt="" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeals