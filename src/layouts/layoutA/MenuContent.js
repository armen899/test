import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

const MenuContent = (props) => {

  const { t } = props;
  
  return (
    <Menu theme='light'>
      {/* <Menu.Item key='1' icon={<HomeOutlined />}>
        <Link to='/dashboard'>{t("DASHBOARD")}</Link>
      </Menu.Item> */}
      <Menu.Item key='2' icon={<HomeOutlined />}>
        <Link to='/orders'>{t("ORDERS")}</Link>
      </Menu.Item>
      <Menu.Item key='3' icon={<HomeOutlined />}>
        <Link to='/payments'>{t("PAYMENTS")}</Link>
      </Menu.Item>
      <Menu.Item key='4' icon={<HomeOutlined />}>
        <Link to='/customers'>{t("CUSTOMERS")}</Link>
      </Menu.Item>
    </Menu>
  );
};

export default withTranslation()(MenuContent);
