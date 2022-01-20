import React from 'react'
import PropTypes from 'prop-types'

const CalendarIcon = props => {
  const { color } = props
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 15.6961V7.66016H19V15.7605C19 19.0739 16.9144 21.1111 13.5774 21.1111H5.41218C2.10648 21.1111 0 19.0317 0 15.6961ZM5.23488 13.0994C4.75518 13.1216 4.35892 12.7405 4.33806 12.256C4.33806 11.7705 4.71347 11.3694 5.19316 11.3472C5.66243 11.3472 6.04827 11.7177 6.0587 12.1917C6.07955 12.6783 5.70414 13.0794 5.23488 13.0994ZM9.52088 13.0994C9.04119 13.1216 8.64492 12.7405 8.62407 12.256C8.62407 11.7705 8.99948 11.3694 9.47917 11.3472C9.94843 11.3472 10.3343 11.7177 10.3447 12.1917C10.3656 12.6783 9.99015 13.0794 9.52088 13.0994ZM13.7755 16.9839C13.2959 16.9733 12.91 16.5722 12.91 16.0867C12.8996 15.6011 13.2854 15.201 13.7651 15.1905H13.7755C14.2657 15.1905 14.6619 15.5916 14.6619 16.0867C14.6619 16.5828 14.2657 16.9839 13.7755 16.9839ZM8.62407 16.0867C8.64492 16.5722 9.04119 16.9533 9.52088 16.9311C9.99015 16.911 10.3656 16.5099 10.3447 16.0244C10.3343 15.5494 9.94843 15.1789 9.47917 15.1789C8.99948 15.201 8.62407 15.6011 8.62407 16.0867ZM4.32769 16.0867C4.34854 16.5722 4.74481 16.9533 5.2245 16.9311C5.69377 16.911 6.06918 16.5099 6.04833 16.0244C6.0379 15.5494 5.65206 15.1789 5.18279 15.1789C4.7031 15.201 4.32769 15.6011 4.32769 16.0867ZM12.9204 12.2455C12.9204 11.7599 13.2959 11.3694 13.7755 11.3588C14.2448 11.3588 14.6202 11.7378 14.6411 12.2033C14.6515 12.6888 14.2761 13.0899 13.8068 13.0994C13.3271 13.11 12.9309 12.7405 12.9204 12.256V12.2455Z"
        fill={color}
      />
      <path
        opacity="0.4"
        d="M0.00354004 7.66014C0.0170966 7.04053 0.0692371 5.81081 0.167261 5.41498C0.66781 3.18881 2.36759 1.77437 4.79734 1.57275H14.2035C16.6124 1.78492 18.333 3.20887 18.8336 5.41498C18.9305 5.80025 18.9827 7.03948 18.9962 7.66014H0.00354004Z"
        fill={color}
      />
      <path
        d="M5.59959 4.845C6.05843 4.845 6.40256 4.49772 6.40256 4.03222V0.813833C6.40256 0.348333 6.05843 0 5.59959 0C5.14076 0 4.79663 0.348333 4.79663 0.813833V4.03222C4.79663 4.49772 5.14076 4.845 5.59959 4.845Z"
        fill={color}
      />
      <path
        d="M13.4003 4.845C13.8487 4.845 14.2032 4.49772 14.2032 4.03222V0.813833C14.2032 0.348333 13.8487 0 13.4003 0C12.9414 0 12.5973 0.348333 12.5973 0.813833V4.03222C12.5973 4.49772 12.9414 4.845 13.4003 4.845Z"
        fill={color}
      />
    </svg>
  )
}

CalendarIcon.propTypes = {
  color: PropTypes.string
}

export default CalendarIcon
CalendarIcon.defaultProps = {
  color: '#5325B4'
}
