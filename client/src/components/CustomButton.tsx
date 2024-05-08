import React from "react";
import { Button, Form } from "antd";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
  type?: "default" | "link" | "text" | "primary" | "dashed";
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round";
  icon?: React.ReactNode;
};
const CustomButton: React.FC<Props> = ({
  children,
  htmlType = "button",
  type,
  onClick,
  danger,
  loading,
  shape,
  icon,
}) => {
  return (
    <div>
      <Form.Item>
        <Button
          htmlType={htmlType}
          type={type}
          danger={danger}
          loading={loading}
          shape={shape}
          icon={icon}
          onClick={onClick}
        >
          {children}
        </Button>
      </Form.Item>
    </div>
  );
};

export default CustomButton;
