import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

function CreateItem() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const { error } = await supabase
      .from("items")
      .insert([{ name, image }]);

    if (error) {
      alert("Error al crear videojuego");
      console.log(error);
    } else {
      alert("Videojuego creado");
      navigate("/dashboard");
    }

  };

  return (

    <div>

      <h1>Crear videojuego</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Nombre"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="URL imagen"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />

        <button type="submit">
          Crear
        </button>

      </form>

    </div>

  );

}

export default CreateItem;