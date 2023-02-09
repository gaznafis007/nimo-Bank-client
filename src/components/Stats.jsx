import React from 'react'
import {stats} from "../constants/index"
import styles from '../styles'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`} id="stats">
      {
        stats.map(stat=>(
          <div className='flex justify-center items-center flex-row flex-1' key={stat.id}>
            <h4 className="font-poppins font-semibold text-white xs:text[40px] text-[30px] xs:leading[53px] leading-[43px] mr-2">{stat.value}</h4>
            <p className='font-poppins font-semibold text-gradient xs:text[20px] text-[15px] xs:leading[26px] leading-[21px]'>{stat.title}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Stats