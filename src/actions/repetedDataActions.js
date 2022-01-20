import { fetchFromUrl } from "../utils/urlHelper";
const urlOrderMonthPayment = "/sale_return_payment_by_month_list";
const urlOrderSale = "/sale"
const urlOrderReturn = "/return"
const urlOrderPaymentList = "/payment_by_payment_type_list"
const urlOrderCountryList = "/sale_return_payment_by_country_list"
const urlOrderRegionList = "/sale_return_payment_by_region_list"
const urlOrderCityList = "/sale_return_payment_by_city_list"
const urlOrderDistrictList = "/sale_return_payment_by_district_list";

const repetedDataActions = {
    saleReturnPaymentByMonthList: async (dateFrom, dateTo, dateFromP, dateToP) => {
        const params = [
            { key: "dateFrom", value: dateFrom },
            { key: "dateTo", value: dateTo },
        ];
        if (dateFromP && dateToP) {
            params.push(
                { key: "p_dateFrom", value: dateFromP },
                { key: "p_dateTo", value: dateToP }
            )
        }
        const result = await fetchFromUrl(urlOrderMonthPayment, params);
        return result
    },
    sale: async (dateFrom, dateTo, dateFromP, dateToP) => {
        const params = [
            { key: "dateFrom", value: dateFrom },
            { key: "dateTo", value: dateTo },

        ];
        if (dateFromP && dateToP) {
            params.push(
                { key: "p_dateFrom", value: dateFromP },
                { key: "p_dateTo", value: dateToP }
            )
        }
        const result = await fetchFromUrl(urlOrderSale, params)
        return result
    },
    return: async (dateFrom, dateTo, dateFromP, dateToP) => {
        const params = [
            { key: "dateFrom", value: dateFrom },
            { key: "dateTo", value: dateTo },

        ];
        if (dateFromP && dateToP) {
            params.push(
                { key: "p_dateFrom", value: dateFromP },
                { key: "p_dateTo", value: dateToP }
            )
        }
        const result = await fetchFromUrl(urlOrderReturn, params)
        return result
    },
    paymentList: async (dateFrom, dateTo, dateFromP, dateToP) => {
        const params = [
            { key: "dateFrom", value: dateFrom },
            { key: "dateTo", value: dateTo },

        ];
        if (dateFromP && dateToP) {
            params.push(
                { key: "p_dateFrom", value: dateFromP },
                { key: "p_dateTo", value: dateToP }
            )
        }
        const result = await fetchFromUrl(urlOrderPaymentList, params)
        if (result.success) {
            result.p = result.data.p;
            delete result.data.p;
            let list = [];
            for (const [, value] of Object.entries(result.data)) {
                value.p = result.p.find((obj) => {
                    return obj.idPaymentType === value.idPaymentType;
                })
                if (!value.p) {
                    value.p = {};
                }
                list.push(value);
            }
            result.data = list;
        }
        return result
    },
    CountryList: async (dateFrom, dateTo, dateFromP, dateToP) => {
        const params = [
            { key: "dateFrom", value: dateFrom },
            { key: "dateTo", value: dateTo },
        ];
        if (dateFromP && dateToP) {
            params.push(
                { key: "p_dateFrom", value: dateFromP },
                { key: "p_dateTo", value: dateToP }
            )
        }
        const result = await fetchFromUrl(urlOrderCountryList, params)
        return result
    },
    RegionList: async (dateFrom, dateTo, dateFromP, dateToP) => {
        const params = [
            { key: "dateFrom", value: dateFrom },
            { key: "dateTo", value: dateTo },

        ];
        if (dateFromP && dateToP) {
            params.push(
                { key: "p_dateFrom", value: dateFromP },
                { key: "p_dateTo", value: dateToP }
            )
        }
        const result = await fetchFromUrl(urlOrderRegionList, params)
        return result
    },
    CityList: async (dateFrom, dateTo, dateFromP, dateToP) => {
        const params = [
            { key: "dateFrom", value: dateFrom },
            { key: "dateTo", value: dateTo },

        ];
        if (dateFromP && dateToP) {
            params.push(
                { key: "p_dateFrom", value: dateFromP },
                { key: "p_dateTo", value: dateToP }
            )
        }
        const result = await fetchFromUrl(urlOrderCityList, params)
        return result
    },
    DistrictList: async (dateFrom, dateTo, dateFromP, dateToP) => {
        const params = [
            { key: "dateFrom", value: dateFrom },
            { key: "dateTo", value: dateTo },

        ];
        if (dateFromP && dateToP) {
            params.push(
                { key: "p_dateFrom", value: dateFromP },
                { key: "p_dateTo", value: dateToP }
            )
        }
        const result = await fetchFromUrl(urlOrderDistrictList, params)
        return result
    },
}
export default repetedDataActions