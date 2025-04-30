import "../index.css";

export default function Input({ ...props }) {

  return (
    <input
      className="p-2 rounded-md border border-gris2" {...props} />;
    />
  );

}
