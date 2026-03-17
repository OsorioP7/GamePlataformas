import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useParams, useNavigate } from "react-router-dom";

function EditItem() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {

    const { data, error } = await supabase
      .from("items")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.log(error);
    } else {
      setName(data.name);
      setImage(data.image);
    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const { error } = await supabase
      .from("items")
      .update({ name, image })
      .eq("id", id);

    if (error) {
      alert("Error al actualizar");
    } else {
      alert("Videojuego actualizado");
      navigate("/dashboard");
    }

  };

  return (

    <div>

      <h2>Editar videojuego</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="text"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />

        <button type="submit">
          Guardar cambios
        </button>

      </form>

    </div>

  );

}

export default EditItem;