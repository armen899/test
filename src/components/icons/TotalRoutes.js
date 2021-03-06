import React from "react";

const TotalRoutes = (props) => {
  const { color } = props;
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.88703 3.05906C11.1629 1.73666 13.9604 1.75978 16.2149 3.1196C18.4473 4.50712 19.8041 6.98344 19.7914 9.64726C19.7395 12.2936 18.2846 14.7812 16.466 16.7042C15.4164 17.8191 14.2422 18.805 12.9675 19.6416C12.8362 19.7175 12.6924 19.7684 12.5431 19.7916C12.3995 19.7855 12.2596 19.743 12.1361 19.6681C10.1899 18.4109 8.48256 16.8062 7.0961 14.9311C5.93595 13.3659 5.27683 11.4749 5.20825 9.51494C5.20675 6.84601 6.61113 4.38145 8.88703 3.05906ZM10.2022 10.6195C10.585 11.5633 11.4887 12.1789 12.4912 12.1789C13.1479 12.1836 13.7793 11.9206 14.2445 11.4483C14.7097 10.9761 14.9702 10.3339 14.9679 9.6649C14.9714 8.6437 14.3702 7.72108 13.445 7.32781C12.5198 6.93454 11.4531 7.1482 10.743 7.86903C10.0328 8.58986 9.81934 9.67567 10.2022 10.6195Z'
        fill={color}
      />
      <ellipse
        opacity='0.4'
        cx='12.4998'
        cy='21.8749'
        rx='5.20833'
        ry='1.04167'
        fill={color}
      />
    </svg>
  );
};

export default TotalRoutes;
TotalRoutes.defaultProps = {
  color: "black",
};
