import React from "react";

const CustomersIcon = (props) => {
  const { color } = props;
  return (
    <svg
      width='26'
      height='25'
      viewBox='0 0 26 25'
      fill='none'
      className='icon'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.55404 16.1152C4.40114 16.1152 0 16.9112 0 20.0927C0 23.2767 4.37316 24.1001 9.55404 24.1001C14.7069 24.1001 19.1081 23.3041 19.1081 20.1226C19.1081 16.9386 14.7349 16.1152 9.55404 16.1152Z'
        fill={color}
      />
      <path
        opacity='0.4'
        d='M9.55405 13.0823C13.0635 13.0823 15.8759 10.3281 15.8759 6.89127C15.8759 3.45441 13.0635 0.700195 9.55405 0.700195C6.04586 0.700195 3.23218 3.45441 3.23218 6.89127C3.23218 10.3281 6.04586 13.0823 9.55405 13.0823Z'
        fill={color}
      />
      <path
        opacity='0.4'
        d='M18.4256 7.0034C18.4256 8.75359 17.8888 10.3867 16.9475 11.7432C16.8496 11.8828 16.936 12.0709 17.1065 12.1008C17.3431 12.1394 17.586 12.163 17.8341 12.168C20.3018 12.2316 22.5163 10.6757 23.1282 8.33255C24.0351 4.85583 21.3741 1.73413 17.9842 1.73413C17.6166 1.73413 17.2642 1.7715 16.9208 1.84001C16.8737 1.84998 16.8228 1.8724 16.7974 1.91226C16.7643 1.96334 16.7885 2.02936 16.8216 2.07296C17.8404 3.47187 18.4256 5.17472 18.4256 7.0034Z'
        fill={color}
      />
      <path
        d='M25.7129 16.5201C25.2613 15.5771 24.1712 14.9306 22.5125 14.613C21.7302 14.4261 19.611 14.1608 17.6407 14.1981C17.6114 14.2019 17.5949 14.2218 17.5924 14.2343C17.5885 14.2542 17.5975 14.2841 17.6356 14.3053C18.5464 14.7462 22.066 16.6646 21.6234 20.7106C21.6043 20.8875 21.748 21.037 21.9274 21.0121C22.7936 20.8912 25.0222 20.4216 25.7129 18.9617C26.0957 18.1893 26.0957 17.2924 25.7129 16.5201Z'
        fill={color}
      />
    </svg>
  );
};

export default CustomersIcon;
CustomersIcon.defaultProps = {
  color: "balck",
};
