import React from "react";

const FiltersIcon = (props) => {
  const { color, onClick } = props;
  return (
    <svg
      width='18'
      height='19'
      viewBox='0 0 18 19'
      fill='none'
      className='icon'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
    >
      <path
        d='M11.5715 11.1827L17.4266 4.98237C17.7929 4.5936 18 4.06259 18 3.50841V1.68994C18 0.548914 17.1423 0 16.0844 0H1.91556C0.857655 0 0 0.548914 0 1.68994V3.54107C0 4.06575 0.18462 4.57147 0.517719 4.95497L5.89711 11.15C5.9987 11.267 6.14034 11.3333 6.28979 11.3344L11.1915 11.3491C11.3332 11.3502 11.4699 11.2912 11.5715 11.1827Z'
        fill={color}
      />
      <path
        opacity='0.4'
        d='M6.05627 11.2793V18.2508C6.05627 18.5047 6.1774 18.7439 6.3757 18.8809C6.48901 18.9599 6.6199 18.9999 6.7508 18.9999C6.84946 18.9999 6.94812 18.9778 7.03994 18.9335L11.0059 16.9823C11.254 16.8611 11.4132 16.5946 11.4132 16.3006V11.2793H6.05627Z'
        fill={color}
      />
    </svg>
  );
};

export default FiltersIcon;
FiltersIcon.defaultProps = {
  color: "#5325B4",
};
