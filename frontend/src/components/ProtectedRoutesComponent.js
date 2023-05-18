import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "./user/UserChatcomponet";

const ProtectedRoutesComponent = ({ admin, farmer }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } 
  else if (farmer) {
    let farmerAuth = true;
    return farmerAuth ?<Outlet /> : <Navigate to="/login" />; 
  } 
  else {
    let userAuth = true;
    return userAuth ? <><UserChatComponent /><Outlet /></> : <Navigate to="/login" />;

  }
};

export default ProtectedRoutesComponent;
