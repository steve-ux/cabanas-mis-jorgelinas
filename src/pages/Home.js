import NavBar from "../components/Navigator/Navbar";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Footer from "../components/Footer";
import Galeria from "../components/Navigator/Galeria";
import Videoloop from "../assets/Potrerillos.mp4";
import Logo from "../assets/Mis-Jorgelinas-logo-transparente.png";
import Icono1 from "../assets/wifi.png";
import Icono2 from "../assets/antena.png";
import Icono3 from "../assets/calefaccion.png";
import Icono4 from "../assets/piscina.png";
import Icono5 from "../assets/info.png";
import Cabaña3 from "../assets/cordondelplata.jpg";
import Cabaña3dos from "../assets/tunelcacheuta.jpg";
import Cabaña3tres from "../assets/penitentes.JPG";
import Cabaña3cuatro from "../assets/Cabaña 2/arroyo.jpg";
import Cabaña3cinco from "../assets/vallecitos.jpg";
import Cabaña3seis from "../assets/dique.jpg";

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
                width="320"
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
        <h3 data-aos="fade-up" data-aos-duration="600">Nuestros servicios principales</h3>
        <div className="container-iconos">
          <div data-aos="fade-up" data-aos-duration="900">
            <p className="texto-primeroT">
              <img className="imagenC" src={Icono1} alt="Internet WiFi" />
            </p>
            <p className="text-icons">Internet WiFi</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="900">
            <p className="texto-primeroT">
              <img className="imagenC" src={Icono2} alt="Antena satelital" />
            </p>
            <p className="text-icons">Televisión satelital</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="900">
            <p className="texto-primeroT">
              <img className="imagenC" src={Icono3} alt="Termostáto" />
            </p>
            <p className="text-icons">Calefacción</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="900">
            <p className="texto-primeroT">
              <img className="imagenC" src={Icono4} alt="Hombre en la piscina" />
            </p>
            <p className="text-icons">Piscina</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="900">
            <p className="texto-primeroT">
              <img className="imagenC" src={Icono5} alt="información turística" />
            </p>
            <p className="text-icons">Info turística</p>
          </div>
        </div>
        <div class="frame">
            <a href="https://api.whatsapp.com/send?phone=5492613342095&text=Hola!%20Visité%20su%20web%20y%20quisiera%20conocer%20más%20sobre%20sus%20cabañas" target="_blank" rel="noreferrer"><button class="custom-btn btn-12">WhatsApp</button></a>
          </div>
      </div>
      <h3 className="subtitleCabañas">Lugares de interés</h3>
      <div class="wrapper">
  <div class="item">
    <div class="polaroid"><img src={Cabaña3} alt="Cordón del Plata"/>
      <div class="caption">Cordón del Plata</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3dos} alt="Túnel de Cacheuta"/>
      <div class="caption">Túnel de Cacheuta</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3tres} alt="Ski Penitentes"/>
      <div class="caption">Centro de esquí Penitentes</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3cuatro} alt="Arroyo Las Mulas"/>
      <div class="caption">Arroyo Las Mulas</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3cinco} alt="Vallecitos"/>
      <div class="caption">Vallecitos</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3seis} alt="Dique Potrerillos"/>
      <div class="caption">Dique Potrerillos</div>
    </div>
  </div>
  </div>
  <br></br>
      <Contacto/>
      <Footer/>
    </>
  );
}

export default Home;
