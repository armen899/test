import { store } from "./combineReducer";
import LocalStorage from "./LocalStorage";
import { SET_ACCESSTOKEN, SET_PASSWORD, SET_USER } from "./reduxStore";

export const ApiStorageAction = {
    setUser: async (user) => {
        if (user) {
            if (user.hasOwnProperty("password")) {
                await ApiStorageAction.setPassword(user.password)
            }
            if (user.hasOwnProperty("accessToken")) {
                await ApiStorageAction.setAccessToken(user.accessToken);
            }
        }
        LocalStorage.removeItem(LocalStorage.CONST_FILTER_OPTIONS);
        await store.dispatch({ type: SET_USER, payload: user });
    },
    setAccessToken: async (accessToken) => {
        await store.dispatch({
            type: SET_ACCESSTOKEN,
            payload: accessToken,
        });
    },
    setPassword: async (password) => {
        await store.dispatch({
            type: SET_PASSWORD,
            payload: password,
        });
    },
    getPassword: () => {
        let password = store.getState().rootReducer.userPassword;
        return password
    },
    getAccessToken: () => {
        const accessToken = store.getState().rootReducer.token;
        return accessToken;
    },
    clearUser: async () => {
        await store.dispatch({
            type: SET_ACCESSTOKEN,
            payload: "",
        });
        await store.dispatch({ type: SET_USER, payload: null });
    }
}
