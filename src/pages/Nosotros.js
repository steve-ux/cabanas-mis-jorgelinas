import Dique from "../assets/Cabaña 1/Cabaña 1 Invierno/dique.jpg";

function Nosotros() {
  return (
    <div className="nosotrosPadre">
      <h2
        className="titleNosotros"
        id="Nosotros"
        data-aos="fade-down"
        data-aos-duration="600"
      >
        Cabañas Mis Jorgelinas
      </h2>
      <div className="containerNosotros">
        <img
          src={Dique}
          width="500"
          className="dique"
          alt="Dique Potrerillos nevado"
          data-aos="fade-down"
          data-aos-duration="600"
        />
        <p data-aos="fade-up"
        data-aos-duration="600">
          Somos una familia que alquilamos cabañas en{" "}
          <span>Valle del Sol, Potrerillos</span>, desde hace más de 20 años.
          Hacemos lo mejor para ofrecer un buen servicio, que su estancia sea
          confortable y enriquecedora, y proporcionamos información sobre todo
          tipo de actividades y lugares de interés en la zona, como el centro de
          esquí{" "}
          <span>Vallecitos, El Dique Potrerillos, Termas de Cacheuta</span> y
          otras atracciones turísticas.
        </p>
        <p data-aos="fade-up"
        data-aos-duration="600">
          Ubicados en la cadena montañosa{" "}
          <span>Cordón del Plata, en Los Andes</span>, a 80km de la ciudad de{" "}
          <span>Mendoza</span>, vas a ver paisajes únicos, tranquilidad
          inigualable y la flora y fauna del valle. Somos tu mejor opción para
          tus vacaciones de verano o invierno, o fines de semana de relax.
        </p>
        <p data-aos="fade-up"
        data-aos-duration="600">
          Contamos con <span>3 cabañas</span> doble piso con capacidad de hasta 10
          personas, equipadas con calefacción a gas/leña, televisión satelital,
          internet WiFi, piscina, churrasquera, garage. Además cada vivienda
          cuenta con un amplio comedor, cocina, heladera, microondas, baños equipados y
          patio exterior. Por último, en la cuadra podrás encontrar una
          proveeduría-restaurant con todo lo necesario para tus compras.
          Conocenos o <span>contactate</span> para saber más de nuestras
          cabañas.
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
