import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { useEffect, useState } from "react";
import axios from "axios";

export const Header = () => {

    const [Categoria, setCategoria] = useState([]);

    useEffect(() => {
      axios
        .get(
          "https://react.professorburnes.com.br/categoria"
        )
        .then((Response) => {
          //console.log(Response.data)
          setCategoria(Response.data);
        });
    }, []);


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-ligth bg-primary">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo}></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="menu"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  to="/carrinho"
                  className="nav-link text-dark"
                >
                  Carrinho
                </Link>
              </li>
              {Categoria.map((item, index) => (

              
                <li className="nav-item">
                  <Link
                    to={"/categoria/" + item.id}
                    className="nav-link text-dark"
                  >
                    {item.categoria}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-primary">
        <p>
          Desenvolvido por Bruno Guimaraes da
          Silva
        </p>
      </footer>
    </>
  );
};
