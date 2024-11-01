import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import imgPrefeitura from "../../public/img_prefeitura.png";
import imgMulti from "../../public/img_multivix_br.png";

const LINK_BANCKEND = "https://project-eco-backend.onrender.com";
// const LINK_BANCKEND = "http://localhost:3000"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  console.log("ABRIUUUUUUU");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${LINK_BANCKEND}/login`, {
        email,
        password,
      });

      navigate("/map");
    } catch (error) {
      console.log("error ->", error);
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      {/* Contêiner para as imagens */}
      <div
        className="d-flex justify-content-between w-100 mb-4"
        style={{ padding: "0 20px" }}
      >
        <img
          src="/img_prefeitura.png"
          alt="Apoio Prefeitura de Vila Velha"
          style={{
            width: "40%",
            maxWidth: "200px",
            height: "auto",
          }}
        />
        <img
          src="/img_multivix_br.png"
          alt="Apoio Multivix"
          style={{
            width: "40%",
            maxWidth: "200px",
            height: "auto",
          }}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>
        <p className="text-center mt-3">
          Não possui cadastro? <Link to="/register">Crie uma conta</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
