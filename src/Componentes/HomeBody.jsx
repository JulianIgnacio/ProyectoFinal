import Carousel from 'react-bootstrap/Carousel';
import './HomeBody.css';
import Frutos from './img/Frutos-secos.png';
import Pan from './img/Pan-con-masa-madre.jpg';
import Lechuga from './img/Lechuga-mantecosa.jpg';

const HomeBody = () => {
    return (
        <main>
            <section>
                <h1>La Exclusiva</h1>
            </section>
            <section>
                <Carousel className='primer slider'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Lechuga}
                        alt=""
                        />
                        <Carousel.Caption>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Pan}
                                alt=""
                                />
                                <Carousel.Caption>
                                    </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={Frutos}
                                        alt=""
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                        </Carousel.Item>
                                        </Carousel>
            </section>
            <br />
        </main>
    );
}

export default HomeBody;