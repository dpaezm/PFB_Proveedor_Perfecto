export default function UserContactRequestDetail({ request }) {
  const { product_name, provider, created_at, modified_at, comment, answer } = request;

  const fechaCreacion = new Date(created_at);

  const fechaCreacionFormateada = fechaCreacion.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const fechaModificacion = new Date(modified_at);
  const fechaModificacionFormateada = fechaModificacion.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <section className="request-section">
        <div className="container-data-user">
          <p>Sobre {product_name}</p>
          <p>Proveedor : {provider}</p>
          <p>Mensaje enviado el {fechaCreacionFormateada}</p>
          <p>Última modificación {fechaModificacionFormateada}</p>
        </div>
        <div className="container-mensaje">
          <p className="txt-destacado">Mensaje enviado:</p>
          <p>{comment}</p>
        </div>
        {answer ? (
          <div className="container-respuesta">
            <p className="txt-destacado">Respuesta del proveedor:</p>
            <p>{answer}</p>
          </div>
        ) : (
          <p className="txt-destacado">Esperando respuesta del proveedor</p>
        )}
      </section>
    </>
  );
}
