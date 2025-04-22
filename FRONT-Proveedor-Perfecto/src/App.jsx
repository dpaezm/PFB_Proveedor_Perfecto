import Button from './components/Button';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gris3 font-poppins p-8">
      {/* Logo */}
      <h1 className="text-logo md:text-[32px] text-amarillo font-black text-center">
        find;) Logo
      </h1>

      {/* CTA */}
      <h2 className="text-cta md:text-[36px] text-amarillo font-bold text-center">
        CTA Principal
      </h2>

      {/* Título */}
      <h3 className="text-titulo md:text-[32px] text-gris1 font-medium text-center">
        Título
      </h3>

      {/* Subtítulo */}
      <h4 className="text-subtitulo md:text-[16px] text-gris2 font-medium text-center">
        Subtítulo
      </h4>

      {/* Texto destacado */}
      <p className="text-destacado md:text-[14px] text-amarillo font-medium text-center">
        Texto destacado
      </p>

      {/* Texto normal */}
      <p className="text-normal text-gris1 font-normal text-center">
        Texto normal
      </p>

      {/* Botón sin componente */}
      <button className="bg-amarillo hover:bg-amarillo2 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
        ¡Botón sin componente!
      </button>

      {/* Botón principal */}
      <Button>¡Botón desde componente!</Button>

      {/* Botón alternativo (diferente tamaño) */}
      <Button size="text-xl">¡Soy más grande!</Button>
    </div>
  );
}

export default App;
