import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import repetedDataActions from '../../actions/repetedDataActions';
import BarChart from '../../components/barChart/BarChart';
import Outter from '../../components/outter/Outter';
import { notifyError } from '../../utils/notifications';

const PaymentBarChartSection = (props) => {

    const { filter, t } = props;

    const [listData, setListData] = useState([])
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fill = async () => {
            setloading(true)
            if (Object.keys(filter).length > 0) {
                const result = await repetedDataActions.saleReturnPaymentByMonthList(
                    filter.dateFrom, filter.dateTo,
                )
                if (result.success) {
                    setListData(result.data)
                } else {
                    notifyError(result.errMsg)
                }
            }
            setloading(false)
        }
        fill()
    }, [filter])

    return (
        <Outter>
            {
                !loading &&
                <BarChart
                    labels={
                        listData.map(it => {
                            return t(it.monthName)
                        })
                    }
                    dataSets={[
                        {
                            label: t('SALES'),
                            data:
                                listData.map(it => {
                                    return it.saleCount - it.returnCount
                                }),
                            backgroundColor: 'rgb(162, 160, 255)',
                            borderColor: 'rgb(162, 160, 255)'
                        },
                        {
                            label: t('PAYMENTS'),
                            data:
                listData.map(it => {
                                    return it.paymentCount
                                }),
                            backgroundColor: 'rgba(83, 37, 180)',
                            borderColor: 'rgba(83, 37, 180)'
                        },
                        {
                            label: t('DEBT'),
                            data:
                                listData.map(it => {
                                    return it.paymentCount
                                }),
                            backgroundColor: 'rgba(226, 71, 71)',
                            borderColor: 'rgba(226, 71, 71)'
                        }
                    ]}
                />
            }
        </Outter>
    )
}

export default withTranslation()(PaymentBarChartSection);