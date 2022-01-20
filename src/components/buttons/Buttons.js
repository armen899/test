import React from 'react'
import { Button } from 'antd';
import "./Buttons.less";

const ButtonPrimary = (props) => {
    const { label, onClick, type, htmlType } = props

    return (
        <Button
            type={type}
            htmlType={htmlType}
            onClick={onClick}
            className={`btn ${type ? `btn-${type}` : ""}`}
        >
            {label}
        </Button >
    );
}

export default ButtonPrimary;