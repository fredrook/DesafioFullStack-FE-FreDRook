import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { ContainerRA } from "./LoginCSS";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUser } from "../../interfaces/IUser";

const schema = yup.object({
  email: yup.string().required("Email obrigatório!"),
  password: yup.string().required("Senha obrigatório!"),
});

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(schema) });

  const { login, setNext } = useContext(UserContext);

  function Back() {
    setNext("");
  }

  return (
    <ContainerRA onSubmit={handleSubmit(login)}>
        <label htmlFor="email" className="labelEmail">
          Email
        </label>
        <input type="text" id="email" {...register("email")} />
        <span className="Error1">{errors.email?.message}</span>
      <label htmlFor="password" className="labelPassword">
          Senha
        </label>
        <input type="password" id="password" {...register("password")} />
        <span className="Error2">{errors.password?.message}</span>
      <div className="ContainerButtons">
        <button type="button" onClick={() => Back()} className="btn1">
          Anterior
        </button>
        <button type="submit" className="btn2">
          Próximo passo
        </button>
      </div>
    </ContainerRA>
  );
};

export default LoginModal;
