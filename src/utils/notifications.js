import { notification } from "antd";

export const notifySuccess = (message) => {
    notification.success({
        message: message,
    });
};

export const notifyError = (message) => {
    notification.error({
        message: message,
    });
    return;
};
export const notifyWarrning = (message) => {
    notification.warning({
        message: message,
    });
    return;
};
