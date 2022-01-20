import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import DashboardPage from '../pages/dashboard/DashboardPage'
import { withTranslation } from 'react-i18next'
import PrivateRoute from './privateRoute'
import Home from '../pages/home/Home'
import ErrorPage from '../pages/errorPage/ErrorPage'
import Settings from '../pages/settings/Settings'
import MainLayout from '../layouts/main/Main'
import CustomerPage from '../pages/customers/CustomerPage'
import OrderPage from '../pages/orders/OrderPage'
import PaymentPage from '../pages/payments/PaymentPage'
import Login from '../pages/login/Login'

const Router = (props) => {
  const { t } = props

  return (
    <Switch>
      <PrivateRoute
        path="/dashboard"
        render={() => {
          return (
            <MainLayout title={t('DASHBOARD')}>
              <DashboardPage />
            </MainLayout>
          )
        }}
      />
      <PrivateRoute
        path="/home"
        exact
        render={() => {
          return <Redirect to="/orders" />
        }}
      />
      <PrivateRoute
        path="/orders"
        exact
        render={() => {
          return (
            <MainLayout title={t('ORDERS')}>
              <OrderPage />
            </MainLayout>
          )
        }}
      />
      <PrivateRoute
        path="/payments"
        exact
        render={() => {
          return (
            <MainLayout title={t('PAYMENTS')}>
              <PaymentPage />
            </MainLayout>
          )
        }}
      />
      <PrivateRoute
        path="/customers"
        exact
        render={() => {
          return (
            <MainLayout title={t('CUSTOMERS')}>
              <CustomerPage />
            </MainLayout>
          )
        }}
      />
      <PrivateRoute
        path="/settings"
        exact
        render={() => {
          return (
            <MainLayout>
              <Settings />
            </MainLayout>
          )
        }}
      />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route component={ErrorPage} />
    </Switch>
  )
}

export default withTranslation()(Router)
