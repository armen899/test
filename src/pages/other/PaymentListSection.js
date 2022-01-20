import React, { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next'
import repetedDataActions from '../../actions/repetedDataActions'
import DynamicList from '../../components/dynamicList/DynamicList'
import GridBox from '../../components/gridBox/GridBox'
import StatsCard from '../../components/statsCard/StatsCard'
import { notifyError } from '../../utils/notifications'

const PaymentListSection = (props) => {
    const { t, filter } = props;

    const [listData, setlistData] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fill = async () => {
            setloading(true);
            if (Object.keys(filter).length > 0) {
                const result = await repetedDataActions.paymentList(filter.dateFrom, filter.dateTo, filter.dateFromP, filter.dateToP);
                if (result.success) {
                    setlistData(result.data);
                } else {
                    notifyError(result.errMsg)
                }
            }
            setloading(false);
        }
        fill();
    }, [filter])

    return (
        <GridBox
            title={t('PAYMENTS')}
        >
            <DynamicList
                dataSource={listData}
                loading={loading}
                renderItem={(item) => {
                    return (
                        <StatsCard
                            title={item.name}
                            amount={item.totalAmount}
                            count={item.count}
                            currency={item.currencyName}
                            oldValue={item.p.totalAmount}
                        />
                    )
                }}
            />
        </GridBox>
    )
}

export default withTranslation()(PaymentListSection);