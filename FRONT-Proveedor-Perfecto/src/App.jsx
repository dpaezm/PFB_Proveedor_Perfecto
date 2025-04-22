import Header from "./components/Header";
import Muestra from "./pages/muestra";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/muestra" element={<Muestra />} />
      </Routes>
    </>
  );
}

export default App;
