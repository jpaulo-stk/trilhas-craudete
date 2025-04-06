import { useState } from "react";

interface SaudacaoProps {
  nomeInicial: string;
}

export function Saudacao({ nomeInicial }: SaudacaoProps) {
  const [nome, setNome] = useState<string>(nomeInicial);

  return (
    <div>
      <h2>Olá, {nome}!</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
    </div>
  );
}

export default Saudacao;
