import React, { useEffect, useState } from 'react'
import repetedDataActions from '../../actions/repetedDataActions'
import { selectoptions } from '../../actions/userActions'
import AppList from '../../components/appList/AppList'
import Outter from '../../components/outter/Outter'
import SelectCountry from '../../components/selects/SelectCountry'
import { notifyError } from '../../utils/notifications'

const AreaListSection = (props) => {
  const { filter, renderItem, header } = props

  const [selectedAreaOption, setSelectedAreaOption] = useState(
    selectoptions.COUNTRY
  )
  const [listData, setlistData] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const selectArea = async () => {
      setloading(true)
      if (Object.keys(filter).length > 0) {
        let result
        switch (selectedAreaOption) {
          case selectoptions.COUNTRY:
            result = await repetedDataActions.CountryList(
              filter.dateFrom,
              filter.dateTo
            )

            // let ooo = {
            //   currencyName: "AMD",
            //   debt: 63500,
            //   id: "9",
            //   flag:"am.png",
            //   name: "Armenia",
            //   paymentCount: "8",
            //   paymentTotalAmount: "-6200",
            //   returnCount: "2",
            //   returnTotalAmount: "2200",
            //   saleCount: "4",
            //   saleTotalAmount: "61500",
            // }
            // result.data.unshift(ooo)
            break
          case selectoptions.REGION:
            result = await repetedDataActions.RegionList(
              filter.dateFrom,
              filter.dateTo
            )
            break
          case selectoptions.CITY:
            result = await repetedDataActions.CityList(
              filter.dateFrom,
              filter.dateTo
            )
            break
          case selectoptions.DISTRICT:
            result = await repetedDataActions.DistrictList(
              filter.dateFrom,
              filter.dateTo
            )
            break
          default:
            break
        }
        console.log('result = ', result);
        if (result.success) {
          setlistData(result.data)
        } else {
          notifyError(result.errMsg)
        }
      }
      setloading(false)
    }
    selectArea()
  }, [selectedAreaOption, filter])

  return (
    <Outter>
      <SelectCountry
        onSelect={setSelectedAreaOption}
        value={selectedAreaOption}
        className="country-select-input"
      />
      <div className="div-list-chart">
        <div className="section-list-dougnutChart">
          <AppList
            dataSource={listData}
            loading={loading}
            renderItem={renderItem}
            header={header}
          />
        </div>
      </div>
    </Outter>
  )
}

export default AreaListSection
