import React from "react";

const UserIcon = (props) => {
  const { color } = props;
  return (
    <svg
      width='11'
      height='15'
      viewBox='0 0 11 15'
      fill='none'
      className='icon'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.5 9.72241C2.5337 9.72241 0 10.1984 0 12.1024C0 14.0071 2.51788 14.4999 5.5 14.4999C8.4663 14.4999 11 14.0246 11 12.1199C11 10.2152 8.48281 9.72241 5.5 9.72241'
        fill={color}
      />
      <path
        opacity='0.4'
        d='M5.50009 7.90884C7.52072 7.90884 9.1397 6.26033 9.1397 4.20442C9.1397 2.14851 7.52072 0.5 5.50009 0.5C3.48014 0.5 1.86047 2.14851 1.86047 4.20442C1.86047 6.26033 3.48014 7.90884 5.50009 7.90884'
        fill={color}
      />
    </svg>
  );
};

export default UserIcon;
UserIcon.defaultProps = {
  color: "#767676",
};
