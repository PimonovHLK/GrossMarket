import { Carousel } from 'react-bootstrap';
import Banner1 from '../../resources/img/Banner1.png';
import Banner2 from '../../resources/img/Banner2.png';

const AppCarouselBaner = () => {
            
    return (       
        <Carousel>
            <Carousel.Item>
            <img
                className="d-block"
                src={Banner1}
                alt="First slide"
            />
                <Carousel.Caption>
                    <h3>Пекарь</h3>
                    <p>Валентин</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block"
                src={Banner2}
                alt="Second slide"
            />
                <Carousel.Caption>
                    <h3>Ксения</h3>
                    <p>Товаровед</p>
                </Carousel.Caption>
            </Carousel.Item>            
        </Carousel>
        );
}

export default AppCarouselBaner;