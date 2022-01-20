import React from 'react'
import PropTypes from 'prop-types'

const FlagNoimage = props => {
  const { color } = props
  return (
    <svg 
        width="18" 
        height="11" 
        viewBox="0 0 18 11" 
        fill="none" 
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
    >
    <path 
        d="M0 2.6C0 2.04219 0 1.76328 0.0552602 1.53311C0.230829 0.801812 0.801812 0.230829 1.53311 0.0552602C1.76328 0 2.04219 0 2.6 0H15.4C15.9578 0 16.2367 0 16.4669 0.0552602C17.1982 0.230829 17.7692 0.801812 17.9447 1.53311C18 1.76328 18 2.04219 18 2.6V8.4C18 8.95781 18 9.23672 17.9447 9.46689C17.7692 10.1982 17.1982 10.7692 16.4669 10.9447C16.2367 11 15.9578 11 15.4 11H2.6C2.04219 11 1.76328 11 1.53311 10.9447C0.801812 10.7692 0.230829 10.1982 0.0552602 9.46689C0 9.23672 0 8.95781 0 8.4V2.6Z" 
        fill={color}
    />
    <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M3.2 3.19995C3.2 2.64767 3.64772 2.19995 4.2 2.19995H13.8C14.3523 2.19995 14.8 2.64767 14.8 3.19995V7.79995C14.8 8.35224 14.3523 8.79995 13.8 8.79995H4.2C3.64772 8.79995 3.2 8.35224 3.2 7.79995V3.19995ZM4.2 2.79995C3.97909 2.79995 3.8 2.97904 3.8 3.19995V5.96165L6.67268 3.75584C6.78369 3.6706 6.93575 3.68412 7.03222 3.78782L9.04852 5.95535L11.2051 4.34832C11.2982 4.27894 11.4156 4.28476 11.504 4.36314L14.2 6.75478V3.19995C14.2 2.97904 14.0209 2.79995 13.8 2.79995H4.2ZM14.2 7.58726L11.3324 5.04345L9.48254 6.42193L11.1365 8.19995H13.8C14.0209 8.19995 14.2 8.02087 14.2 7.79995V7.58726ZM3.8 7.79995V6.69899L6.80472 4.39179L10.3472 8.19995H4.2C3.97909 8.19995 3.8 8.02086 3.8 7.79995Z" 
        fill="#A2A2A2"
    />
    </svg>
    
    
  )
}

FlagNoimage.propTypes = {
  color: PropTypes.string
}
FlagNoimage.defaultProps = {
  color: '#f3f4f8'
}

export default FlagNoimage