import { ApiStorageAction } from '../redux/apiStorageAction';
import { fetchFromUrlLogin } from '../utils/urlHelper';

const urlAdminLogin = "/login";
const url_log_out = "/logout"

export const rangeConst = {
    YESTERDAY: "Yesterday",
    TODAY: "Today",
    LAST_SEVEN_DAYS: "Last Seven Days",
    THIS_MONTH: "This Month",
    LAST_MONTH: "Last Month",
    CUSTOM: "Custom",
}

export const selectoptions = {
    COUNTRY: "Country",
    REGION: "Region",
    CITY: "City",
    DISTRICT: "District"
}

const userActions = {
    login: async (login, password) => {
        const params = [
            { key: "LoginForm[username]", value: login },
            { key: "LoginForm[password]", value: password },
        ];
        const result = await fetchFromUrlLogin(urlAdminLogin, params);
        if (result.success) {
            await ApiStorageAction.setUser(result.data);
        }
        return result
    },
    logout: async () => {
        const urlParams = []
        const result = await fetchFromUrlLogin(url_log_out, urlParams);
        await ApiStorageAction.setUser(null);
        return result
    },
    getSelectOptions: [
        { value: selectoptions.COUNTRY, label: "Country" },
        { value: selectoptions.REGION, label: "Region" },
        { value: selectoptions.CITY, label: "City" },
        { value: selectoptions.DISTRICT, label: "District" },

    ],
    getRangeOptions: [
        { value: rangeConst.TODAY, label: "TODAY" },
        { value: rangeConst.YESTERDAY, label: "YESTERDAY" },
        { value: rangeConst.LAST_SEVEN_DAYS, label: "LAST_SEVEN_DAYS" },
        { value: rangeConst.THIS_MONTH, label: "THIS_MONTH" },
        { value: rangeConst.LAST_MONTH, label: "LAST_MONTH" },
        { value: rangeConst.CUSTOM, label: "CUSTOM" }
    ]
}
export default userActions