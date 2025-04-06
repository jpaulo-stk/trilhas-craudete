import Contador from "../../components/contador";
import ControleDeVisibilidade from "../../components/controle-de-visibilidade";
import ListaTarefas from "../../components/Lista-de-tarefas";
import Saudacao from "../../components/Saudacoes";

export function Trilha2() {
  return (
    <>
      <div className="border-2 border-red-500 p-2 rounded-lg">
        <Contador valorInicial={0} />
      </div>
      <div className="border-2 border-red-500 p-2 rounded-lg">
        <Saudacao nomeInicial="João Paulo" />
      </div>
      <div className="border-2 border-red-500 p-2 rounded-lg">
        <ListaTarefas tarefasIniciais={["back-end", "frOont-end"]} />
      </div>
      <div className="border-2 border-red-500 p-2 rounded-lg">
        <ControleDeVisibilidade texto="VISIVEL" />
      </div>
    </>
  );
}
