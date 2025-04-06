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
        className="border-2 border-gray-300 rounded-lg p-1 mr-2"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
    </div>
  );
}

export default Saudacao;
