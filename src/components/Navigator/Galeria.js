import Cabaña1 from "../../assets/Cabaña 1/1.jpg";
import Cabaña1dos from "../../assets/Cabaña 1/cocina.jpg";
import Cabaña1tres from "../../assets/Cabaña 1/cama.jpg";
import Cabaña1cuatro from "../../assets/Cabaña 1/cama2.jpg";
import Cabaña1cinco from "../../assets/Cabaña 1/comedor.jpg";
import Cabaña1seis from "../../assets/Cabaña 1/baño.jpg";
import Cabaña2 from "../../assets/Cabaña 2/2.jpg";
import Cabaña3 from "../../assets/Cabaña 3/3.jpg";

function Galeria() {
    return (
        <div>
            <h2 className="titleNosotros" id="Galeria" data-aos="fade-down" data-aos-duration="600">Galería de imágenes</h2>
<div class="wrapper">
<h3 className="subtitleCabañas">Cabaña 1</h3>

  <div class="item">
    <div class="polaroid"><img src={Cabaña1} alt=""/>
      <div class="caption">Frente</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña1dos} alt=""/>
      <div class="caption">Cocina</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña1tres} alt=""/>
      <div class="caption">Cama matrimonial</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña1cuatro} alt=""/>
      <div class="caption">2 Camas individuales</div>
    </div>
  </div>
  
  <div class="item">
    <div class="polaroid"><img src={Cabaña1cinco} alt=""/>
      <div class="caption">Comedor</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src={Cabaña1seis} alt=""/>
      <div class="caption">Baños</div>
    </div>
  </div>

  <h3 className="subtitleCabañas">Cabaña 2</h3>

  <div class="item">
    <div class="polaroid"><img src={Cabaña2} alt=""/>
      <div class="caption">Frente</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" alt=""/>
      <div class="caption">Art</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" alt=""/>
      <div class="caption">Art</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" alt=""/>
      <div class="caption">Art</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" alt=""/>
      <div class="caption">Art</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" alt=""/>
      <div class="caption">Art</div>
    </div>
  </div>

  <h3 className="subtitleCabañas">Cabaña 3</h3>

  <div class="item">
    <div class="polaroid"><img src={Cabaña3} alt=""/>
      <div class="caption">Frente</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" alt=""/>
      <div class="caption">Art</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" alt=""/>
      <div class="caption">Art</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" alt=""/>
      <div class="caption">Art</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" alt=""/>
      <div class="caption">Art</div>
    </div>
  </div>

  <div class="item">
    <div class="polaroid"><img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" alt=""/>
      <div class="caption">Art</div>
    </div>
  </div>

</div>

        </div>
    );
    
}

export default Galeria;