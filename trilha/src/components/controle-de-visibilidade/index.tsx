import { useState } from "react";

interface ToggleVisibilidadeProps {
  texto: string;
}

const ControleDeVisibilidade = ({ texto }: ToggleVisibilidadeProps) => {
  const [visivel, setVisivel] = useState<boolean>(true);

  return (
    <div>
      <button
        className="border-2 px-2 bg-blue"
        onClick={() => setVisivel(!visivel)}
      >
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
      {visivel && <p>{texto}</p>}
    </div>
  );
};

export default ControleDeVisibilidade;
