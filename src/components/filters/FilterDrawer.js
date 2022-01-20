import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd'
import SelectDate from '../selects/SelectDate'
import DatePickerForm from '../dateForm/DateForm'
import UtilDate from '../../utils/utilDate';
import { rangeConst } from '../../actions/userActions';
import LocalStorage from '../../redux/LocalStorage';

const FilterDrawer = (props) => {
    const { t, onChange, visible, onClose, filter } = props;

    const [dateFrom, setdateFrom] = useState()
    const [dateTo, setdateTo] = useState()
    const [dateFromP, setdateFromP] = useState()
    const [dateToP, setdateToP] = useState()
    const [selectedDateRangeOption, setSelectedDateRangeOption] = useState()

    useEffect(() => {
        if (filter) {
            setSelectedDateRangeOption(filter.selectedDateRangeOption)
            setdateFrom(filter.dateFrom)
            setdateTo(filter.dateTo)
        }
    }, [filter])

    useEffect(() => {
        switch (selectedDateRangeOption) {
            case rangeConst.TODAY:
                setdateFrom(UtilDate.getDateToday())
                setdateTo(UtilDate.getDateToday())

                setdateFromP(UtilDate.getSubtractDays(UtilDate.getDateToday(), 1))
                setdateToP(UtilDate.getSubtractDays(UtilDate.getDateToday(), 1))

                break
            case rangeConst.YESTERDAY:
                setdateFrom(UtilDate.getDateYesterday())
                setdateTo(UtilDate.getDateYesterday())

                setdateFromP(UtilDate.getSubtractDays(UtilDate.getDateYesterday(), 1))
                setdateToP(UtilDate.getSubtractDays(UtilDate.getDateYesterday(), 1))

                break
            case rangeConst.LAST_SEVEN_DAYS:
                setdateFrom(UtilDate.getLastSevenDays())
                setdateTo(UtilDate.getDateYesterday())

                setdateFromP(UtilDate.getSubtractDays(UtilDate.getLastSevenDays(), 7))
                setdateToP(UtilDate.getSubtractDays(UtilDate.getDateYesterday(), 7))

                break
            case rangeConst.THIS_MONTH:
                setdateFrom(UtilDate.getThisMonthStart())
                setdateTo(UtilDate.getThisMonthEnd())

                setdateFromP(UtilDate.getLastMonthStart())
                setdateToP(UtilDate.getLastMonthEnd())
                break
            case rangeConst.LAST_MONTH:
                setdateFrom(UtilDate.getLastMonthStart())
                setdateTo(UtilDate.getLastMonthEnd())

                setdateFromP(UtilDate.getLastMonthStart(UtilDate.getLastMonthStart()))
                setdateToP(UtilDate.getLastMonthEnd(UtilDate.getLastMonthEnd()))

                break
            default:
                break
        }
    }, [selectedDateRangeOption])

    const handleOk = () => {
        let filter = {
            dateFrom: dateFrom,
            dateTo: dateTo,
            selectedDateRangeOption: selectedDateRangeOption,
            dateFromP: dateFromP,
            dateToP: dateToP,
        }
        LocalStorage.setItem(LocalStorage.CONST_FILTER_OPTIONS, filter)
        onChange && onChange(filter)
        onClose(false);
    }

    return (
        <Drawer
            placement={"bottom"}
            closable={false}
            visible={visible}
            onClose={onClose}
            // title={}
            getContainer={false}
            key={"Filter-Drawer"}
        >
            <SelectDate
                onSelect={setSelectedDateRangeOption}
                value={selectedDateRangeOption}
                className="Select-input"
            />
            <DatePickerForm
                onChange={(dates) => {
                    setdateFrom(dates[0])
                    setdateTo(dates[1])
                }}
                value={[dateFrom, dateTo]}
                disabled={selectedDateRangeOption !== rangeConst.CUSTOM}
            />

            <div className="ant-btn ant-btn-primary" onClick={handleOk}>{t("Apply")}</div>
        </Drawer>
    );
};

export default FilterDrawer;