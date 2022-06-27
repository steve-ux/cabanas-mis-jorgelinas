import NavBar from "../components/Navigator/Navbar";
import Nosotros from "./Nosotros";
import Galeria from "../components/Navigator/Galeria";
import Videoloop from "../assets/Potrerillos.mp4";
import Logo from "../assets/Logo.png";

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
    </>
  );
}

export default Home;
