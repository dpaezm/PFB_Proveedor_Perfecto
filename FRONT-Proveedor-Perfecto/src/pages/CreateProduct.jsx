import Input from "../components/Input";
import useCreateProduct from "../hooks/useCreateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateProduct() {
  const { formState, error, handleSubmit, handleTextChange, handleFileChange } =
    useCreateProduct();

  return (
    <main className="mx-auto px-4 py-8 md:px-16 lg:px-32 ">
      <h2 className="text-cta md:text-[36px] text-amarillo font-bold text-center mb-8">
        Crear Producto
      </h2>

      {error && <p className="text-red-500 font-bold text-center">{error}</p>}

      <form
        onSubmit={handleSubmit}
        className="w-full md:w-80% mx-auto flex flex-col gap-6 md:gap-8 items-center max-w-[900px] "
      >
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2">
            <label htmlFor="product_name" className="block mb-2">
              Nombre del producto:
            </label>
            <Input
              id="product_name"
              name="product_name"
              required
              value={formState.product_name}
              onChange={handleTextChange}
            />
          </div>

          <div className="w-full md:w-1/2">
            <label htmlFor="price" className="block mb-2">
              Precio:
            </label>
            <Input
              type="number"
              id="price"
              name="price"
              required
              value={formState.price}
              onChange={handleTextChange}
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="description" className="block mb-2">
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            required
            className="w-full p-3 border rounded"
            value={formState.description}
            onChange={handleTextChange}
          ></textarea>
        </div>

        <div className="w-full">
          <label htmlFor="category_id" className="block mb-2">
            Categoría:
          </label>
          <select
            id="category_id"
            name="category_id"
            required
            className="w-full p-3 border rounded"
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

        <div className="w-full text-center">
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
            className="inline-block bg-amarillo text-white py-2 px-6 rounded cursor-pointer"
          >
            Subir foto
          </label>
          {formState.photo1 && (
            <p className="text-sm text-gray-600 mt-2">
              {formState.photo1.name}
            </p>
          )}
        </div>

        <button type="submit" className="boton boton-amarillo">
          Crear producto
        </button>
      </form>

      <ToastContainer position="bottom-right" />
    </main>
  );
}
