import Carousel from 'react-bootstrap/Carousel';
const HomeBody = () => {
    return (
        <main>
            <section>
                <h1>La Exclusiva</h1>
            </section>
            <section>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://repositorio.iica.int/bitstream/handle/11324/9890/La%20hidropon%C3%ADa%2C%20una%20gota%20de%20esperanza..jpg?sequence=1&isAllowed=y"
                        alt=""
                        />
                        <Carousel.Caption>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://saboresymomentos.es/wp-content/uploads/2021/01/Pan-con-masa-madre-500x500.jpg"
                                alt=""
                                />
                                <Carousel.Caption>
                                    </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="C:\Users\monte\Documents\Imagenes pagina\Frutos-secos.jpg"
                                        alt=""
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                        </Carousel.Item>
                                        </Carousel>
            </section>
        </main>
    );
}

export default HomeBody;