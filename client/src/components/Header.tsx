import React from "react";
import style from "./module.css/Layout.module.css";
import { Button, Layout, Space, Typography } from "antd";
import { TeamOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <Layout.Header className={style.header}>
      <Space>
        <TeamOutlined className={style.teamIcon} />
        <Button type="link">Click</Button>
      </Space>
    </Layout.Header>
  );
};

export default Header;
