import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProductosBody.css'
import Frutos from "../Componentes/img/Frutos-secos.png"
import Semillas from "../Componentes/img/Semillas.jpg"
import Mix from "../Componentes/img/Mix de semillas.png"


const SemilleriaBody = () => {
    return(
        <main>
        <h1>FRUTOS SECOS Y HORTALIZAS </h1>
        <section>
        <>
      <Card>
        <Card.Img variant="top" src={Frutos} />
        <Card.Body>
        <Card.Title>
            Frutos secos
          </Card.Title>
          <Card.Text>
            2000$
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
        <Card.Title>
            Semillas
          </Card.Title>
          <Card.Text>
            1500$
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={Semillas} />
      </Card>
    </>
    <br />
    <Card className="bg-dark text-dark">
      <Card.Img src={Mix} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Mix de Semillas</Card.Title>
        <Card.Text>
          2500$
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

export default SemilleriaBody;