import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import {
  Carrinho,
  Categoria,
  Erro,
  Finalizar,
  Home,
  Produto,
} from "./pages";

import { Header, Footer } from "./components";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="container">
        <Switch>
          <Route
            path={["/", "/home"]}
            exact
            component={Home}
          >
            <Home></Home>
          </Route>
          <Route
            path={[
              "/categoria",
              "/categoria/:id",
            ]}
            exact
            component={Categoria}
          >
            <Categoria></Categoria>
          </Route>
          <Route
            path={["/produto", "/produto/:id"]}
            exact
            component={Produto}
          >
            <Produto></Produto>
          </Route>
          <Route
            path={["/", "/carrinho"]}
            exact
            component={Carrinho}
          >
            <Carrinho></Carrinho>
          </Route>
          <Route
            path={["/", "/finalizar"]}
            exact
            component={Finalizar}
          >
            <Finalizar></Finalizar>
          </Route>
          <Route
            path={["/", "/Erro"]}
            exact
            component={Erro}
          >
            <Erro></Erro>
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
};
