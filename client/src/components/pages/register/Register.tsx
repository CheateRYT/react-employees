import React from "react";
import Layout from "../../Layout";
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../CustomInput";
import PasswordInput from "../../PasswordInput";
import CustomButton from "../../CustomButton";
import {Link} from "react-router-dom";
import {Paths} from "../../../path";


const Register = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Зарегистрируйтесь" style={{ width: "30rem" }}>
                    <Form onFinish={() => null}>
                        <CustomInput type={"name"} name={"name"} placeholder={"Имя"} />
                        <CustomInput type={"email"} name={"email"} placeholder={"Email"} />
                        <PasswordInput name={"password"} placeholder={"Пароль"} />
                        <PasswordInput name={"confirmPassword"} placeholder={"Повторите пароль"} />
                        <CustomButton type={"primary"} htmlType={"submit"}>Зарегистрироваться</CustomButton>
                    </Form>
                    <Space direction={"vertical"} size={"large"}>
                        <Typography.Text>Есть аккаунт? <Link to={Paths.login}>Войдите</Link></Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export default Register;
