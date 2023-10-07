import Nav from "../components/Nav";
import About from "../components/About";
import InfoMiembro from "../components/InfoMiembro";
import fotoBenja from "../foto-voluntario-benja.jpg";
const Miembro3 = () => {
  const nombre = "Benjamin Contreras";
  const foto = fotoBenja;
  const texto =
    "Mi nombre es Benjamín Contreras, tengo 24 años y soy estudiante de Ingeniería Civil en informática en la Universidad Adolfo Ibañez. Me gustan mucho los videojuegos, ver animé y el voluntariado. Además me gustan los deportes, principalmente el rugby y el fútbol.";

  return (
    <div>
      <div className="navbar">
        <Nav></Nav>
      </div>
      <div className="about">
        <About></About>
      </div>
      <div className="empty"></div>
      <div className="info-miembro">
        <InfoMiembro
          tetxo= {texto}
          nombre={nombre}
          foto={fotoBenja}
        ></InfoMiembro>
      </div>
    </div>
  );
};
export default Miembro3;
