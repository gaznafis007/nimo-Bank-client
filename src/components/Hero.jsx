import React from 'react'
import { discount, robot } from '../assets'
import styles from "../styles"
import Button from './Button'


const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 flex-col ${styles.flexStart} sm:px-16 xl:px-0 px-6`}>
          <div className="flex flex-row items-center px-4 py-[6px] bg-discount-gradient mb-2 rounded-[10px]">
            <img src={discount} alt="discount" className={`w-8 h-8`} />
            <p className={`${styles.paragraph} capitalize ml-2`}>
              <span className='text-white'>20%</span> discount for <span className='text-white'>1 month</span> account
            </p>
          </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div>
        <h1 className='text-white capitalize flex-1 font-poppins font-semibold ss:text-7xl text-4xl ss:leading-[100px] leading-[54px]'>
          the next <br className='sm:block hidden'></br> <span className='text-gradient'>generation</span> 
          <br className='sm:block hidden'></br>payment method
        </h1>
        <p className={`${styles.paragraph} text-sm my-4 ss:leading-10`}>Our team of experts uses a methodology to identify <br className='sm:block hidden'></br>the credit cards most likely to fit your needs.<br className='sm:block hidden'></br>We examine annual percentage rates, annual fees.</p>

        {/* <button className='bg-blue-gradient p-4 text-primary font-medium outline-none text-[18px] font-poppins rounded-md'>Get Started</button> */}
        <Button></Button>
        </div>
      </div>
      </div>
      <div className={`flex flex-1 ${styles.flexCenter} my-10`}>
        <img src={robot} alt="robot" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
        </div>
    </section>
  )
}

export default Hero