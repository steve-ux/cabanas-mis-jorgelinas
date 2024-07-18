import LogoFacebook from "../assets/facebook.png";
import LogoInstagram from "../assets/Instagram.png";
import LogoWhatsApp from "../assets/whatsapp.png";

function Footer() {
    return (
        <div>
        <footer>
          <div className="footerContainer">
          <div className="containerFooter">
          <a href="https://api.whatsapp.com/send?phone=5492613342095&text=Hola!%20Visité%20su%20web%20y%20quisiera%20conocer%20más%20sobre%20sus%20cabañas" target="_blank" rel="noreferrer"><img src={LogoWhatsApp} width="56" alt="Logo WhatsApp Cabañas Mis Jorgelinas" className="logoWts"/></a>
              <a href="https://www.facebook.com/MisJorgelinas/" target="_blank" rel="noreferrer"><img src={LogoFacebook} width="20" alt="Logo Facebook Cabañas Mis Jorgelinas" className="logoFb"/></a>
              <a href="https://www.instagram.com/cabanasjorgelinas/" target="_blank" rel="noreferrer"><img src={LogoInstagram} width="60" alt="Logo Instagram Cabañas Mis Jorgelinas" className="logoIg"/></a>
              
          </div>
              <p className="text-footer">Cabañas Mis Jorgelinas © <span id="get-current-year">{new Date().getFullYear()}</span> | Mendoza, AR</p>
              <p className="text-footer2">Web creada por <span><a href="https://ekoddex.com/" target="_blank" rel="noreferrer" className="firma">eKoddex</a></span></p>
          </div>
        </footer>

        </div>
    );
    
}

export default Footer;
