const Miembros = () => {
  return (
    <div className="container">
      <h2 className="flex">Conoce a nuestros integrantes</h2>

      <div className="grid">
        <div className="card">
          <img src="https://picsum.photos/200/200" alt="Integrante 1" />
          <p>Nicolás Durán</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/200" alt="Integrante 2" />
          <p>Sebastían Barthou</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/200" alt="Integrante 3" />
          <p>Benjamín Contreras</p>
        </div>
      </div>
    </div>
  );
};

export default Miembros;
