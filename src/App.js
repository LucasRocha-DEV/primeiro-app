import Nome from "./components/Nome";

function App() {
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [idade,setIdade] = useState(0);

function handleRegister(e){
  alert(TESTE);
}

  return (
    <div className="App">
      <h1>Formulário de Cadastro</h1>

<form onSubmit={handleRegister}>

  <label>Nome</label><br/>
  <input 
  placeholder="Digite seu nome" 
  value={nome}
  onChange={ (e) => setNome(e.target.value) }/><br/>
  
  <label>Email</label><br/>
  <input 
  placeholder="Digite seu email"
  value={email}
  onChange={ (e) => setEmail(e.target.value) }
  ></input><br/>

  <label>Idade</label><br/>
  <input placeholder="Digite sua idade"
  
  ></input><br/>
  


  <button type="submit">Registrar</button>
</form>
    <br/><br/>

    <div>
      <span>Bem Vindo: {user.nome}</span>
      <span>Email: {user.email}</span>
      <span>Idade: {user.idade}</span>
    </div>
    </div>
  );
}

export default App;
