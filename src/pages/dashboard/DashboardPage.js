import React from 'react'
import { withTranslation } from 'react-i18next'
import FullPage from '../../layouts/pageTypes/FullPage'

const DashboardPage = props => {
  const { t } = props
  return (
    <FullPage>
      <h1> {t('DASHBOARD')}</h1>
    </FullPage>
  )
}

export default withTranslation()(DashboardPage)
