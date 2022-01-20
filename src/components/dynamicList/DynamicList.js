import React from 'react'
import { List } from 'antd'
import './DynamicList.less'

const DynamicList = props => {
  
  const { dataSource, className, renderItem, loading } = props;

  return (
    <List
      className={`dynamicList  ${className ? `${className}` : ''}`}
      dataSource={dataSource}
      renderItem={renderItem}
      loading={loading}
    />
  )
}

export default DynamicList
