import React from "react";
import { Button, Form } from "antd";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
  type?: "link" | "default" | "text" | "primary" | "dashed" | "ghost";
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
