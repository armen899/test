import React, { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next'
import { compose } from 'recompose'
import CustomerActions from '../../actions/customerActions'
import ContentHolder from '../../components/contentHolder/ContentHolder'
import Filters from '../../components/filters/Filters'
import GridBox from '../../components/gridBox/GridBox'
import StatsCard from '../../components/statsCard/StatsCard'
import CustomerBasicChartSection from './CustomerBasicChartSection'
import CustomerListSection from './CustomerListSection'
import CustomerListItem from './customerListItem/CustomerListItem'
import { notifyError } from '../../utils/notifications'
import TotalCustomersIcon from '../../components/icons/TotalCustomersIcon'
import TotalRoutes from '../../components/icons/TotalRoutes'
import './CustomerPage.less'

const defObj = { totalAmount: 0, count: 0, currencyName: '', p: { totalAmount: 0 } }

const CustomerPage = (props) => {
  const { t } = props

  const [filter, setFilter] = useState({})
  const [customerValues, setcustomerValues] = useState(defObj)
  const [routeValues, setrouteValues] = useState(defObj)

  useEffect(() => {
    const fill = async () => {
      if (Object.keys(filter).length > 0) {
        const resultCustomer = await CustomerActions.countCustomer(
          filter.dateFrom,
          filter.dateTo,
          filter.dateFromP,
          filter.dateToP
        )
        if (resultCustomer.success) {
          setcustomerValues(resultCustomer.data)
        } else {
          notifyError(resultCustomer.errMsg)
        }
        const resultRout = await CustomerActions.routCustomerCount(
          filter.dateFrom,
          filter.dateTo,
          filter.dateFromP,
          filter.dateToP
        )
        if (resultRout.success) {
          setrouteValues(resultRout.data)
        } else {
          notifyError(resultRout.errMsg)
        }
      }
    }
    fill()
  }, [filter])

  const renderBlockSection = () => {
    return (
      <GridBox>
        <StatsCard icon={<TotalCustomersIcon/>} title={t('Customer_Count')} count={customerValues.count} />
        <StatsCard icon={<TotalRoutes/>} title={t('Routing')} count={routeValues.count} />
      </GridBox>
    )
  }

  return (
    <div className='customersView'>
      <Filters onChange={setFilter} />
      <ContentHolder>
        {renderBlockSection()}
        <CustomerBasicChartSection filter={filter} />
        <CustomerListSection
          filter={filter}
          renderItem={(item) => {
            return <CustomerListItem item={item} />
          }}
        />
      </ContentHolder>
    </div>
  )
}

export default compose(withTranslation())(CustomerPage)
