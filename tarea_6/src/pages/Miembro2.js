import Nav from "../components/Nav";
import About from "../components/About";
import InfoMiembro from "../components/InfoMiembro";
import fotoSeba from "../miembro2-background.jpg";
const Miembro2 = () => {
  const nombre = "Sebastián Barthou";
  const foto = fotoSeba;
  const texto =
    "Me llamo Sebastián Barthou, tengo 20 años y me encuentro estudiando ingeniería civil en obras civiles junto con ingeniería civil en informática en la Universidad Adolfo Ibáñez. Algunas cosas que me gustan hacer son salir a caminar, hacer deportes al aire libre y escuchar música. Soy fanático del cafe y de los perros.";
  const width = "60%";
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
          foto={fotoSeba}
          width={width}
        ></InfoMiembro>
      </div>
    </div>
  );
};
export default Miembro2;
