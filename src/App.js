import React, { useState,useEffect } from 'react';
import './components/App.css';
function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('@tarefas');
    console.log('Tarefas carregadas:', tarefasSalvas);
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas));
    console.log('Tarefas salvas:', tarefas);
    // Removido o alert para evitar interrupções no fluxo da aplicação
  }, [tarefas]);

  function handleRegister(e) { // Função para manipular/alterar o evento de submit do formulário
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página) ao submeter o formulário
    if (!input.trim()) return; // Verifica se o input é uma string vazia ou contém apenas espaços. Se sim, retorna e não faz nada.
    setTarefas([...tarefas, input]); // Adiciona a tarefa atual à lista de tarefas
    setInput(''); // Limpa o input após adicionar a tarefa
  }

  return (
    <div>
      <div className="form-box">
       <h1>To Do</h1>

      <form onSubmit={handleRegister}>
        <label className="label-bold">Nome da Tarefa</label><br/>
        <input 
          placeholder="Digite uma Tarefa" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br/>
        <br/>
        <button type="submit" className="button-register">Registrar</button>
      </form>
      </div>

      <br/><br/>

      <div className="welcome-box"> 
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li> // Adicionado key
          ))}
        </ul> {/* Corrigido para fechar a tag <ul> */}
      </div>
    </div>
  );
}

export default App;