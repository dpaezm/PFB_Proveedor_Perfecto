import Input from "../components/Input";
import useCreateProduct from "../hooks/useCreateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateProduct() {
  const { formState, error, handleSubmit, handleTextChange, handleFileChange } =
    useCreateProduct();

  return (
    <main className="p-5">
      <h2 className="text-cta md:text-[36px] text-amarillo font-bold text-center">
        Crear Producto
      </h2>

      {error && <p className="text-red-500 font-bold">{error}</p>}

      <form
        className="p-5 border-solid border-2 rounded-md text-normal text-gris1 font-normal text-center"
        onSubmit={handleSubmit}
      >
        <ul className="p-2 flex-col space-y-4">
          <li className="p-2">
            <label htmlFor="product_name">Nombre del producto:</label>
            <Input
              id="product_name"
              name="product_name"
              required
              value={formState.product_name}
              onChange={handleTextChange}
            />
          </li>

          <li className="p-2">
            <label htmlFor="price">Precio:</label>
            <Input
              type="number"
              id="price"
              name="price"
              required
              value={formState.price}
              onChange={handleTextChange}
            />
          </li>

          <li className="p-2">
            <label htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              name="description"
              required
              className="w-full p-2 border rounded"
              value={formState.description}
              onChange={handleTextChange}
            ></textarea>
          </li>

          <li className="p-2">
            <label htmlFor="category_id">Categoría:</label>
            <select
              id="category_id"
              name="category_id"
              required
              className="w-full p-2 border rounded"
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
          </li>

          <li className="p-2">
            <input
              id="photo1"
              type="file"
              name="photo1"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="photo1"
              className="block bg-amarillo text-white text-center py-2 px-4 rounded cursor-pointer"
            >
              Subir foto
            </label>
            {formState.photo1 && (
              <p className="text-sm text-gray-600 mt-2">
                {formState.photo1.name}
              </p>
            )}
          </li>
        </ul>

        <button className="bg-gris1 hover:bg-amarillo2 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors mt-4">
          Crear Producto
        </button>
      </form>

      <ToastContainer position="bottom-right" />
    </main>
  );
}
