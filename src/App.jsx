import { useEffect, useState } from "react";
import { supabase } from "./services/supabaseClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditItem from "./pages/EditItem";
import CreateItem from "./pages/CreateItem";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {

  const [session, setSession] = useState(null);

  useEffect(() => {

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };

  }, []);

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        
        {/* páginas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* página protegida */}
        <Route
          path="/dashboard"
          element={
            session ? <Dashboard /> : <Login />
          }
        />
        <Route
          path="/create"
          element={session ? <CreateItem /> : <Login />}
        />

        <Route
          path="/edit/:id"
          element={session ? <EditItem /> : <Login />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;