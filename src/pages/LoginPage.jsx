import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Cookies from 'js-cookie';
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const [serverResponse, setServerResponse] = useState("");  // Nuevo estado para la respuesta del servidor


  const logInSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5153/api/User/login/",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const token = response.data.token;

        // Guarda el token en una cookie con una duración (en segundos)
        const expirationDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
Cookies.set('token', token, { expires: expirationDate });

        // Actualiza el estado con el mensaje de la respuesta del servidor
        setServerResponse(`Token establecido correctamente: ${token}`);

        navigate("/DashboardPage");
      } else {
        // Manejar otros casos si es necesario
        setServerResponse(`Error en la respuesta del servidor: ${response.status}`);
      }
    } catch (error) {
      setError(error.message);
      setServerResponse(`Error en la solicitud: ${error.message}`);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full md:w-full lg:w-auto">
        <a href="/HomePage">
          <img
            id="logo"
            src="/src/images/logoCLA.png"
            alt="Community Lab Alliance Logo"
          />
        </a>
        <h1 className="text-2xl font-bold -mb-1">Log In</h1>
        <h2 className="text-lg font-bold mb-4">
          to access Community Lab Alliance
        </h2>
        <form onSubmit={logInSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4CB5AB] text-white mb-3 py-2 rounded-lg hover:bg-[#389389] "
            onClick={logInSubmit}
          >
            Log In
          </button>
          <div className="mb-1">
            <div className="  flex justify-center">
              <label>
                Don't have an account?{" "}
                <Link
                  to="/SignUpPage"
                  className="hover:underline text-base text-[#4CB5AB] hover:text-[#389389]"
                >
                  Sign Up
                </Link>
              </label>
            </div>
          </div>
          <div className="mb-0">
            <div className="flex justify-center">
              <Link
                to="/ForgotPassword"
                className="text-[#4CB5AB] hover:text-[#389389] hover:underline text-base"
              >
                Forgot Password
              </Link>
            </div>
          </div>

          {/* Nuevo elemento para mostrar la respuesta del servidor */}
          <div className="mb-3">
            <p>{serverResponse}</p>
          </div>

        </form>

        {error && (
          <p className="text-red-500 text-sm mt-2 flex justify-center">{error}</p>
        )}

      </div>
    </div>
  );
};

export default LoginPage;
