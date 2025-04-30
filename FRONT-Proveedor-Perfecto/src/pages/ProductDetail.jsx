import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const body = await res.json();
        if (!res.ok) throw new Error(body.message);
        setProduct(body.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;
  if (!product) return <p className="text-center mt-4">Cargando producto...</p>;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Imágenes */}
        <div className="flex-1 flex flex-col gap-4">
          {product.photo1 && (
            <img
              src={`http://localhost:3000/${product.photo1}`}
              alt="Foto 1"
              className="w-full rounded-lg object-cover shadow"
            />
          )}
          {product.photo2 && (
            <img
              src={`http://localhost:3000/${product.photo2}`}
              alt="Foto 2"
              className="w-full rounded-lg object-cover shadow"
            />
          )}
        </div>

        {/* Info del producto */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-negro">
            {product.product_name}
          </h2>

          <p className="text-xl font-semibold text-gris1 mb-2">
            {product.price} €
          </p>

          <p className="text-gray-600 mb-4">
            Categoría:{" "}
            <span className="font-medium">{product.categoryname}</span>
          </p>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-gris1">
              Descripción
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Proveedor */}
          <div className="flex items-center gap-4 mb-4">
            {product.avatar && (
              <img
                src={`http://localhost:3000/${product.avatar}`}
                alt="avatar"
                className="w-14 h-14 rounded-full object-cover border"
              />
            )}
            <div>
              <p className="font-medium text-lg">@{product.provider}</p>
            </div>
          </div>

          {/* Valoraciones */}
          <div className="text-sm text-gray-600">
            <p>
              Valoración media:{" "}
              <span className="font-semibold">
                ⭐ {product.avg_rating || "N/A"}
              </span>
            </p>
            <p>
              Total valoraciones:{" "}
              <span className="font-semibold">{product.total_ratings}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
