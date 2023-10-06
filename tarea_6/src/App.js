import Nav from './components/Nav';
import Bienvenida from './components/Bienvenida';
import Nosotros from './components/Nosotros';
import Integrantes from './components/Integrantes';
import './Utilities.css';

function App() {
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>

      <div className='bienvenida'>
        <Bienvenida />
      </div>

      <div className='nosotros'>
        <Nosotros />
      </div>

      <div className='integrantes'>
        <Integrantes />
      </div>
    </div>
  );
}

export default App;
