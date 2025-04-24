import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/login";
import Muestra from "./pages/muestra";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/muestra" element={<Muestra />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
