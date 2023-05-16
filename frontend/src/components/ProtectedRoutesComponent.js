import { Outlet, Navigate } from "react-router-dom"
import UserChatComponent from "./user/UserChatcomponet";
const ProtectedRoutesComponent = ({ admin }) => {
    if (admin) {
        let adminAuth = true;
        return adminAuth ? <Outlet /> : <Navigate to="/login" />;
    }
    else {
        let userAuth = false;
        return userAuth ? <><UserChatComponent /><Outlet /></> : <Navigate to="/login" />;
    }

};
export default ProtectedRoutesComponent;