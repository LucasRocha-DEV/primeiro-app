import React, { useState } from 'react';
import './components/App.css';
function App() {
  const [input, setInput] = useState(''); // Estado para armazenar o valor do input
  const [tarefas, setTarefas] = useState([]); // Corrigido para ser uma lista
  
  function handleRegister(e) { // Função para manipular/alterar o evento de submit do formulário
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página) ao submeter o formulário
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