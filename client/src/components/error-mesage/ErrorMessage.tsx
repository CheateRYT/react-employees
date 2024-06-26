import {Alert} from "antd";
import React from "react";

type Props = {
    message?: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
    if (!message) {
        return null;
    }
    return <Alert message={message} type="error" />;
}

export default ErrorMessage;