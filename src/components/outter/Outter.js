import React from 'react'
import PropTypes from 'prop-types'
import './Outter.less'

const Outter = props => {
  const { className, label } = props

  return (
    <div className="outter">
      {label && <div>{label}</div>}
      <div className={`outter__inner ${className ? `${className}` : ''}`}>
        {props.children}
      </div>
    </div>
  )
}

Outter.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
}

export default Outter
