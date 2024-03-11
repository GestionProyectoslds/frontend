import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [checked, handleChange] = useState(false);
  const [userType, setUserType] = useState(""); // Almacena el tipo de usuario seleccionado
  const [userTypeError, setUserTypeError] = useState(""); // Mnsaje de error de selección de usuario
  const signUpSubmit = async (event) => {
    event.preventDefault();
    try {
      if (step === 1) {
        if (!userType) {
          setUserTypeError("Please select a user type."); // Mensaje de error si no se ha seleccionado ninguna opción
          return;
        }
        if (!isValidEmail(email)) {
          setEmailError("Invalid email address");
          return;
        }
        setStep(step + 1);
        return;
      }
      // Agregar valores de primer formulario a un objeto
      // Navegar a nuevo form
      // if step === 2
      // Agregar valores de segundo formulario al objeto
      // Enviar post request con el objeto
      if (step === 2) {
        const response = await axios.post(
          "http://localhost:5153/api/User/register",
          {
            name,
            surname,
            email,
            phoneNumber,
            password,
            addressLine1,
            addressLine2,
            zipCode,
            city,
            state,
            country,
            userType,
          }
        );
        if (response.status === 200) {
          console.log(response.data);
          navigate("/LoginPage");
        }
      }
    } catch (error) {
      setError("Something's not working");
    }
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  useEffect(() => {
    const imagen = document.getElementById("logo");
    if (imagen) {
      imagen.style.width = "65%";
      imagen.style.height = "auto";
      imagen.style.marginLeft = "auto";
      imagen.style.marginRight = "auto";
      imagen.style.marginBottom = "20px";
    }
  }, []);
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setUserTypeError(""); // Restablecer el mensaje de error cuando se selecciona una opción
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <a href="/HomePage">
          <img
            id="logo"
            src="/src/images/logoCLA.png"
            alt="Community Lab Alliance Logo"
          />
        </a>
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

        {step === 1 && (
          <form onSubmit={signUpSubmit}>
            <div className="mb-4">
              <label
                htmlFor="userType"
                className="block text-[#2c3441] text-sm font-bold mb-1"
              >
                Select User Type <span className="text-red-500">*</span>
              </label>
              <div id="userType" className="flex items-center mb-2">
                <input
                  type="radio"
                  id="client"
                  name={userType}
                  value="client"
                  onChange={handleUserTypeChange}
                  checked={userType === "client"}
                  className="mr-2"
                />
                <label htmlFor="client" className="mr-4">
                  I'm a customer
                </label>
                <input
                  type="radio"
                  id="expert"
                  name={userType}
                  value="expert"
                  onChange={handleUserTypeChange}
                  checked={userType === "expert"}
                  className="mr-2"
                />
                <label htmlFor="expert" className="mr-4">
                  I'm an expert
                </label>
              </div>
              {userTypeError && (
                <p className="text-red-500 text-sm font-extrabold -mt-2 mb-2">
                  {userTypeError}
                </p>
              )}{" "}
              {/* Éste es el mensaje de error en caso de que no se seleccione alguna de las opciones */}
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="surName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Sur Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="surName"
                value={surname}
                onChange={(event) => setSurName(event.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className={`w-full border ${
                  emailError ? "border-red-500" : "border-gray-300"
                } p-2 rounded-lg`}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#4CB5AB] text-white py-2 rounded-lg hover:bg-[#389389]"
            >
              Next
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-1 align-middle"
              />
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={signUpSubmit}>
            <div className="mb-4">
              <label
                htmlFor="addressLine1"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Address Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="addressLine1"
                value={addressLine1}
                onChange={(event) => setAddressLine1(event.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="addressLine2"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Address Line 2 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="addressLine2"
                value={addressLine2}
                onChange={(event) => setAddressLine2(event.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="zipCode"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={(event) => setzipCode(event.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(event) => setState(event.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="checkbox"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Acepto terminos y condiciones
                <input
                  id="cbox1"
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                  required
                ></input>
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={prevStep}
                className=" bg-gray-300
                 text-gray-700 
                 py-2 px-4 
                 rounded-lg 
                 hover:bg-gray-400 mr-2"
              >
                Back
              </button>
              <button
                type="submit"
                className=" bg-[#4CB5AB]
                 text-white py-2 
                 rounded-lg 
                 w-full
                 hover:bg-[#389389]"
              >
                Sign Up
              </button>
            </div>
          </form>
        )}

        <div className="mt-4 flex items-center justify-center">
          <Link
            to="/LoginPage"
            className="ml-1 text-[#b4d334] hover:text-[#b4d334] hover:underline"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
