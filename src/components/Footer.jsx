import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import styles from '../styles'

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex-col justify-start mr-10 flex'>
          <h2 className='text-7xl text-white font-poppins font-bold'>nimo<span className='text-secondary'>Bank</span></h2>
        <p className={`${styles.paragraph} text-dimWhite mt-4 max-w-[470px]`}>
        A new way to make the payments<br className='sm:block hidden'/> easy, reliable and secure.
        </p>
        </div>
        <div className='flex-[1.5] flex flex-row w-full justify-between flex-wrap md:mt-0 mt-10'>
    {footerLinks.map(footerLink=>(
      <div key={footerLink.id} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
        <h4 className='font-poppins font-medium leading-[27px] text-white text-[18px]'>{footerLink.title}</h4>
        <ul className={`list-none mt-4`}>
          {
            footerLink.links.map((link,index)=>(<li key={index} className={`font-poppins font-normal text-base leading-6 text-dimWhite hover:text-secondary ${index!==footerLink.links.length-1 ? "mb-4" : "mb-0"}`}>{link.name}</li>))
          }
        </ul>
      </div>
    ))}
        </div>
      </div>
      <hr className='bg-white border-t-[1px] w-full' />
      <div className={`flex items-center md:flex-row flex-col justify-between w-full md:mt-6 mt-3`}>
        <p className='font-poppins font-normal text-center leading-[27px] text-white text-[18px]'>
          &copy; font-poppins font-normal text-base leading-6 text-dimWhite hover:text-secondary
        </p>
        <div className="flex flex-row mt-6 md:mt-0">
          {
            socialMedia.map((media,i)=>(
              <a href={media.link} className="cursor-pointer">
                <img key={media.id} src={media.icon} alt={media.id} className={` ${i !== socialMedia.length ? "mr-4" : mr-0}`}/>
              </a>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer