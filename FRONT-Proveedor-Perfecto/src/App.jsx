// import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import CategoryList from "./components/Category/CategoryList";
import TopCategoryList from "./components/Category/TopCategoryList";

import Header from "./components/Header";
import Login from "./pages/login";
import Validate from "./pages/Validate";
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
import Filters from "./components/Filters";
import ProductList from "./pages/ProductList";
import RecoverPass from "./pages/RecoverPass";
import ResetPass from "./pages/ResetPass";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageContactRequests from "./pages/ManageContactRequests";
import ChangePassword from "./pages/ChangePassword";
import ManageUserContactRequests from "./pages/ManageUserContactRequests";
import ProductFilteredList from "./pages/ProductFilteredList";

function App() {
  // const location = useLocation();
  // const noLayoutRoutes = ["/login", "/register"];

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
                <Filters />
                <TopCategoryList />
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/validation" element={<Validate />} />
          <Route path="/muestra" element={<Muestra />} />
          <Route path="/user-data" element={<UserData />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products/search" element={<ProductFilteredList />} />
          <Route path="/contact-requests" element={<ContactRequests />} />
          <Route path="/providers" element={<ProvidersList />} />
          <Route path="/providers/:id" element={<ProviderDetail />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/:id" element={<CategoryProducts />} />
          <Route path="/recover-pass" element={<RecoverPass />} />
          <Route path="/reset-pass/:recoverPassCode" element={<ResetPass />} />
          <Route path="/validate/:registrationCode" element={<Validate />} />

          <Route path="/changePassword/:id" element={<ChangePassword />} />

          <Route path="/contactrequest/:id" element={<ManageContactRequests />} />
          <Route path="/contactrequest/user/:id" element={<ManageUserContactRequests />} />

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
