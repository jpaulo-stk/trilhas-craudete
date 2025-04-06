import { useState } from "react";

interface ContadorProps {
  valorInicial: number;
}

export function Contador({ valorInicial }: ContadorProps) {
  const [contador, setContador] = useState<number>(valorInicial);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
}

export default Contador;
