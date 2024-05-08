import { Form, Input } from "antd";
import React from "react";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
};

const CustomInput: React.FC<Props> = ({ name, placeholder, type = "text" }) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: "Обязательное поле" }]}
      shouldUpdate={true}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};

export default CustomInput;
