import React from "react";
import "./ContentHolder.less";

const ContentHolder = (props) => {
  return <div className='contentHolder'>{props.children}</div>;
};

export default ContentHolder;
