import { TagDiv, TagLi } from "./CardUsersCSS";
import { useNavigate } from "react-router";
import { IUser } from "../../interfaces/IUser";

interface IPropsUserValue {
  userValue: IUser;
}


const CardUsers = ({ userValue }: IPropsUserValue) => {
  const navigate = useNavigate();
  
  function beginning() {
    navigate("/")
  }
  return (
    <TagLi>
      <TagDiv>
        <h2>Usuário criado!</h2>
        <p className="p1">Nome</p>
        <span className="span1">{userValue.fullName}</span>
        <p className="p2">Email</p>
        <span className="span2">{userValue.email}</span>
        <div className="separacao"></div>
        <p className="p3">Número Telefone</p>
        <span className="span3">{userValue.phoneNumber}</span>
       {/*  <p className="p4">UserID</p>
        <span className="span4">{userValue.contacts}</span> */}
        <p className="p4">ID</p>
        <span className="span4">{userValue.id}</span>
        <button onClick={() => beginning()}>Novo usúario</button>
      </TagDiv>
    </TagLi>
  );
};

export default CardUsers;
