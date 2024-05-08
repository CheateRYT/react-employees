import React from "react";
import { Layout as AntLayout } from "antd";
import style from "./module.css/Layout.module.css";
import Header from "./Header";
type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={style.main}>
      <Header />
      <AntLayout.Content style={{ height: "100%", color: "white" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};

export default Layout;
