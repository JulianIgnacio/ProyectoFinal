import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-primary bg-litext-light">
<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div class="me-5 d-none d-lg-block">
    <h6>Siganos en nuestras redes sociales:</h6>
    </div>

    <div>
      <a href="https://es-la.facebook.com" className="me-4 text-reset">
      <AiFillFacebook/>
      </a>
      <a href="https://www.instagram.com" className="me-4 text-reset">
      <AiFillInstagram/>
      </a>
      <a href="https://twitter.com" class="me-4 text-reset">
      <BsTwitter/>
      </a>
    </div>

  </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>La Exclusiva
                </h6>
                <p>
                  <a href="Principal.html" className="text-reset">Inicio</a>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Productos
                </h6>
                <p>
                  <a href="Verduras.html" className="text-reset">Productos Genrales</a>
                </p>
                <p>
                  <a href="Verduras.html" className="text-reset">Verduleria</a>
                </p>
                <p>
                  <a href="Semillas.html" className="text-reset">Semilleria</a>
                </p>
                <p>
                  <a href="Pan.html" className="text-reset">Pananaderia</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                    Quienes somos
                </h6>
                <p>
                  <a href="Pagina quienes somos.html" className="text-reset">Quienes somos</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <a href="Contacto.html" class="text-reset">Contactenos</a>
              </div>
            </div>

          </div>
        </section>
      </footer>
    );
} 
export default Footer;