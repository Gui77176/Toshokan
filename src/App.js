import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './components/Accueil';
import 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Accueil></Accueil>
    </div>
  );
}

export default App;
