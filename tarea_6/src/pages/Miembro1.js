import Nav from "../components/Nav";
import About from "../components/About";
import InfoMiembro from "../components/InfoMiembro";
import fotoNico from "../portada_nd.jpg";
const Miembro1 = () => {
  const nombre = "Nicolás Durán";
  const foto = fotoNico;
  const texto =
    "Mi nombre es Nicolás Durán, tengo 25 años y me encuentro estudiando Ingeniería Civil Informática en la Universidad Adolfo Ibáñez. Algunas cosas que me gustan hacer son pasar tiempo con mi perro, salir a jugar básquetbol con mis amigos o hacer trekking.";
  const width = "100%";
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
          foto={fotoNico}
          width={width}
        ></InfoMiembro>
      </div>
    </div>
  );
};
export default Miembro1;