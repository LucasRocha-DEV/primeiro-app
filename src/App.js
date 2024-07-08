import React, { useState } from 'react';
import './components/App.css';
function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  function handleRegister(e) { // Função para manipular/alterar o evento de submit do formulário
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página) ao submeter o formulário
    alert('TESTE');
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label className="label-bold">Nome</label><br/>
        <input 
          placeholder="Digite seu nome" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /><br/>
        <label className="label-bold">Email</label><br/>
        <input 
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <label className="label-bold">Idade</label><br/>
        <input 
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        /><br/>
        <button type="submit" className="button-register">Registrar</button>
      </form>

      <br/><br/>

      <div>
        <span className="label-bold">Bem Vindo:</span> {nome}<br/>
        <span className="label-bold">Email:</span> {email}<br/>
        <span className="label-bold">Idade:</span> {idade}<br/>
      </div>
    </div>
  );
}

export default App;