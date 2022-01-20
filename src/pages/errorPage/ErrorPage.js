import React from 'react'
import ErrorPic from '../../Images/err.jpg'
import './ErrorPage.less'

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={ErrorPic} alt="error" />
    </div>
  )
}

export default ErrorPage
