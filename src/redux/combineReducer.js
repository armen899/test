import { rootReducer } from "./reduxStore"
import { combineReducers } from "redux";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const combiner = combineReducers({
    rootReducer
});

export const persistConfig = {
    key: "root",
    storage,
};
export const persistedReducer = persistReducer(persistConfig, combiner);

export const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);