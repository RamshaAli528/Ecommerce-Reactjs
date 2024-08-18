import React from 'react'

const Button = ({click, btnText = "default text" }) => {
    const buttonStyle = {
        color: 'white',
        backgroundColor: '#9a4d55', 
        transition: '.2s all ease-in',
        hover: {
            backgroundColor: '#2563eb'
        },
        fontWeight: '600', 
        padding: '0.5rem 1rem', 
        borderRadius: '0.375rem',
       
    };
    return (
        <button className='animate-bounce' style={buttonStyle}
            onClick={click}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#111c30")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#9a4d55")}
        >{btnText} </button>
  )
}

export default Button