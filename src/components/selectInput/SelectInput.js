import React from 'react';
import { Select } from "antd";
import "./SelectInput.less"


const SelectInput = (props) => {
    
    const { options, placeholder, onSelect, className, value, label } = props;

    return (
        <label htmlFor={label} >
            {label}
            <Select
                className={`select ${className || ""}  `}
                options={options}
                placeholder={placeholder}
                onSelect={onSelect}
                value={value}
            />
        </label>
    );
}

export default SelectInput;