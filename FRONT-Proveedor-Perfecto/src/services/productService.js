const { VITE_API_URL } = import.meta.env;

export async function searchProductService(input) {
  const res = await fetch(`${VITE_API_URL}/products/search?input=${encodeURIComponent(input)}`);
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json.data;
}
