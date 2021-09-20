import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import {
  Carrinho,
  Categoria,
  erro,
  Finalizar,
  Home,
  Produto,
} from "./pages";

import { Header, Footer } from "./components";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header>

      </Header>
      <Footer>
          
      </Footer>
    </BrowserRouter>
  );
};
