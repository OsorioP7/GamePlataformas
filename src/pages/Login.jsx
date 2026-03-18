import { useState } from "react";
import { supabase } from "../services/supabaseClient";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login correcto");
      window.location.href = "/dashboard";
    }
  }

  return (
    <div className="auth-container">

      <div className="auth-overlay">

        <h2 className="auth-title">Iniciar sesión</h2>

        <form onSubmit={handleLogin}>

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
            Ingresar
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;