import React from 'react';
import { withTranslation } from 'react-i18next';
import UtilNumber from '../../../utils/utilNumber';
import './PaymentListItem.less';

const PaymentListItem = (props) => {
    const { item, t } = props

    return (
        <div className="order-list-card" >
            <div>
                <h1>{t(item.name)}</h1>
            </div>
            <div>
                <h5>
                    {UtilNumber.formatKMB(item.paymentCount)}
                </h5>
            </div>
            <div>
                <h5>
                    {item.currencyName} {UtilNumber.formatKMB(item.saleCount - item.returnTotalAmount - item.paymentCount)}

                </h5>

            </div>
        </div>

    );
}

export default withTranslation()(PaymentListItem);