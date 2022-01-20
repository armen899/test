import React from 'react'
import { Form, Input } from 'antd';

const InputFormPassword = (props) => {

    const { required, name, label, placeholder } = props

    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{ required: required, message: 'Please input your password!' }]}
        >
            <Input.Password placeholder={placeholder} />
        </Form.Item>
    );
}

export default InputFormPassword;