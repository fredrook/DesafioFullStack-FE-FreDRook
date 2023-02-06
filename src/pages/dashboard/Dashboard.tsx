import { useContext } from "react";
import CardUsers from "../../components/cardUsers/CardUsers";
import { UserContext } from "../../context/AuthContext";
import { ContainerDashb } from "./DashboardCSS";

const Dashboard = () => {
  const { userList } = useContext(UserContext);

  return (
    <ContainerDashb>
      <div className="divSubContainer">
        <ul>
          {userList.map((elem, index) => (
            <CardUsers key={index} userValue={elem} />
          ))}
        </ul>
      </div>
    </ContainerDashb>
  );
};

export default Dashboard;
