import moment from 'moment'
import React, { useEffect, useState } from 'react'
import 'react-day-picker/lib/style.css'
import { withTranslation } from 'react-i18next'
import { rangeConst } from '../../actions/userActions'
import LocalStorage from '../../redux/LocalStorage'
import UtilDate from '../../utils/utilDate'

import CalendarIcon from '../icons/CalendarIcon'
import FiltersIcon from '../icons/FiltersIcon'
import FilterDrawer from './FilterDrawer'

import './Filters.less'


const Filters = (props) => {
  
  const { onChange } = props

  const [visibleFilter, setVisibleFilter] = useState(false);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    let oldFilter = LocalStorage.getItem(LocalStorage.CONST_FILTER_OPTIONS);
    if (!oldFilter) {
      oldFilter = {
        dateFrom: UtilDate.getDateToday(),
        dateTo: UtilDate.getDateToday(),
        selectedDateRangeOption: rangeConst.TODAY,
        dateFromP: UtilDate.getDateYesterday(),
        dateToP: UtilDate.getDateYesterday(),
      }
    }
    if (oldFilter) {
      let filter = {
        dateFrom: moment(oldFilter.dateFrom),
        dateTo: moment(oldFilter.dateTo),
        selectedDateRangeOption: oldFilter.selectedDateRangeOption,
        dateFromP: moment(oldFilter.dateFromP),
        dateToP: moment(oldFilter.dateToP),
      }
      setFilter(filter)
    }
  }, [])

  useEffect(() => {
    onChange(filter);
  }, [onChange, filter])

  const onClose = () => {
    setVisibleFilter(false);
  };

  return (
    <div className="filters">
      <div className="filters__appMode"
        onClick={() => {
          setVisibleFilter(true)
        }}
      >
        <div className="filters__appMode--calendar">
          <CalendarIcon />
          <div className="filters__appMode--calendar--date">
            <div className="filters__appMode--calendar--current">
              {filter && filter.dateFrom && filter.dateFrom.format('MMMM Do YYYY')}
            </div>
            <div className="previous">{filter && filter.dateTo && filter.dateTo.format('LL')}</div>
          </div>
        </div>
        <div className="filters__appMode--filters">
          <FiltersIcon />
        </div>
      </div>
      <FilterDrawer
        {...props}
        onChange={(filter) => {
          setFilter(filter)
        }}
        visible={visibleFilter}
        onClose={onClose}
        filter={filter}
      />
    </div>
  )
}

export default withTranslation()(Filters)
