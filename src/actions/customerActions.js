import { fetchFromUrl } from "../utils/urlHelper";
const customerCount = "/customer_count";
const routCount = "/rout_count";
const customerCountCountry = "/customer_count_by_country_list"
const customerCountRegion = "/customer_count_by_region_list"
const customerCountCity = "/customer_count_by_city_list"
const customerCountDistrict = "/customer_count_by_district_list"
const customerRoutCountList = "/rout_customer_count_list"
const customerCountByMonthList = "/customer_count_by_month_list"

const customerActions = {
    routCustomerCount: async (dateFrom, dateTo, dateFromP, dateToP) => {
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
        const result = await fetchFromUrl(routCount, params)
        return result
    },
    countCustomer: async (dateFrom, dateTo, dateFromP, dateToP) => {
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
        const result = await fetchFromUrl(customerCount, params)
        return result
    },
    customerCountCountryList: async (dateFrom, dateTo, dateFromP, dateToP) => {
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
        const result = await fetchFromUrl(customerCountCountry, params)
        return result
    },
    customerCountRegionList: async (dateFrom, dateTo, dateFromP, dateToP) => {
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
        const result = await fetchFromUrl(customerCountRegion, params)
        return result
    },
    customerCountDistrictList: async (dateFrom, dateTo, dateFromP, dateToP) => {
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
        const result = await fetchFromUrl(customerCountDistrict, params)
        return result
    },
    customerCountCityList: async (dateFrom, dateTo, dateFromP, dateToP) => {
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
        const result = await fetchFromUrl(customerCountCity, params)
        return result
    },
    customerRoutCountList: async (dateFrom, dateTo, dateFromP, dateToP) => {
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
        const result = await fetchFromUrl(customerRoutCountList, params)
        return result
    },
    customerCountByMonthList: async () => {
        const params = []
        const result = await fetchFromUrl(customerCountByMonthList, params)
        return result
    },

}
export default customerActions