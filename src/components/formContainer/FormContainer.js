import Form from "antd/lib/form/Form";
import React from "react";
import './FormContainer.less'

const FormContainer = (props) => {
    
    const { form, name, initialValues, onFinish, children } = props;

    return (
        <Form
            form={form}
            name={name}
            initialValues={initialValues}
            onFinish={onFinish}
            layout="vertical"
        >
            {children}
        </Form>
    );
};

export default FormContainer;