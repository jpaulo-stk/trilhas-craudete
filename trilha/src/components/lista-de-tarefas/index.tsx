import { useState } from "react";

interface ListaTarefasProps {
  tarefasIniciais: string[];
}

export function ListaTarefas({ tarefasIniciais }: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  return (
    <div>
      <h2 className="font-bold mb-4">Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li className="border-1 mb-2" key={index}>
            {tarefa}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={novaTarefa}
        className="border-2 border-gray-300 rounded-lg p-1 mr-2"
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button className="border-2 px-2 bg-blue" onClick={adicionarTarefa}>
        Adicionar
      </button>
    </div>
  );
}

export default ListaTarefas;
