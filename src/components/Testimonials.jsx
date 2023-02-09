import React from 'react'
import { feedback } from '../constants/index'

import styles,{layout
} from '../styles'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* todo */}
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] bottom-10 rounded-full blue__gradient'/>
      <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}>
        <h1 className={`${styles.heading2} capitalize`}>what people are<br className='sm:block hidden'/> tells about us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`text-dimWhite text-left max-w-[450px] ${styles.paragraph}`}>
          Everything you need to accept card payments<br className='sm:block hidden'/> and grow your business anywhere on the planet.
          </p>
        </div>
      </div>
      <div className={`flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]`}>
      {
          feedback.map(feed=>(
           <FeedbackCard key={feed.id} {...feed} />
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials