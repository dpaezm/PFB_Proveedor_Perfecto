const { VITE_API_URL } = import.meta.env;

export async function getIncomingProvidersService({ token }) {
  const res = await fetch(`${VITE_API_URL}/incomingProviders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();

  if (!res.ok) throw new Error(json.message);
  return json;
}
