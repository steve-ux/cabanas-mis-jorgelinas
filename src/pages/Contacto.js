import "../form.scss";
import Correo from "../assets/email.png";
import Cellphone from "../assets/cellphone.png";
import Maps from "../assets/map.png";

function Contacto() {
  return (
    <div className="containerContacto">
      <h3 id="Contacto">Consultas y reservas</h3>
      <div className="containerFormulario">
        <div class="container right">
          <div class="left">
            <div class="header">
              <h2 class="animation a1">Te respondemos a la brevedad</h2>
              <h4 class="animation a2">
                * Los siguientes campos son obligatorios. <br></br>
                Tus datos están protegidos.
              </h4>
            </div>
            <form
              class="form"
              action="https://formsubmit.co/exe.universal@gmail.com"
              method="POST"
            >
              <input
                required
                id="full_name"
                name="Nombre"
                type="text"
                class="form-field animation a4"
                placeholder="* Nombre"
              />
              <input
                required
                id="email"
                name="Correo"
                type="email"
                class="form-field animation a3"
                placeholder="* Correo"
              />
              <input
                required
                id="tel"
                name="Teléfono"
                type="tel"
                class="form-field animation a3"
                placeholder="* Teléfono (ejemplo: 2613342095)"
                pattern="[0-9]{10}"
                title="Máximo 10 dígitos sin caracteres: ejemplo 2613342095"
              />
              <textarea
                required
                id="message"
                name="Mensaje"
                type="textarea"
                minLength="10"
                title="Mensaje mínimo de 10 caracteres."
                className="inputMsj"
                class="form-field animation a3"
                placeholder="* Tu consulta"
              />
              <button class="animation a6">ENVIAR</button>
              <input type="hidden" name="_next" value="https://cabañasjorgelinas.com/Enviado" />
              <input
                type="hidden"
                name="_subject"
                value="Nueva consulta desde la web!"
              />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
          <div className="infoContacto">
            <p>
            <a href="mailto:cabanasjorgelinas@yahoo.com.ar">
              <img src={Correo} alt="icono correo" width="40"/> <br></br>{" "}
              
                cabanasjorgelinas@yahoo.com.ar
              </a>
            </p>
            <p>
            <a href="tel:2613342095">
            <img src={Cellphone} alt="icono correo" width="40"/><br></br>2613342095</a>
            </p>
            <p>
            <a
                href="https://g.page/MisJorgelinas?share"
                target="_blank"
                rel="noreferrer"
              >
            <img src={Maps} alt="icono correo" width="40"/><br></br>{" "}
              
                Valle del Sol, Potrerillos (Luján de Cuyo) - Mendoza, Argentina
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mapsContacto">
        <iframe
          title="Mapa a Cabañas Jorgelinas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.3181165640863!2d-69.29346523798944!3d-33.02295147362395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a03faee5408dbb4!2sCaba%C3%B1as%20Mis%20Jorgelinas!5e0!3m2!1ses-419!2sar!4v1656286316118!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacto;
