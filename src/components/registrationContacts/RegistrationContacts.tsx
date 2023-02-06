import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { AnotherDivInputs, ContainerAY } from "./RegistrationContactsCSS";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContacts } from "../../interfaces/IContacts";

const schema = yup.object({
  fullName: yup.string().required("Nome obrigatório!"),
  email: yup.string().email().required("Necessário um Email válido!"),
  phoneNumber: yup
    .number()
    .min(10, "Favor inserir um telefone válido.")
    .required(),
});

const CadastroContatosModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContacts>({ resolver: yupResolver(schema) });

  const { setNext, createContacts } = useContext(UserContext);

  function returnLastPage() {
    setNext("register");
  }

  return (
    <ContainerAY onSubmit={handleSubmit((data) => createContacts(data))}>
      <label htmlFor="fullName" className="labelName">
        Nome
      </label>
      <input type="text" id="name" {...register("fullName")} />
      <span className="Error1">{errors.fullName?.message}</span>

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
      <div className="ContainerButtons">
        <button onClick={() => returnLastPage()} type="button" className="btn1">
          Anterior
        </button>
        <button type="submit" className="btn2">
          Finalizar
        </button>
      </div>
    </ContainerAY>
  );
};

export default CadastroContatosModal;
