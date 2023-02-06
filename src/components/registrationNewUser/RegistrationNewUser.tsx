import {
  AnotherDivInputs,
  ContainerUI,
  DivInputs,
} from "./RegistrationNewUserCSS";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUser } from "../../interfaces/IUser";

const schema = yup.object({
  fullName: yup.string().required("Nome obrigatório!"),
  password: yup
    .string()
    .min(6, "Min 6 Caracteres, 1 núm, 1 letra e um caracter especial!")
    .matches(/(\W)|_/)
    .required(),
  email: yup.string().email().required("Necessário um Email válido!"),
  phoneNumber: yup
    .number()
    .min(10, "Favor inserir um telefone válido.")
    .required(),
});

const RegistrationNewUserModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(schema) });

  const { registerUser } = useContext(UserContext);

  return (
    <ContainerUI onSubmit={handleSubmit(registerUser)}>
      <label htmlFor="fullName" className="labelName">
        Nome
      </label>
      <input type="text" id="name" {...register("fullName")} />
      <span className="Error1">{errors.fullName?.message}</span>

      <DivInputs>
        <label htmlFor="password" className="labelPassword">
          Senha
        </label>
        <input type="password" id="password" {...register("password")} />
        <span className="Error2">{errors.password?.message}</span>
      </DivInputs>

      <AnotherDivInputs>
        <label htmlFor="email" className="labelEmail">
          Email
        </label>
        <input type="text" id="email" {...register("email")} />
        <span className="Error4">{errors.email?.message}</span>
        <label htmlFor="phoneNumber" className="labelPhoneNumber">
          Telefone
        </label>
        <input type="text" id="phoneNumber" {...register("phoneNumber")} />
        <span className="Error5">{errors.phoneNumber?.message}</span>
      </AnotherDivInputs>

      <button type="submit" className="btnNext">
        Próximo passo
      </button>
    </ContainerUI>
  );
};

export default RegistrationNewUserModal;
