import useAnswerContactRequest from "../../hooks/useAnswerContactRequest";

export default function AnswerForm({ request, onAnswered }) {
  const { answer, setAnswer, loading, handleSubmit } = useAnswerContactRequest();

  if (request.answer) {
    return (
      <p className="respuesta-enviada">
        <strong>Respuesta enviada:</strong> {request.answer}
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e, request.id, () => onAnswered(request.id, answer))}
      className="formulario-contacto"
    >
      <textarea
        name="answer"
        placeholder="Responde la solicitud de contacto"
        maxLength={255}
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
