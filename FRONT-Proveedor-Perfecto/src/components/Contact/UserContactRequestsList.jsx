import "./Contact.css";
import ContactRequestDetail from "./ContactRequestDetail";
import AnswerForm from "./AnswerForm";
import { useEffect, useState } from "react";
import useGetUserContactRequests from "../../hooks/useGetUserContactRequests";
import UserContactRequestDetail from "./UserContactRequestDetail";
import UserContactStatusForm from "./UserContactStatusForm";

export default function UserContactRequestList() {
  const { requests: initialRequests } = useGetUserContactRequests();
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
          <UserContactRequestDetail request={request} />
          <UserContactStatusForm request={request} />
        </li>
      ))}
    </ul>
  );
}
