import React from 'react';
import "./quienessomos.css";
import Flor  from "../Componentes/img/Foto-flor.jpg";
import Ivan  from "../Componentes/img/Foto-ivan.jpg";
import Julian from "../Componentes/img/Foto-julianjpg.jpg";









function QuienesSomosBody() {
  return (
    <>

    <div className="a" id="nosotros">
    <div >
      <h1>Sobre Nosotros</h1>
      <p>
        Como institucion nuestro objetivo es brindar variedad de productos 
        y abastecer a nuestros clientes 
        de manera mas sencilla y accesible 
      </p>
    </div>
  </div>

  <div class="row text-center">
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
      <img src={ Ivan } alt="Logotipo" className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">Ivan Yivcoff</h5>
      <h6 class="text-primary mb-3">Gerente Gral</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>La persona al mando de la empresa
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
      <img src={ Julian} alt="Logotipo" className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">Julian Montenegro</h5>
      <h6 class="text-primary mb-3">Software Developer</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>Nuestro experto en Tecnologia
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-0">
      <div class="d-flex justify-content-center mb-4">
      <img src={ Flor} alt="Logotipo" className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">Florencia Delgado</h5>
      <h6 class="text-primary mb-3">Marketing Specialist</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i> Nuestra especialista en Marketing
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
  </div>
  <br />

  

</>
  );
}

export default QuienesSomosBody;