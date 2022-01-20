import React, { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next';
import CustomerActions from '../../actions/customerActions';
import BasicChart from '../../components/basicChart/BasicChart'
import Outter from '../../components/outter/Outter'
import { notifyError } from '../../utils/notifications'

const CustomerBasicChartSection = (props) => {
  const { t } = props

  const [listData, setlistData] = useState([])

  useEffect(() => {
    const fill = async () => {
      const result = await CustomerActions.customerCountByMonthList()
      if (result.success) {
        setlistData(result.data)
      } else {
        notifyError(result.errMsg)
      }
    }
    fill()
  }, [])

  return (
    <Outter>
      <BasicChart
        labels={listData.map((it) => {
          return t(it.monthName)
        })}
        datasets={[
          {
            label: t('Customer_Count_by_Month_List'),
            data: listData.map((it) => {
              return it.count
            }),
            fill: false,
            backgroundColor: 'rgba(83, 37, 180, 1)',
            borderColor: 'rgba(83, 37, 180, 1)',
          },
        ]}
      />
    </Outter>
  )
}

export default withTranslation()(CustomerBasicChartSection)
