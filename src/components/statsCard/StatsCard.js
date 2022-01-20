import React from 'react'
import { withTranslation } from 'react-i18next'
import Outter from '../outter/Outter'
import UtilNumber from '../../utils/utilNumber'
import './StatsCard.less'
import CompareBlock from '../compareBlock/CompareBlock'

const StatsCard = props => {
  
  const { title, icon, amount, count, currency, t, oldValue } = props

  return (
    <Outter>
      <div className="statsCard">
        <div className="statsCard__title">
          {icon && <div className="statsCard__title--icon">{icon}</div>}
          {props.hasOwnProperty('title') && (
            <div className="statsCard__title--text">{title}</div>
          )}
        </div>
        <div className="statsCard__amountHolder">
          {props.hasOwnProperty('amount') && (
            <div className="statsCard__amountHolder--amount">
              <div className="statsCard__amountHolder--amount--label">
                {t('AMOUNT')}
              </div>
              <div className="statsCard__amountHolder--amount--value">
                {currency && t(currency)}
                {UtilNumber.formatKMB(amount)}
              </div>
            </div>
          )}
          {props.hasOwnProperty('count') && (
            <div className="statsCard__amountHolder--amount">
              <div className="statsCard__amountHolder--amount--label">
                {t('QUANTITY')}
              </div>
              <div className="statsCard__amountHolder--amount--value">
                {UtilNumber.formatKMB(count)}
              </div>
            </div>
          )}
        </div>
      </div>
      {props.hasOwnProperty('oldValue') && (
        <CompareBlock value={amount} oldValue={oldValue} currency={currency} />
      )}
    </Outter>
  )
}

export default withTranslation()(StatsCard)
