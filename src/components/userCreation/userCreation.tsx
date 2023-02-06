import { ContainerUC } from "./userCreationCSS";
import { RiUser5Fill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { RiFileTextFill } from "react-icons/ri";
import RegistrationNewUserModal from "../registrationNewUser/RegistrationNewUser";
import LoginModal from "../Login/Login";
import CadastroContatosModal from "../registrationContacts/RegistrationContacts";
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";

const UserCreation = () => {
  const { next } = useContext(UserContext);

  return (
    <ContainerUC next={next}>
      <div className="divSubContainer">
        <div className="divCard">
          <h1>Criação de usuário</h1>
          <div className="divIcons">
          <div className="englobIcos">
              <RiUser5Fill className="icons icon1"/>
            </div>
            <p className="p1">Registro do Usuário</p>
            <div className="englobIcos">
              <AiTwotoneHome className="icons icon2" />
            </div>
            <p className="p2">Login</p>
            <div className="englobIcos">
              <RiFileTextFill className="icons icon3" />
            </div>
            <p className="p3">Crie seus contatos!</p>
          </div>
          {next === "" && <RegistrationNewUserModal />}

          {next === "loginModal" && <LoginModal />}

          {next === "contacts" && <CadastroContatosModal />}
        </div>
      </div>
    </ContainerUC>
  );
};

export default UserCreation;
