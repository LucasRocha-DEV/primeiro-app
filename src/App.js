import Nome from "./components/Nome";

function App() {
  return (
    <div className="App">
<form>
  <label>nome</label><br/>
  <input placeholder="Digite seu nome"></input><br/>
  
  <label>idade</label><br/>
  <input placeholder="Digite sua idade"></input><br/>
  
  <label>email</label><br/>
  <input placeholder="Digite seu email"></input><br/>

  <button type="submit">Registrar</button>
</form>
    </div>
  );
}

export default App;
