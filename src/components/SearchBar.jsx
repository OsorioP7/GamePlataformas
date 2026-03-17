function SearchBar({ search, setSearch }) {

  return (
    <input
      type="text"
      placeholder="Buscar videojuego..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        marginTop: "20px",
        borderRadius: "6px",
        border: "none"
      }}
    />
  );

}

export default SearchBar;