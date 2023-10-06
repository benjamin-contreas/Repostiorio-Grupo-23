import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='container flex'>
        <h1>Grupo 23</h1>
        <nav>
            <ul>
                <li><Link to= "/"></Link>Inicio</li>
                <li><Link to="/miembro1"></Link>Nicolás Durán</li>
                <li><Link to="#"></Link>Sebastían Barthou</li>
                <li><Link to="#"></Link>Benjamín Contreras</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav