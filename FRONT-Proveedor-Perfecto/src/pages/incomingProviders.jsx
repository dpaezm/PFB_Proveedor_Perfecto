import useIncomingProviders from "../hooks/useIncomingProviders";

export default function IncomingProviders() {
  const { providers, error } = useIncomingProviders();
  return (
    <section>
      <h1>Proveedores pendientes</h1>
      <p>{error}</p>
      <ul>
        {providers?.map((provider) => (
          <li key={provider.id}>{provider.name}</li>
        ))}
      </ul>
    </section>
  );
}
