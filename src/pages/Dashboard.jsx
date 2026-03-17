import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { Link } from "react-router-dom";
import GameGrid from "../components/GameGrid";
import SearchBar from "../components/SearchBar";

function Dashboard() {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

  checkSession();
  getItems();

  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  async function checkSession() {

    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      alert("Debes iniciar sesión");
      window.location.href = "/login";
    }

  }

  async function getItems() {

    const { data, error } = await supabase
      .from("items")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      console.log(error);
    } else {
      setItems(data);
    }

  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div style={{ padding: "40px" }}>

        <h1>Catálogo de Videojuegos</h1>

        <SearchBar search={search} setSearch={setSearch} />

        <GameGrid items={filteredItems} />

        <div className="catalog-bottom">

          <Link to="/create">
            <button className="btn-primary catalog-btn">
              + Agregar videojuego
            </button>
          </Link>

        <button
          onClick={handleLogout}
          className="btn-danger catalog-btn"
        >
          Cerrar sesión
        </button>

  </div>

</div>

  );

}

export default Dashboard;