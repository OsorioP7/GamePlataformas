import { useState } from "react";
import { supabase } from "../services/supabaseClient";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login correcto");
    }
  }

  return (
  <div className="auth-container">

    <div className="auth-overlay">

      <h2 className="auth-title">Iniciar sesión</h2>

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

      <button className="btn-primary">Ingresar</button>

    </div>

  </div>
  );
}

export default Login;