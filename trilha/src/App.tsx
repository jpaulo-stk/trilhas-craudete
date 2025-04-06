import "./App.css";
import Contador from "./components/contador";
import ControleDeVisibilidade from "./components/controle-de-visibilidade";
import ListaTarefas from "./components/lista-de-tarefas";
import Saudacao from "./components/saudacoes";

function App() {
  return (
    <>
      <div>
        <Contador valorInicial={0} />
      </div>
      <div>
        <Saudacao nomeInicial="João Paulo" />
      </div>
      <div>
        <ListaTarefas tarefasIniciais={["back-end", "frOont-end"]} />
      </div>
      <div>
        <ControleDeVisibilidade texto="VISIVEL" />
      </div>
    </>
  );
}

export default App;
