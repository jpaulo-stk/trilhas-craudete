import { useParams, useNavigate } from "react-router-dom";

export function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const reservar = () => {
    navigate("/booking-success");
  };

  return (
    <div>
      <h1>Detalhes do Quarto {id}</h1>
      <button onClick={reservar}>Reservar</button>
    </div>
  );
}
