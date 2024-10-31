import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [celular, setCelular] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/register", {
        nome,
        email,
        password,
        celular,
      });

      console.log("Usuário cadastrado com sucesso!");
      navigate("/map");
    } catch (error) {
      console.log("Erro ao cadastrar usuário", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-">
          <h1 className="text-center mb-4">Cadastro</h1>

          <form
            onSubmit={handleSubmit}
            className="border p-3 shadow-lg bg-white rounded"
          >
            <Col sm={12}>
              <Row>
                <label htmlFor="nome" className="form-label text-start">
                  Nome
                </label>
                <Col sm={12}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      value={nome}
                      placeholder="Digite seu nome"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </Col>

                <label htmlFor="email" className="form-label text-start">
                  Email
                </label>
                <Col sm={12}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      placeholder="Digite seu email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
              <label htmlFor="password" className="form-label text-start">
                Senha
              </label>
                <Col sm={12}>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      placeholder="Digite sua senha"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </Col>

                <label htmlFor="celular" className="form-label text-start">
                  Celular
                </label>
                <Col sm={12}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="celular"
                      value={celular}
                      placeholder="Digite seu celular"
                      onChange={(e) => setCelular(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
            </Col>

            <button type="submit" className="btn btn-primary w-100">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
