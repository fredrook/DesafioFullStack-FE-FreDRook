import { Route, Routes, Navigate } from "react-router-dom";
import UserCreation from "../components/userCreation/userCreation";
import Dashboard from "../pages/dashboard/Dashboard";
import HomePage from "../pages/homePage/HomePage";
import ProtectedRoutes from "./ProtectRoutes/ProtectedRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<UserCreation />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
