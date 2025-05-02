const { VITE_API_URL } = import.meta.env;

export const sendRecoverPassService = async (email) => {
  const res = await fetch(`${VITE_API_URL}/users/password/recover`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const body = await res.json();

  if (!res.ok) throw new Error(body.message);

  return body;
};
