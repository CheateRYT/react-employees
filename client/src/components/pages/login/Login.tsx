import React, {useState} from "react";
import Layout from "../../Layout";
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../CustomInput";
import PasswordInput from "../../PasswordInput";
import CustomButton from "../../CustomButton";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../../path";
import {useLoginMutation, UserData} from "../../../app/services/auth";
import {isErrorWithMessage} from "../../../utils/is-error-with-message";
import ErrorMessage from "../../error-mesage/ErrorMessage";


const Login = () => {
    const [errorState, setErrorState] = useState('')
    const navigate = useNavigate()
    const [loginUser, loginUserResult] = useLoginMutation()
    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap();
            navigate("/")
        } catch (error) {
            const maybeError = isErrorWithMessage(error);
            if (maybeError) {
                setErrorState(error.data.message.toString())
            } else {
                setErrorState('Неизвестная ошибка')
            }
        }
    }
    //test
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: "30rem" }}>
          <Form onFinish={login}>
              <CustomInput type={"email"} name={"email"} placeholder={"Email"} />
              <PasswordInput name={"password"} placeholder={"Пароль"} />
              <CustomButton type={"primary"} htmlType={"submit"}>Войти</CustomButton>
          </Form>
            <Space direction={"vertical"} size={"large"}>
                <Typography.Text>Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link></Typography.Text>
           <ErrorMessage message = {errorState}/>
            </Space>
             </Card>
      </Row>
    </Layout>
  );
};

export default Login;
