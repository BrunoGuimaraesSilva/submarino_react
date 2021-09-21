import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-ligth bg-primary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/home"
          >
            Home
          </a>
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/carrinho"
                  className="nav-link"
                >
                  Carrinho
                </Link>
              </li>
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
          {" "}
          Desenvolvido por Bruno Guimaraes da
          Silva
        </p>
      </footer>
    </>
  );
};
