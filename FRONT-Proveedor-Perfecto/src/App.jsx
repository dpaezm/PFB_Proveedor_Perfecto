import Footer from "./components/Footer";
import CategoryList from "./components/Category/CategoryList";
import Header from "./components/Header";
import Login from "./pages/login";
import Encuentra from "./components/Product/Encuentra";
import Muestra from "./pages/muestra";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import UserData from './pages/UserData';
import ProductDetail from './pages/ProductDetail';
import ContactRequests from './pages/ContactRequests';
import ProvidersList from './pages/ProvidersList';
import ProviderDetail from './pages/ProviderDetail';
import NotFound from './pages/NotFound';

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
             <Route path="/user-data" element={<UserData />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact-requests" element={<ContactRequests />} />
        <Route path="/providers" element={<ProvidersList />} />
        <Route path="/provider/:id" element={<ProviderDetail />} />
        
         <Route path="*" element={<NotFound />} />
         
        {/*         <Route path="/categories" element={<CategoryList />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
