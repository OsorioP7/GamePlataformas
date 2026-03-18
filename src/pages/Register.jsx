import { useState } from "react";
import { supabase } from "../services/supabaseClient";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Usuario registrado correctamente");
      window.location.href = "/login";
    }
  }

  return (
    <div className="register-container">

      <div className="auth-overlay">

        <h2 className="auth-title">Crear cuenta</h2>

        <form onSubmit={handleRegister}>

          <input
            className="auth-input"
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn-primary">
            Registrarse
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;