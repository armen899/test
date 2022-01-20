import { fetchFromUrl } from "../utils/urlHelper";

const urlPayment = "/payment"

const paymentActions = {
    paymentObject: async (dateFrom, dateTo, dateFromP, dateToP) => {
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
        const result = await fetchFromUrl(urlPayment, params)
        return result
    },
}
export default paymentActions
