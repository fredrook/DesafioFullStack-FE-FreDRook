import AuthContext from "./context/AuthContext";
import GlobalStyle from "./styles/Global Styles CSS";
import RoutesMain from "./router/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthContext>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer />
    </AuthContext>
  );
}

export default App;
