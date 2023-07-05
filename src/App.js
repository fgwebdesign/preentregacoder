import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from '../src/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="Este es el sitio de Duki" />
    </div>
  );
}

export default App;
