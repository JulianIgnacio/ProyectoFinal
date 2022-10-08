import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProductosBody.css'
import Crespa from "../Componentes/img/Lechuga-Crespa.jpg"
import Mantecosacard from "../Componentes/img/Lechuga-mantecosa-card.jpg"
import Cebolla from "../Componentes/img/Cebolla.jpg"


const VerduleriaBody = () => {
    return(
        <main>
        <h1>Verduleria </h1>
        <section>
        <>
      <Card>
        <Card.Img variant="top" src={Crespa} />
        <Card.Body>
          <Card.Title>
            Lechuga Crespa
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
            Lechuga Mantecosa
          </Card.Title>
          <Card.Text>
            100$
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={Mantecosacard} />
      </Card>
    </>
    <br />
    <Card className="bg-dark text-dark">
      <Card.Img src={Cebolla} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title >Cebolla</Card.Title>
        <Card.Text>
          300$
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

export default VerduleriaBody;