import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";

const Login = () => {
  const { user, setUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        console.error("Erro ao logar:", error);
      }
    } else {
      alert("Preencha todos os dados para enviar");
    }
  };

  
  const handleDemoLogin = async () => {
    try {
      const { data: userDoc } = await axios.post("/users/login", {
        email: "recrutador@gmail.com", 
        password: "senhademo123", 
      });

      setUser(userDoc);
      setRedirect(true);
    } catch (error) {
      console.error("Erro no login de demonstração:", error);
    }
  };

  if (redirect || user) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça seu login</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white"
          >
            Login
          </button>
        </form>

        
        <div className="flex w-full items-center gap-2 text-xs text-gray-400">
          <div className="h-[1px] flex-1 bg-gray-200"></div>
          <span>OU</span>
          <div className="h-[1px] flex-1 bg-gray-200"></div>
        </div>

      
        <button
          type="button"
          onClick={handleDemoLogin}
          className="w-full cursor-pointer rounded-full bg-black px-4 py-2 font-bold text-white transition-opacity hover:opacity-90"
        >
          Entrar como Recrutador
        </button>

        <p>
          Ainda não tem conta?{" "}
          <Link to="/register" className="font-bold underline">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
