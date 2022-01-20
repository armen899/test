import React from 'react'
import './InputFormText.less'
import { Form, Input } from 'antd';

const InputFormText = (props) => {
    
    const { name, label, required, placeholder } = props;

    return (
        <Form.Item
            name={name}
            label={label}
            hasFeedback={true}
            rules={[{ required: required, message: `Please input your ${name}!` }]}

        >
            <Input placeholder={placeholder} />
        </Form.Item>
    );
}

export default InputFormText;