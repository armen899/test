import axios from "axios";
import { ApiStorageAction } from "../redux/apiStorageAction";
import history from "../router/history";

const getBaseUrl = () => {
    return (
        process.env.REACT_APP_BASE_URL + "/mobile/analytics"
    )
}
const getBaseUrlLogin = () => {
    return (
        process.env.REACT_APP_BASE_URL + "/general/default"
    )
}

const Configs = {
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    timeout: 7000,
}

const adapter = axios.create({
    baseURL: getBaseUrl(),
    ...Configs

});

const adapterSecond = axios.create({
    baseURL: getBaseUrlLogin(),
    ...Configs

});

export async function fetchFromUrl(url, parameters = []) {
    try {
        let accessToken = await ApiStorageAction.getAccessToken();
        const data = new FormData();
        parameters.forEach((par) => {
            data.append(par.key, par.value)
        });
        data.append("loginType", "analytics")
        data.append("ACCESS_TOKEN", accessToken)
        let result = await adapter.post(url, data);
        if (result.data.hasOwnProperty('Result')) {
            history.push('login');
        }
        return { success: result.data.status, data: result.data.data, errMsg: result.data.message }
    } catch (error) {
        return { success: false, errMsg: error.message };
    }
}

export async function fetchFromUrlLogin(url, parameters = []) {
    try {
        let accessToken = await ApiStorageAction.getAccessToken();
        const data = new FormData();
        parameters.forEach((par) => {
            data.append(par.key, par.value)
        });
        data.append("loginType", "analytics")
        data.append("ACCESS_TOKEN", accessToken)
        let result = await adapterSecond.post(url, data);

        // return { ...result, success: result.data.status, data: result.data }
        return { ...result, success: result.data.status, data: result.data, errMsg: result.data.message }
        // return { ...result, success: result.data.status, data: result.data }
        // return { success: result.data.status, data: result.data.data }
        // return { success: result.data.status, data: result.data.data }
    } catch (error) {
        return { success: false, errMsg: error.message };
    }
}