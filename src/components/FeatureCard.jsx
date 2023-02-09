import React from 'react'
import styles,{layout} from "../styles"
import {features} from "../constants/index"

const FeatureCard = ({icon,title,content,index}) => {
  return (
    <div className={`flex flex-row p-6 items-center gap-2 rounded-[20px] ${index !== features.length ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`rounded-full w-[64px] h-[64px] ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='object-contain w-1/2 h-1/2' />
        </div>
        <div className="flex flex-1 flex-col ml-3">
            <h3 className="font-poppins font-semibold text-white mb-1 text-[18px] leading-[23px]">{title}</h3>
            <p className="font-poppins font-normal text-dimWhite mb-1 text-[16px] leading-[23px]">{content}</p>
        </div>
    </div>
  )
}

export default FeatureCard