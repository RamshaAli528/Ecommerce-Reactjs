import React from 'react'
import Button from '../Button/Button'
const Banner = ({heading ,bannerImg}) => {
  return (
      <>
        <div className="bg-gradient  mx-4 pl-4 rounded-lg flex relative z-[0]">
  <div className="flex-none basis-8/12"> 
    <h1 className="font-serif text-Cream text-[75px] pl-5 pr-6 py-4"> 
      {heading}
          </h1>
          <div className='mx-4'>
            <Button btnText='Get Started' />
            </div>
  </div>
  <div className="flex-none basis-4/12"> 
    <img 
      src={bannerImg} 
      alt="Product" 
      className="w-full h-auto object-cover rounded-br-lg" 
    />
  </div>
</div>

      </>
  )
}

export default Banner