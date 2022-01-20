import React, { useEffect, useState } from 'react'
import { compose } from 'recompose'
import { withTranslation } from 'react-i18next'
import repetedDataActions from '../../actions/repetedDataActions'
import ContentHolder from '../../components/contentHolder/ContentHolder'
import Filters from '../../components/filters/Filters'
import GridBox from '../../components/gridBox/GridBox'
import SaleIcon from '../../components/icons/SaleIcon'
import StatsCard from '../../components/statsCard/StatsCard'
import PaymentCheckedIcon from '../../components/icons/PaymentCheckedIcon'
import DebtIcon from '../../components/icons/DebtIcon'
import PaymentListSection from '../other/PaymentListSection'
import PaymentActions from '../../actions/paymentActions'
import PaymentBarChartSection from './PaymentBarChartSection'
import AreaListSection from '../other/AreaListSection'
import Outter from '../../components/outter/Outter'
import './PaymentPage.less'
import { notifyError } from '../../utils/notifications'
import DoughnutChart from '../../components/doughnutChart/DoughnutChart'
import PaymentListItem from './paymentListItem/PaymentListItem';

const defObj = {
  totalAmount: 0,
  count: 0,
  currencyName: '',
  p: { totalAmount: 0 },
}

const PaymentPage = (props) => {
  const { t } = props

  const [filter, setFilter] = useState({})
  const [saleNetValues, setsaleNetValues] = useState(defObj)
  const [paymentsValues, setpaymentsValues] = useState(defObj)

  useEffect(() => {
    const fill = async () => {
      if (Object.keys(filter).length > 0) {
        const resultSale = await repetedDataActions.sale(
          filter.dateFrom,
          filter.dateTo,
          filter.dateFromP,
          filter.dateToP
        )
        if (!resultSale.success) {
          notifyError(resultSale.errMsg)
        }
        const resultReturn = await repetedDataActions.return(
          filter.dateFrom,
          filter.dateTo,
          filter.dateFromP,
          filter.dateToP
        )
        if (!resultReturn.success) {
          notifyError(resultReturn.errMsg)
        }
        if (resultSale.success && resultReturn.success) {
          setsaleNetValues({
            totalAmount: resultSale.data.totalAmount - resultReturn.data.totalAmount,
            count: resultSale.data.count - resultReturn.data.count,
            currencyName: resultSale.data.currencyName,
            p: {
              totalAmount:
                resultSale.data.p.totalAmount - resultReturn.data.p.totalAmount,
            },
          })
        }
      }
    }
    fill()
  }, [filter])

  useEffect(() => {
    const fill = async () => {
      if (Object.keys(filter).length > 0) {
        const result = await PaymentActions.paymentObject(
          filter.dateFrom,
          filter.dateTo,
          filter.dateFromP,
          filter.dateToP
        )
        if (result.success) {
          setpaymentsValues(result.data)
        } else {
          notifyError(result.errMsg)
        }
      }
    }
    fill()
  }, [filter])

  const renderBlockSection = () => {
    return (
      <GridBox>
        <StatsCard
          icon={<SaleIcon />}
          title={t('SALES')}
          amount={saleNetValues.totalAmount}
          count={saleNetValues.count}
          currency={saleNetValues.currencyName}
          oldValue={saleNetValues.p.totalAmount}
        />
        <StatsCard
          icon={<PaymentCheckedIcon />}
          title={t('PAYMENTS')}
          amount={paymentsValues.totalAmount}
          count={paymentsValues.count}
          currency={paymentsValues.currencyName}
          oldValue={paymentsValues.p.totalAmount}
        />
        <StatsCard
          icon={<DebtIcon />}
          title={t('DEBT')}
          amount={saleNetValues.totalAmount - paymentsValues.totalAmount}
          count={saleNetValues.count - paymentsValues.count}
          currency={saleNetValues.currencyName}
          oldValue={saleNetValues.p.totalAmount - paymentsValues.p.totalAmount}
        />
      </GridBox>
    )
  }

  const renderDoughnutChart = () => {
    return (
      <Outter>
        <DoughnutChart
            labels={[t('DEBT'), t('PAYMENTS')]}
                    datasets={[{
              label: '# of Votes',
              data: [ saleNetValues.totalAmount - paymentsValues.totalAmount,
                paymentsValues.totalAmount,
              ],
              backgroundColor: ['rgba(83, 37, 180, 1)', 'rgba(226, 71, 71, 1)'],
              borderColor: ['rgba(83, 37, 180, 1)', 'rgba(226, 71, 71, 1)'],
              borderWidth: 1,
            },
          ]}
          className='doughnut-chart'
        />
      </Outter>
    )
  }

  return (
    <div className='paymentsView'>
      <Filters onChange={setFilter} />
      <ContentHolder>
        {renderBlockSection()}
        <PaymentListSection filter={filter} />
        <PaymentBarChartSection filter={filter} />
        <AreaListSection
          filter={filter}
          renderItem={(item) => {
            return <PaymentListItem item={item} />
          }}
        />
        {renderDoughnutChart()}
      </ContentHolder>
    </div>
  )
}

export default compose(withTranslation())(PaymentPage)
