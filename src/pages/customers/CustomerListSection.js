import React, { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next'
import CustomerActions from '../../actions/customerActions'
import { selectoptions } from '../../actions/userActions'
import DynamicList from '../../components/dynamicList/DynamicList'
import Outter from '../../components/outter/Outter'
import SelectCountry from '../../components/selects/SelectCountry'
import { notifyError } from '../../utils/notifications'

const CustomerListSection = (props) => {
  const { filter, renderItem } = props

  const [selectedAreaOption, setSelectedAreaOption] = useState(
    selectoptions.COUNTRY
  )
  const [areaList, setAreaList] = useState([])

  useEffect(() => {
    const fill = async () => {
      if (Object.keys(filter).length > 0) {
        let result
        switch (selectedAreaOption) {
          case selectoptions.COUNTRY:
            result = await CustomerActions.customerCountCountryList(
              filter.dateFrom,
              filter.dateTo
            )
            break
          case selectoptions.REGION:
            result = await CustomerActions.customerCountRegionList(
              filter.dateFrom,
              filter.dateTo
            )
            break
          case selectoptions.CITY:
            result = await CustomerActions.customerCountCityList(
              filter.dateFrom,
              filter.dateTo
            )
            break
          case selectoptions.DISTRICT:
            result = await CustomerActions.customerCountDistrictList(
              filter.dateFrom,
              filter.dateTo
            )
            break
          default:
            break
        }
        if (result.success) {
          setAreaList(result.data)
        } else {
          notifyError(result.errMsg)
        }
      }
    }
    fill()
  }, [selectedAreaOption, filter])

  return (
    <Outter>
      <SelectCountry
        onSelect={setSelectedAreaOption}
        value={selectedAreaOption}
        className="country-select-input"
      />
      <DynamicList
        dataSource={areaList}
        className="customer-grid"
        renderItem={renderItem}
      />
    </Outter>
  )
}

export default withTranslation()(CustomerListSection)
