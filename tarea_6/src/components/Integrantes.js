import fotoNico from "../fotos/perfil_nd.jpg"
import fotoSeba from "../fotos/miembro2.jpg"
import fotoBenja from "../fotos/foto_portada_benja.jpg"

const Integrantes = () => {
  return (
    <div className="container">
      <h2 className="flex">Conoce a nuestros integrantes</h2>

      <div className="grid">
        <div className="card">
          <img src={fotoNico} alt="Integrante 1" style={{ width: "80%" }} />
          <p>Nicolás Durán</p>
        </div>

        <div className="card">
          <img src={fotoSeba} alt="Integrante 2" />
          <p>Sebastían Barthou</p>
        </div>

        <div className="card" style={{ width: "90%" }}>
          <img src={fotoBenja} alt="Integrante 3" />
          <p>Benjamín Contreras</p>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
