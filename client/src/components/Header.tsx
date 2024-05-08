import React from "react";
import style from "./module.css/Header.module.css";
import { Button, Layout, Space, Typography } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { Paths } from "../path";
const Header = () => {
  return (
    <Layout.Header className={style.header}>
      <Space>
        <TeamOutlined className={style.teamIcon} />
        <Link to={Paths.home}>
          {" "}
          <CustomButton type="ghost">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <CustomButton type="ghost">Зарегистрироваться</CustomButton>
        </Link>

        <Link to={Paths.login}>
          {" "}
          <CustomButton type="ghost">Войти</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};

export default Header;
