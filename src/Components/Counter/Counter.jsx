import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Counter = ({ start, end, counterText }) => {
    const [counter, setCounter] = useState(false)
    return (
      <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
            <div className=' '
    //             style={{
    //       width: "100%",
    //       background: "black",
    //       color: "white",
    //       padding:"20px"
    //   }}
      >
         
                <h4 className=' text-center font-serif font-bold text-3xl bg-Purple  rounded-2xl p-5'>
                    {counter && 
              <CountUp start={start} end={end}  duration={2} delay={0}/>} K+
             <span className='block font-normal text-lg'>{counterText}</span>
          </h4>
          
            </div>
            </ScrollTrigger>
  )
}

export default Counter