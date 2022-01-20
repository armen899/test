const LocalStorage = {
    CONST_FILTER_OPTIONS: "FilterOptions",

    setItem: (key, value) => {
        if (value) {
            if ((typeof value) === 'object') {
                return localStorage.setItem(key, JSON.stringify(value));
            } else {
                return localStorage.setItem(key, value);
            }
        }
    },
    getItem: (key) => {
        const obj = localStorage.getItem(key);
        if (obj) {
            try {
                return JSON.parse(obj);

            } catch (error) {
                return obj;
            }
        }
        return null;
    },
    removeItem: (key) => {
        return localStorage.removeItem(key);
    },
}

export default LocalStorage;