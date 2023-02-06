import { useNavigate } from "react-router-dom";
import { Home } from "./HomePageCSS";

function HomePage() {
  const navigate = useNavigate();

  const LogoCadastro = require("../../assets/cadastro.png");

  return (
    <Home>
      <img src={LogoCadastro} alt="Imagem Logotipo da Empresa LogoCadastro." />
      <h1>
        O cadastro de usuários é uma ferramenta muito
        importante para o sucesso de um negócio.
      </h1>
      <p>
        Com o cadastro efetivo de usuários, você pode ter acesso a informações
        valiosas sobre seus clientes, incluindo seus endereços, dados de
        contato, histórico de compras, preferências e outros dados relevantes
        para o seu negócio. Com essas informações, você pode criar campanhas de
        marketing direcionadas e personalizadas para cada um de seus clientes,
        aumentando assim as chances de conversão. Além disso, você pode usar
        essas informações para criar um relacionamento mais próximo com seus
        clientes, oferecer um atendimento mais personalizado e aprimorar sua
        experiência de compra. Outra vantagem do cadastro de usuários é a
        possibilidade de realizar análises de dados e entender melhor o
        comportamento de seus clientes. Com essas informações, você pode
        identificar pontos de melhoria em seu negócio e tomar decisões mais
        acertadas para aumentar suas vendas e a satisfação de seus clientes. Em
        resumo, o cadastro de usuários no banco de dados é uma ferramenta
        essencial para o sucesso de um negócio. Além de permitir o acesso a
        informações valiosas sobre seus clientes, ele ainda possibilita o
        aprimoramento do relacionamento com eles e a realização de análises de
        dados para aprimorar suas estratégias. Por isso, não hesite em investir
        em um cadastro efetivo de usuários para o seu negócio.
      </p>
      <span>
        Por isso, não hesite em investir em um cadastro efetivo de usuários para
        o seu negócio, não perca mais tempo, faça já seu cadastro!
      </span>
      <button
        onClick={() => {
          navigate("/register");
        }}
        className="btnInit"
      >
        CADASTRAR
      </button>
    </Home>
  );
}

export default HomePage;
