import './App.css';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';
import Card from './components/Card'

function App() {

  return (
    <div className="App">
        <Titulo texto="Meu Primeiro Projeto React do Zero" />
        <Subtitulo texto="Livros de mulheres negras inspiradoras" />
      <header className="App-header"> 

      <Card />

      </header>
    </div>
  );

}

export default App;
