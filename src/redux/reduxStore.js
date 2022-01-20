export const TOGGLE = "TOGGLE"
export const SET_ACCESSTOKEN = "SET_ACCESSTOKEN";
export const SET_USER = "SET_USER"
export const SET_PASSWORD = "SET_PASSWORD"


const initailState = {
    token: "",
    collapsed: false,
    userInfo: {},
    userPassword: ""
}
export const rootReducer = (state = initailState, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                ...state,
                collapsed: action.payload
            }
        case "SET_PASSWORD":
            return {
                ...state,
                userPassword: action.payload
            }
        case "SET_ACCESSTOKEN":
            return {
                ...state,
                token: action.payload,
            };
        case "SET_USER":
            return {
                ...state,
                userInfo: action.payload,
            };
        default:
            return state;
    }
}