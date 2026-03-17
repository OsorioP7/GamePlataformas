import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">

        <h1>GameVault</h1>

        <p>
          Bienvenido a GameVault, una plataforma donde puedes explorar,
          registrar y administrar tu propio catálogo de videojuegos.
        </p>

        <div className="hero-buttons">
          <Link to="/login">
            <button className="btn-primary">Iniciar sesión</button>
          </Link>

          <Link to="/register">
            <button className="btn-secondary">Registrarse</button>
          </Link>
        </div>

      </section>


      {/* INFO SECTION */}
      <section className="info">

        <div className="card">
          <h3>Catálogo de videojuegos</h3>
          <p>
            Explora un catálogo organizado de videojuegos donde podrás
            buscar fácilmente tus títulos favoritos.
          </p>
        </div>

        <div className="card">
          <h3>Agrega nuevos juegos</h3>
          <p>
            Registra nuevos videojuegos con su nombre e imagen para
            construir tu propio catálogo personalizado.
          </p>
        </div>

        <div className="card">
          <h3>Administra tu colección</h3>
          <p>
            Edita, elimina o actualiza los videojuegos cuando quieras
            mantener tu catálogo actualizado.
          </p>
        </div>

      </section>


      {/* CTA */}
      <section className="cta">

        <h2>Empieza a explorar tu catálogo</h2>

        <Link to="/dashboard">
          <button className="btn-primary">
            Ver catálogo
          </button>
        </Link>

      </section>

    </div>
  );
}

export default Home;