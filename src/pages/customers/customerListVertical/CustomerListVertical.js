import React from 'react'
import DynamicList from '../../../components/dynamicList/DynamicList'
import CustomerListVerticalCard from '../CustomerListVerticalCard/CustomerListVerticalCard'

const CustomerListVertical = props => {
  
  const { dataSource } = props;

  return (
    <DynamicList
      dataSource={dataSource}
      className="customer-grid"
      renderItem={item => {
        return <CustomerListVerticalCard item={item} />
      }}
    />
  )
}

export default CustomerListVertical
