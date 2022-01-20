import React, { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next'
import { compose } from 'recompose'
import Filters from '../../components/filters/Filters'
import ContentHolder from '../../components/contentHolder/ContentHolder'
import GridBox from '../../components/gridBox/GridBox'
import StatsCard from '../../components/statsCard/StatsCard'
import TotalIcon from '../../components/icons/TotalIcon'
import OrdersIcon from '../../components/icons/OrdersIcon'
import ReturnICon from '../../components/icons/ReturnIcon'
import repetedDataActions from '../../actions/repetedDataActions'
import AreaListSection from '../other/AreaListSection'
import DoughnutChart from '../../components/doughnutChart/DoughnutChart'
import Outter from '../../components/outter/Outter'
import PaymentListSection from '../other/PaymentListSection'
import OrderListItem from './orderListItem/OrderListItem'
import { notifyError } from '../../utils/notifications'
import './OrderPage.less'

const defObj = {
  totalAmount: 0,
  count: 0,
  currencyName: '',
  p: { totalAmount: 0 }
}

const OrderPage = props => {
  const { t } = props

  const [filter, setFilter] = useState({})
  const [saleValues, setsaleValues] = useState(defObj)
  const [returnValues, setreturnValues] = useState(defObj)
  const [totalValues, settotalValues] = useState(defObj)

  useEffect(() => {
    const fill = async () => {
      if (Object.keys(filter).length > 0) {
        const resultSale = await repetedDataActions.sale(
          filter.dateFrom,
          filter.dateTo,
          filter.dateFromP,
          filter.dateToP
        )
        if (resultSale.success) {
          setsaleValues(resultSale.data)
        } else {
          notifyError(resultSale.errMsg)
        }
        const resultReturn = await repetedDataActions.return(
          filter.dateFrom,
          filter.dateTo,
          filter.dateFromP,
          filter.dateToP
        )
        if (resultReturn.success) {
          setreturnValues(resultReturn.data)
        } else {
          notifyError(resultReturn.errMsg)
        }
      }
    }
    fill()
  }, [filter])

  useEffect(() => {
    settotalValues({
      totalAmount: saleValues.totalAmount - returnValues.totalAmount,
      count: saleValues.count - returnValues.count,
      currencyName: saleValues.currencyName,
      p: {
        totalAmount: saleValues.p.totalAmount - returnValues.p.totalAmount
      }
    })
  }, [saleValues, returnValues])

  const renderBlockSection = () => {
    return (
      <GridBox>
        <StatsCard
          icon={<OrdersIcon />}
          title={t('ORDERS')}
          amount={saleValues.totalAmount}
          count={saleValues.count}
          currency={saleValues.currencyName}
          oldValue={saleValues.p.totalAmount}
        />
        <StatsCard
          icon={<ReturnICon />}
          title={t('RETURN')}
          amount={returnValues.totalAmount}
          count={returnValues.count}
          currency={returnValues.currencyName}
          oldValue={returnValues.p.totalAmount}
        />
        <StatsCard
          icon={<TotalIcon />}
          title={t('TOTAL_SALES')}
          amount={totalValues.totalAmount}
          count={totalValues.count}
          currency={totalValues.currencyName}
          oldValue={totalValues.p.totalAmount}
        />
      </GridBox>
    )
  }

  const renderDoughnutChart = () => {
    return (
      <Outter>
       <div className="doughnut-wrapper">
         <div className="doughnut-chart-info">
          <div className="statsCard__amountHolder--amount amount-wrapper">
              <div className="statsCard__amountHolder--amount--label label-wrapper">
                <div className="order"></div>
              Orders
              </div>
              <div className="statsCard__amountHolder--amount--value">
                <span>34,8k</span>
                <span className="percent-value">(83%)</span>
              </div>
            </div>
            <div className="statsCard__amountHolder--amount">
              <div className="statsCard__amountHolder--amount--label label-wrapper">
              <div className="returns"></div>
              Returns
              </div>
              <div className="statsCard__amountHolder--amount--value">
                <span>18k</span>
                <span className="percent-value">(17%)</span>
              </div>
            </div>
         </div>

        <DoughnutChart
          datasets={[
            {
              label: '# of Votes',
              data: [saleValues.totalAmount, returnValues.totalAmount],
              backgroundColor: ['rgba(83, 37, 180)', 'rgba(226, 71, 71)'],
              borderColor: ['rgba(83, 37, 180)', 'rgba(226, 71, 71)'],
              borderWidth: 1
            }
          ]}
          className="doughnut-chart"
        />
         </div>
      </Outter>
    )
  }

  return (
    <div className="ordersView">
      <Filters onChange={setFilter} />
      <ContentHolder>
        {renderBlockSection()}
        <PaymentListSection filter={filter} />
        <AreaListSection
          filter={filter}
          header={<div className="order-list-label">
            {["Country", "Quantity", "Amount"].map((oo) => {
              return <div>{oo}</div>
            }
            )}
          </div>}
          renderItem={(item, index) => {
            console.log('index ', index);
            return <OrderListItem item={item} index={index} />
          }}
        />
        {renderDoughnutChart()}
      </ContentHolder>
    </div>
  )
}

export default compose(withTranslation())(OrderPage)
