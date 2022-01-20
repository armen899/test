import React from "react";
import "./Navigation.less";
import NavItem from "./navItem/NavItem";
import { withTranslation } from "react-i18next";
// import DashboardIcon from "../../components/icons/DashboardIcon";
import OrdersIcon from "../../components/icons/OrdersIcon";
import PaymentsIcon from "../../components/icons/PaymentsIcon";
import CustomersIcon from "../../components/icons/CustomersIcon";

const Navigation = (props) => {
  const { language, t } = props;

  return (
    <div className='navigation' language={language}>
      {/* <NavItem
        active
        key='1'
        path='/dashboard'
        label={t("DASHBOARD")}
        icon={<DashboardIcon />}
      /> */}
      <NavItem
        key='2'
        path='/orders'
        label={t("ORDERS")}
        icon={<OrdersIcon />}
      />
      <NavItem
        key='3'
        path='/payments'
        label={t("PAYMENTS")}
        icon={<PaymentsIcon />}
      />
      <NavItem
        key='4'
        path='/customers'
        label={t("CUSTOMERS")}
        icon={<CustomersIcon />}
      />

      {/* <MenuContent language={language} /> */}
    </div>
  );
};

export default withTranslation()(Navigation);
