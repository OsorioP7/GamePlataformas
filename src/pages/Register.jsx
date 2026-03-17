import { useState } from "react";
import { supabase } from "../services/supabaseClient";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Usuario registrado correctamente");
    }
  }

  return (
      <div className="register-container">

        <div className="auth-overlay">

          <h2 className="auth-title">Crear cuenta</h2>

          <input
            className="auth-input"
            type="email"
            placeholder="Correo"
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Contraseña"
          />

          <button className="btn-primary">
            Registrarse
          </button>

        </div>

      </div>
  );
}

export default Register;