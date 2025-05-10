import "./Contact.css";
import useGetContactRequests from "../../hooks/useGetContactRequests";
import ContactRequestDetail from "./ContactRequestDetail";
import AnswerForm from "./AnswerForm";
import { useEffect, useState } from "react";

export default function ContactRequestList() {
  const { requests: initialRequests } = useGetContactRequests();
  const [requests, setRequests] = useState(initialRequests);

  useEffect(() => {
    setRequests(initialRequests);
  }, [initialRequests]);

  function handleAnswered(id, answer) {
    setRequests((prev) => prev.map((req) => (req.id === id ? { ...req, answer: answer } : req)));
  }

  return (
    <ul className="request-contact-list">
      {requests.map((request) => (
        <li key={request.id} className="li-request">
          <ContactRequestDetail request={request} />
          <AnswerForm request={request} onAnswered={handleAnswered} />
        </li>
      ))}
    </ul>
  );
}
