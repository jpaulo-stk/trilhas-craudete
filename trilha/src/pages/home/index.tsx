import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const irParaAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Página Inicial</h1>
      <button onClick={irParaAbout}>Ir para About</button>
    </div>
  );
}
