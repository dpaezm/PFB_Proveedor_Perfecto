export default function ContactRequestDetail({ request }) {
  const { product_name, client, created_at, modified_at, comment } = request;

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
          <p>{client}</p>
          <p>Sobre {product_name}</p>
          <p>Ticket abierto el {fechaCreacionFormateada}</p>
          <p>Última modificación {fechaModificacionFormateada}</p>
        </div>
        <div className="container-mensaje">
          <p>Mensaje</p>
          <p>{comment}</p>
        </div>
      </section>
    </>
  );
}
