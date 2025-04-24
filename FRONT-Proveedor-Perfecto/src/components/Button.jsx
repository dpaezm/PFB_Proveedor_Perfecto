function Button({
  children,
  color = "amarillo",
  hoverColor = "amarillo2",
  size = "text-lg",
  ...props
}) {
  console.log(hoverColor, size, color);
  return (
    <button
      className={`bg-${color} hover:bg-${hoverColor} text-white font-bold py-3 px-6 rounded-lg ${size} transition-colors duration-300 `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
