import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-logo md:text-[32px] text-amarillo font-black text-center mb-4">
        404 - Not Found
      </h2>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link to="/" className="text-lg text-blue-500 hover:underline">
        Volver a la Página Principal
      </Link>
    </main>
  );
}
