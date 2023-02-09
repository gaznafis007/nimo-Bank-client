import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`bg-blue-gradient p-4  text-primary font-medium outline-none text-[18px] font-poppins rounded-md ${styles}`}>Get Started</button>
  )
}

export default Button