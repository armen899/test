import React from 'react'
import FlagNoimage from '../../../components/icons/FlagNoimage'
import { withTranslation } from 'react-i18next';
import UtilNumber from '../../../utils/utilNumber';
import "./OrderListItem.less"

const OrderListItem = (props) => {

    const { item, t } = props
console.log(' flag = ',item.flag);
    return (
        <div className="order-list-card" >   
            <div className="order-list-wrapper">    
                <div className="order-list-content">
                    <div className="country-flag">
                        <FlagNoimage />
                    </div>
                    <h1>
                        {t(item.name)}
                    </h1>
                </div>
                <div className="order-list-content order-list-info">
                    <div className="content-info">
                        <h5>{UtilNumber.formatKMB(item.saleCount)}</h5>
                    </div>
                    {/* <div>
                        {item.currencyName} <h5>{UtilNumber.formatKMB(item.returnTotalAmount)}</h5>
                    </div> */}
                    <div className="content-info">
                        {item.currencyName} <h5>{UtilNumber.formatKMB(item.saleTotalAmount - item.returnTotalAmount)}</h5>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default withTranslation()(OrderListItem);