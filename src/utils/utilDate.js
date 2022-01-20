import moment from "moment";



export const myMoment = (date) => {
    let mm;
    if (date) {
        // mm = moment(date).utc();
        mm = moment.parseZone(date);
    } else {
        // mm = moment().utc();
        mm = moment();
    }
    return mm;
}

const UtilDate = {
    getDateToday: () => {
        return myMoment();
    },
    getDateYesterday: (today = myMoment()) => {
        return myMoment(today).subtract(1, 'days');
    },
    getDateTomorrow: (today = myMoment()) => {
        return myMoment(today).add(1, 'days');
    },
    getLastWeekStart: (today = myMoment()) => {
        return myMoment(today).subtract(1, 'weeks').startOf('week');
    },
    getLastWeekEnd: (today = myMoment()) => {
        return myMoment(today).subtract(1, 'weeks').endOf('week');
    },
    getThisWeekStart: (today = myMoment()) => {
        return myMoment(today).startOf('week');
    },
    getThisWeekEnd: (today = myMoment()) => {
        return myMoment(today).endOf('week');
    },
    getThisMonthStart: (today = myMoment()) => {
        return myMoment(today).startOf('month');
    },
    getThisMonthEnd: (today = myMoment()) => {
        return myMoment(today).endOf('month');
    },
    getLastMonthStart: (today = myMoment()) => {
        return myMoment(today).subtract(1, 'months').startOf('month');
    },
    getLastMonthEnd: (today = myMoment()) => {
        return myMoment(today).subtract(1, 'months').endOf('month')
    },
    getThisYearStart: (today = myMoment()) => {
        return myMoment(today).startOf('year');
    },
    getThisYearEnd: (today = myMoment()) => {
        return myMoment(today).endOf('year');
    },
    getLastYear: (today = myMoment()) => {
        return myMoment(today).subtract(12, 'months')
    },
    getStartLastYear: (today = myMoment()) => {
        return myMoment(today).subtract(12, 'months')
    },
    getEndLastYear: (today = myMoment()) => {
        return myMoment(today).subtract(12, 'months')
    },
    getLastSevenDays: (today = myMoment()) => {
        return myMoment(today).subtract(7, 'd');
    },
    getSubtractDays: (today = myMoment(), dayCount) => {
        return myMoment(today).subtract(dayCount, 'days');
    },


}

export default UtilDate;