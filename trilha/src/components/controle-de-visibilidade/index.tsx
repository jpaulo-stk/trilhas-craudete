import React, { useState } from "react";

interface ToggleVisibilidadeProps {
  texto: string;
}

const ControleDeVisibilidade = ({ texto }: ToggleVisibilidadeProps) => {
  const [visivel, setVisivel] = useState<boolean>(true);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
      {visivel && <p>{texto}</p>}
    </div>
  );
};

export default ControleDeVisibilidade;
