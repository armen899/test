import React from 'react'
import PropTypes from 'prop-types'
import './GridBox.less'

const GridBox = props => {
  
  const { className, title } = props;

  return (
    <>
      {title && <div className="gridBox__title">{title}</div>}
      <div className={`gridBox ${className ? `${className}` : ''}`}>
        {props.children}
      </div>
    </>
  )
}

GridBox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
}

export default GridBox
