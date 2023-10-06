import Nav from './components/Nav';
import Bienvenida from './components/Bienvenida';
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
    </div>
  );
}

export default App;
