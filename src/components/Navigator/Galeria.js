import Cabaña1 from "../../assets/Cabaña 1/1.jpg";
import Cabaña1dos from "../../assets/Cabaña 1/cocina.jpg";
import Cabaña1tres from "../../assets/Cabaña 1/cama.jpg";
import Cabaña1cuatro from "../../assets/Cabaña 1/cama2.jpg";
import Cabaña1cinco from "../../assets/Cabaña 1/comedor.jpg";
import Cabaña1seis from "../../assets/Cabaña 1/garage.jpg";
import Cabaña2 from "../../assets/Cabaña 2/2.jpg";
import Cabaña2dos from "../../assets/Cabaña 2/cocina.jpg";
import Cabaña2tres from "../../assets/Cabaña 2/cama matrimonial.jpg";
import Cabaña2cuatro from "../../assets/Cabaña 2/cuchetas.jpg";
import Cabaña2cinco from "../../assets/Cabaña 2/comedor.jpg";
import Cabaña2seis from "../../assets/Cabaña 2/tv.jpg";
import Cabaña3 from "../../assets/Cabaña 3/3.jpg";
import Cabaña3dos from "../../assets/Cabaña 3/cocina.jpg";
import Cabaña3tres from "../../assets/Cabaña 3/cama matrimonial.jpg";
import Cabaña3cuatro from "../../assets/Cabaña 3/camas.jpg";
import Cabaña3cinco from "../../assets/Cabaña 3/patio.jpg";
import Cabaña3seis from "../../assets/Cabaña 3/piscina.jpg";

function Galeria() {
    return (
        <div>
            <h2 className="titleNosotros" id="Galeria" data-aos="fade-down" data-aos-duration="600">Galería de imágenes</h2>
<div class="wrapper">
<h3 className="subtitleCabañas">Cabaña 1</h3>

  <div class="item">
    <div class="polaroid"><img src={Cabaña1} alt="Frente cabaña 1"/>
      <div class="caption">Frente</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña1dos} alt="Cocina, bacha y microondas"/>
      <div class="caption">Cocina</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña1tres} alt="Cama matrimonial"/>
      <div class="caption">Cama matrimonial</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña1cuatro} alt="camas individuales"/>
      <div class="caption">2 Camas individuales</div>
    </div>
  </div>
  
  <div class="item">
    <div class="polaroid"><img src={Cabaña1cinco} alt="Comedor, heladera y TV"/>
      <div class="caption">Comedor</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña1seis} alt="Churrasquera"/>
      <div class="caption">Churrasquera</div>
    </div>
  </div>

  <h3 className="subtitleCabañas">Cabaña 2</h3>

  <div class="item">
    <div class="polaroid"><img src={Cabaña2} alt="Frente cabaña 2"/>
      <div class="caption">Frente</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña2dos} alt="Cocina, heladera y microondas"/>
      <div class="caption">Cocina - Heladera</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña2tres} alt="Cama matrimonial"/>
      <div class="caption">Cama matrimonial</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña2cuatro} alt="Cuchetas cabaña 2"/>
      <div class="caption">Cuchetas varias</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña2cinco} alt="Comedor cabaña 2"/>
      <div class="caption">Comedor</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña2seis} alt="TV"/>
      <div class="caption">TV</div>
    </div>
  </div>

  <h3 className="subtitleCabañas">Cabaña 3</h3>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3} alt="Frente cabaña 3"/>
      <div class="caption">Frente</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3dos} alt="Cocina, termotanque y mesada"/>
      <div class="caption">Cocina</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3tres} alt="Cama matrimonial"/>
      <div class="caption">Cama matrimonial</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3cuatro} alt="Camas individuales"/>
      <div class="caption">Camas</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3cinco} alt="Patio trasero"/>
      <div class="caption">Patio y salida al arroyo</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3seis} alt="Piscina"/>
      <div class="caption">Piscina</div>
    </div>
  </div>

</div>

        </div>
    );
    
}

export default Galeria;