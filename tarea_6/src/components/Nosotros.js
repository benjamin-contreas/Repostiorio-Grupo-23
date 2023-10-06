const Nosotros = () => {
  return (
    <div>
        <div className="container flex">
            <h2>¿Quienes Somos?</h2>

            <div>
                <p>¡Hola! Somos un equipo de trabajo que se encuentra aprendiendo habilidades
                para desarrollar páginas web. En esta tarea nos estamos enfocando en usar React.</p>
            </div>

            <h2>Nuestros objetivos</h2>
            <div>
                <h3>A futuro nos proponemos los siguientes obejtivos como equipo:</h3>
            </div>
        </div>
        <div className="container objetivos">
            <ul>
                <li><p>Aprender a utilizar correctamente GitHub como herramienta para programar en equipo.</p></li>
                <li><p>Conocer los fundamentos de React.</p></li>
                <li><p>Desarrollar un proyecto final llamativo.</p></li>
            </ul>
        </div>
    </div>
  )
}

export default Nosotros