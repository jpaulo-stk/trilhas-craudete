import { Link } from "react-router-dom";

export function Rooms() {
  const quartos = [
    { id: 1, nome: "Suíte Luxo" },
    { id: 2, nome: "Quarto Econômico" },
  ];

  return (
    <div>
      <h1>Quartos Disponíveis</h1>
      <ul>
        {quartos.map((quarto) => (
          <li key={quarto.id}>
            <Link to={`/room/${quarto.id}`}>{quarto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
