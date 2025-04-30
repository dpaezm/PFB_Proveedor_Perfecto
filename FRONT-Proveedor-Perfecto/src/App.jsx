import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import CategoryList from "./components/Category/CategoryList";
import Header from "./components/Header";
import Login from "./pages/Login";
import Encuentra from "./components/Product/Encuentra";
import Muestra from "./pages/muestra";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import UserData from "./pages/UserData";
import ProductDetail from "./pages/ProductDetail";
import ContactRequests from "./pages/ContactRequests";
import ProvidersList from "./pages/ProvidersList";
import ProviderDetail from "./pages/ProviderDetail";
import NotFound from "./pages/NotFound";
import CreateProduct from "./pages/CreateProduct";
import CategoryProducts from "./components/Category/CategoryProducts";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  const noLayoutRoutes = ["/login", "/register"];

  return (
    <>
      {/* {!noLayoutRoutes.includes(location.pathname) && <Header />} */}
      <Header />
      <main className="flex grow flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Encuentra />
                <CategoryList />
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/muestra" element={<Muestra />} />
          <Route path="/user-data" element={<UserData />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact-requests" element={<ContactRequests />} />
          <Route path="/providers" element={<ProvidersList />} />
          <Route path="/provider/:id" element={<ProviderDetail />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/:id" element={<CategoryProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* {!noLayoutRoutes.includes(location.pathname) && <Footer />} */}
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
