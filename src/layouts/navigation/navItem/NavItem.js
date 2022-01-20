import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavItem.less";

const NavItem = (props) => {
  const { path, icon, label } = props;

  return (
    <NavLink activeClassName='active' className='navItem' to={path}>
      {icon && <div className='navItem__icon'>{icon}</div>}
      {label && <div className='navItem__label'>{label}</div>}
    </NavLink>
  );
};

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default NavItem;
