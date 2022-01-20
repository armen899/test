import React from "react";
// import "./styles.less";

const FullPage = (props) => {
  const { children } = props;
  return <div className='full-page-container'>{children}</div>;
};

export default FullPage;
