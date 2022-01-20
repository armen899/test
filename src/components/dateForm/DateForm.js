import React from 'react'
import { DatePicker } from 'antd';
import "./DateForm.less"

const { RangePicker } = DatePicker;

const DateForm = (props) => {

    const { value, onChange, disabled, name } = props

    return (
        <label
            htmlFor={name}
        >
            {name}
            <RangePicker
                value={value}
                onChange={onChange}
                className={`date-form ? ${props.className || ""}  `}
                disabled={disabled}
                format={"DD-MM-YYYY"}
            />
        </label>
    );
}

DateForm.defaultProps = {
    disabled: true
}

export default DateForm;