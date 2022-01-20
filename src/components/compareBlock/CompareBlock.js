import React, { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next'
import UtilNumber from '../../utils/utilNumber'
import './CompareBlock.less'

const CompareBlock = props => {
  const { value, oldValue, currency, t } = props

  const [per, setPer] = useState(0)

  const result = value - oldValue

  useEffect(() => {
    let ov = parseFloat(oldValue)
    let v = parseFloat(value)
    if ((v && !ov) || (!v && ov)) {
      setPer(100)
    } else if (!v && !ov) {
      setPer(0)
    } else {
      setPer((result / v) * 100)
    }
  }, [value, oldValue, result])

  return (
    <div
      className={`compareValue ${
        result > 0
          ? 'compareValue__positive'
          : result < 0
          ? 'compareValue__negative'
          : ''
      }`}
    >
      {result > 0 ? '+' : result < 0 ? '-' : ''}
      {t(currency)}
      {UtilNumber.formatKMB(Math.abs(result))} ({Math.round(Math.abs(per))}%)
    </div>
  )
}

CompareBlock.defaultProps = {
  oldValue: 0,
  value: 0,
  currency: ''
}

export default withTranslation()(CompareBlock)
