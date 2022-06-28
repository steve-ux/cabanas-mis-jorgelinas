import NavBar from "../components/Navigator/Navbar";
import Nosotros from "./Nosotros";
import Galeria from "../components/Navigator/Galeria";
import Videoloop from "../assets/Potrerillos.mp4";
import Logo from "../assets/Logo.png";
import Icono1 from "../assets/wifi.png";
import Icono2 from "../assets/antena.png";
import Icono3 from "../assets/calefaccion.png";
import Icono4 from "../assets/piscina.png";

function Home() {
  return (
    <>
      <NavBar />
      <div className="containerIntroHome">
        <video className="video" autoPlay loop muted>
          <source src={Videoloop} type="video/mp4" />
        </video>
        <div className="containerElements">
          <span className="spanHome">
            <h1 className="titleInicio">
              <img
                src={Logo}
                className="logo-header"
                width="220"
                alt="Logotipo de Cabañas Jorgelinas"
              />
            </h1>
          </span>
          <p className="parrafoHome" data-aos="fade-up" data-aos-duration="600">
            Relax a la orilla de Los Andes
          </p>
          <div class="frame">
            <a href="#Contacto"><button class="custom-btn btn-11">Reservar</button></a>
          </div>
        </div>
      </div>
      <Nosotros/>
      <Galeria/>
      <div className="iconos-valores">
        <h3>Nuestros servicios principales</h3>
        <div className="container-iconos">
          <div>
            <p className="texto-primeroT">
              <img className="imagenC" src={Icono1} alt="Internet WiFi" />
            </p>
            <p className="text-icons">Internet WiFi</p>
          </div>
          <div>
            <p className="texto-primeroT">
              <img className="imagenC" src={Icono2} alt="Antena satelital" />
            </p>
            <p className="text-icons">Televisión satelital</p>
          </div>
          <div>
            <p className="texto-primeroT">
              <img className="imagenC" src={Icono3} alt="compromiso" />
            </p>
            <p className="text-icons">Calefacción</p>
          </div>
          <div>
            <p className="texto-primeroT">
              <img className="imagenC" src={Icono4} alt="tecnología" />
            </p>
            <p className="text-icons">Piscina</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
