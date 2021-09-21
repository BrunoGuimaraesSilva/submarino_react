import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://react.professorburnes.com.br/produto"
      )
      .then((Response) => {
        //console.log(Response.data)
        setProdutos(Response.data);
      });
  }, []);

  return (
    <>
      <h1 className="text-center">Home</h1>
      <div className="row">
        {produtos.map((item, index) => (
          <div className="col-12 col-md-4 text-center">
            <div className="card">
              <img
                src={item.imagemp}
                className="w-100"
              ></img>
              <h5>
                {item.produto}
              </h5>
                <Link
                  to={"/produto/" + item.id}
                  className="btn btn-info"
                >
                  Detalhes
                </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
