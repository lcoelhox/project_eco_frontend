import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nome, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [celular, setCelular] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await axios.post('http://localhost:3000/register', {
            nome,
            email,
            password,
            celular
        });

        console.log("usuario cadastrado com sucesso!");
        navigate('/map');
    } catch (error) {
        console.log("error ao cadastrar usuario", error)
    }
    console.log({ nome, email, password, celular });
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          placeholder="Digite seu nome"
          onChange={(e) => {
            setName(e.target.value)
        }}
        />

        <input
          type="email"
          value={email}
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          value={celular}
          placeholder="Digite seu celular"
          onChange={(e) => setCelular(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
