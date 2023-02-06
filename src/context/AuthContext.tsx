import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IContextProvider } from "../interfaces/IContextProvider";
import { IProviderProps } from "../interfaces/IProviderProps";
import { IUser } from "../interfaces/IUser";
import { toast } from "react-toastify";
import api from "../services/api";
import { IPost } from "../interfaces/IPost";
import { AxiosError } from "axios";
import { IError } from "../interfaces/IError";

export const UserContext = createContext<IProviderProps>({} as IProviderProps);

const AuthContext = ({ children }: IContextProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const [userList, setUserList] = useState([] as IUser[]);

  const [next, setNext] = useState("");

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const registerUser = async (data: IUser) => {
    await api
      .post<IPost>("/users", data)
      .then((response) => {
        console.log("CONSOLE LOG do Response do Registro", response);
        toast.success("Conta criada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setNext("loginModal");
      })
      .catch((error: AxiosError<IError>) => {
        toast.error("Houve algum erro!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(error);
      });
  };

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@context-desafioFullStack:token");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          const { data } = await api.get<IUser>("/users");

          setUser(data);
          setNext("loginModal");
        } catch (error) {
          console.log("LOG DO CATCH TRY TOKEN loadUser", error);
        }
      } else {
        navigate("/");
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const login = async (data: IUser) => {
    try {
      const res = await api.post<IPost>("/login/users", data);

      const { user: userResponse, token } = res.data;

      setUser(userResponse);

      localStorage.setItem("@context-desafioFullStack:token", token);

      setNext("contacts");

      toast.success("Login efetuado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Erro ao efetuar Login!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("CON-LOG CATCH ERROR login", error);
    }
  };

  const createContacts = async (data: any) => {
    const token = localStorage.getItem("@context-desafioFullStack:token");

    await api
      .post<any>("/contacts", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("CONSOLE LOG do Response do Registro", res);

        setUserList([...userList, res.data]);

        toast.success("Contato cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setLoading(false);
        navigate("/dashboard");
      })
      .catch((error: AxiosError<IError>) => {
        toast.error("Erro ao cadastrar novo Contato!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("CON-LOG CATCH ERROR createContacts", error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setLoading,
        next,
        setNext,
        userList,
        setUserList,
        login,
        createContacts,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
