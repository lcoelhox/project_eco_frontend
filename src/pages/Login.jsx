import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:3000/login', {
                email,
                password
            });

            navigate('/map')
        } catch (error) {
            console.log("error ->", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                    console.log("e.target.value", e.target.value)
                    setEmail(e.target.value);
                }}
            >
            </input>
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                    console.log("e.target.value", e.target.value)
                    setPassword(e.target.value);
                }}
            >
            </input>
            <button type="submit">Entrar</button>
            <p>Não possui cadastro? <a href="/register">Crie uma conta</a></p>
        </form>
    );
}

export default Login;