import Footer from "./components/Footer";
import CategoryList from "./components/Category/CategoryList";
import Header from "./components/Header";
import Login from "./pages/login";
import Encuentra from "./components/Product/Encuentra";
import Muestra from "./pages/muestra";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Encuentra />
      <CategoryList />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/muestra" element={<Muestra />} />
        {/*         <Route path="/categories" element={<CategoryList />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
