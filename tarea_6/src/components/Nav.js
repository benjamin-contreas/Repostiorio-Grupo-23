import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='container flex'>
        <h1>Grupo 23</h1>
        <nav>
            <ul>
                <li><Link to= "/">Inicio</Link></li>
                <li><Link to="/miembro1">Nicolás Durán</Link></li>
                <li><Link to="/miembro2">Sebastían Barthou</Link></li>
                <li><Link to="/miembro3">Benjamín Contreras</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav