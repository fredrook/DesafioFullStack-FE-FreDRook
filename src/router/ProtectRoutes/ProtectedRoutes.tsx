import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { UserContext } from "../../context/AuthContext";
import { DivProtected } from "./ProtectedRoutesCSS";
import { toast } from "react-toastify";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  const AccessDenied = require("../../assets/AccessDenied.png");

  const location = useLocation();

  if (loading) {
    toast.error("Houve algum erro!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return (
      <DivProtected>
        <img
          src={AccessDenied}
          alt="Imagem acesso negado, com referência ao filme Senhor dos Aneis."
          className="accessDenied"
        />
        <h1>
          Olá, você precisa ter um usúario criado para ter acesso a está página!
        </h1>
      </DivProtected>
    );
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
