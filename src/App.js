import React, { useState } from 'react';
import './components/App.css';
function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(''); // Adicionando um novo estado para a senha
  const [idade, setIdade] = useState('');

  const [user,setUser] = useState({
    nome: '',
    email: '',
    senha: '', // Adicionando um novo estado para a senha
    idade: ''
  }); // Adicionando um novo estado para o usuário

  function handleRegister(e) { // Função para manipular/alterar o evento de submit do formulário
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página) ao submeter o formulário

    alert('Usuario Registrado Com Sucesso!'); // Exibe um alerta com a mensagem de usuário registrado com sucesso
    setUser({ // Alterando o estado do usuário
      nome: nome,
      email: email,
      senha: senha,
      idade: idade,
    })
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
        <label className="label-bold">Senha</label><br/>
        <input 
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
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
        <span className="label-bold">Bem Vindo:</span> {user.nome}<br/>
        <span className="label-bold">Email:</span> {user.email}<br/>
        <span className="label-bold">Senha:</span> {user.senha}<br/>
        <span className="label-bold">Idade:</span> {user.idade}<br/>
      </div>
    </div>
  );
}

export default App;