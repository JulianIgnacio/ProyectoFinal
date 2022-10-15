import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProductosBody.css'
import MasaMadre from "../Componentes/img/Pan-con-masa-madre.jpg"
import Integral from "../Componentes/img/Integral-pan.jpg"
import Centeno from "../Componentes/img/Pan-Centeno.jpg"



const PanaderiaBody = () => {
    return(
        <main>
        <h1>Panaderia </h1>
        <section>
        <>
      <Card>
        <Card.Img variant="top" src={MasaMadre} />
        <Card.Body>
        <Card.Title>
            Pan de masa madre
          </Card.Title>
          <Card.Text>
            50$
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
        <Card.Title>
            Pan Integral
          </Card.Title>
          <Card.Text>
            100$
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={Integral} />
      </Card>
    </>
    <br />
    <Card className="bg-dark text-white">
      <Card.Img src={Centeno} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Pan de Centeno</Card.Title>
        <Card.Text>
          150$
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </section>
    <br />
    <div>
        <p>
            Si desea adquirir uno de estos productos presione aqui
        </p>
        <Button variant="primary" href='/Carrito'>Adquirir Producto</Button>
    </div>
    <br />
        </main>
    );
}

export default PanaderiaBody;