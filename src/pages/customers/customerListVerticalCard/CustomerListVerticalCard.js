import React from 'react';
import { withTranslation } from 'react-i18next';
import "./CustomerListVerticalCard.less";

const CustomerListVerticalCard = (props) => {
    const { item, t } = props
    return (
        <div className="customer-block-vertical">
            <div>
                <h5>{t(item.name)}</h5>
            </div>
            <div>
                <h5>{t(item.count)}</h5>
            </div>
        </div >

    );
}

export default withTranslation()(CustomerListVerticalCard);