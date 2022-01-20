import React from 'react';
import { connect } from 'react-redux';
import './AppHeader.less';
import { SettingOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

let AppHeader = props => {
  
  const { title } = props;

  return (
    <div className="appHeader">
      <div className="appHeader__pageTitle">{title}</div>
      <Link to="/settings">
        <SettingOutlined />
      </Link>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    collapsed: state.rootReducer.collapsed
  }
}

export default connect(mapStateToProps)(AppHeader)
