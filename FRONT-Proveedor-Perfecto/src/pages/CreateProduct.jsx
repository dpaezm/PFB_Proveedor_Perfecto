import Input from "../components/Input";
import useCreateProduct from "../hooks/useCreateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateProduct.css";
import { NavLink } from "react-router-dom";

export default function CreateProduct() {
  const { formState, error, handleSubmit, handleTextChange, handleFileChange } =
    useCreateProduct();

  return (
    <div className="create-container">
      {/* <section className="">
        {error && <p className="text-red-500 font-bold text-center">{error}</p>} */}

      <form onSubmit={handleSubmit} className="create-form">
        <h2 className="h2">Crear servicio</h2>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2">
            <label htmlFor="product_name" className="block mb-2"></label>
            <Input
              className="formulario"
              type="text"
              placeholder="Nombre del producto"
              id="product_name"
              name="product_name"
              required
              value={formState.product_name}
              onChange={handleTextChange}
            />
          </div>

          <div className="w-full md:w-1/2">
            <label htmlFor="price" className="block mb-2"></label>
            <Input
              className="formulario"
              type="number"
              placeholder="Precio (€)"
              id="price"
              name="price"
              required
              value={formState.price}
              onChange={handleTextChange}
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="description" className="block mb-2"></label>
          <textarea
            placeholder="Descripción del servicio"
            id="description"
            name="description"
            required
            className="formulario w-full"
            value={formState.description}
            onChange={handleTextChange}
          ></textarea>
        </div>

        <div className="w-full">
          <label htmlFor="category_id" className="block mb-2"></label>
          <select
            placeholder="Selecciona una categoría"
            id="category_id"
            name="category_id"
            required
            className="formulario w-full"
            value={formState.category_id}
            onChange={handleTextChange}
          >
            <option value="">Selecciona una categoría</option>
            <option value="1">Programming & Tech</option>
            <option value="2">Graphics & Design</option>
            <option value="3">Marketing</option>
            <option value="4">Copywriting</option>
            <option value="5">AI Services</option>
            <option value="6">Finance</option>
            <option value="7">Business</option>
          </select>
        </div>

        <div className="">
          <Input
            id="photo1"
            type="file"
            name="photo1"
            accept="image/*"
            onChange={handleFileChange}
            className="formulario hidden"
          />
          <label htmlFor="photo1" className=" formulario cursor-pointer">
            Subir foto
          </label>
          {formState.photo1 && (
            <p className="text-sm text-gray-600 mt-2">
              {formState.photo1.name}
            </p>
          )}
        </div>

        <button type="submit" className="boton boton-amarillo cursor-pointer">
          Crear producto
        </button>
        <NavLink to={`/`} className="boton boton-atras">
          Atrás
        </NavLink>
      </form>

      <ToastContainer position="bottom-right" />
      {/* </section> */}
    </div>
  );
}
