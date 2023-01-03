import Carousel from 'react-bootstrap/Carousel';
import FallenOfficer from '../app/assets/img/fallenOfficerJimenez.jpg';
import InjuredOfficers from '../app/assets/img/injuredOfficers.jpg';
import LogoBanner from '../app/assets/img/banner.jpg';

function GalaCarousel() {
    return (
      <Carousel fade className='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FallenOfficer}
            alt="Fallen Officer Jimenez"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={InjuredOfficers}
            alt="Officers injured in the line of duty"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={LogoBanner}
            alt="PRPA Logo on a banner"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default GalaCarousel;