const { VITE_API_URL } = import.meta.env;

export async function sendContactRequestService({ product_id, comment, token }) {
  const res = await fetch(`${VITE_API_URL}/contactrequest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ product_id, comment }),
  });

  const json = await res.json();

  if (!res.ok) throw new Error(json.message);
  return json;
}

export async function answerContactRequestService({ request_id, answer, token }) {
  const res = await fetch(`${VITE_API_URL}/contactrequest/answer/${request_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ answer }),
  });
  const json = await res.json();

  if (!res.ok) throw new Error(json.message);
  return json;
}

export async function getContactRequestsService({ providerId, token }) {
  const res = await fetch(`${VITE_API_URL}/contactrequest/${providerId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();

  if (!res.ok) throw new Error(json.message);
  return json.requests;
}
