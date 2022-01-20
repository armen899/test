import React from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import MenuContent from "./MenuContent";
let { Sider } = Layout;

let Side = (props) => {
  const { language } = props;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      className='side'
    >
      <MenuContent language={language} />
    </Sider>
  );
};

function mapStateToProps(state) {
  return {
    collapsed: state.rootReducer.collapsed,
  };
}

export default connect(mapStateToProps)(Side);
