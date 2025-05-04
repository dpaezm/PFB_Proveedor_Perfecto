import useAnswerContactRequest from "../../hooks/useAnswerContactRequest";

export default function AnswerForm({ request, onAnswered }) {
  const { answer, setAnswer, loading, handleSubmit } = useAnswerContactRequest(request.id, () => {
    onAnswered(request.id, answer);
  });

  if (request.answer) {
    return (
      <p className="respuesta-enviada">
        <strong>Respuesta enviada:</strong> {request.answer}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="formulario-contacto">
      <textarea
        name="answer"
        placeholder="Responde la solicitud de contacto"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
        required
      />
      <button type="submit" className="boton boton-contactar">
        {loading ? "Enviando..." : "Responder"}
      </button>
    </form>
  );
}
