import LoginPageComponent from "./components/LoginPageComponent";
import axios from "axios";
const loginUserApiRequest = async function (phoneNumber, password, doNotLogout) {
  const { data } = await axios.post("api/users/login", {
    phoneNumber,
    password,
    doNotLogout,
  });
  return data;
};
const loginFarmerApiRequest = async (phoneNumber, password, doNotLogout) => {
  const { data } = await axios.post("api/farmers/login", {
    phoneNumber,
    password,
    doNotLogout,
  });
  return data;
};
const LoginPage = () => {
  return (
    <LoginPageComponent
      loginUserApiRequest={loginUserApiRequest}
      loginFarmerApiRequest={loginFarmerApiRequest}
    />
  );
};

export default LoginPage;
