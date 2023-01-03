import Carousel from 'react-bootstrap/Carousel';
import BasketBallGame from '../app/assets/img/basketball-game1.jpg';
import BasketBallGame2 from '../app/assets/img/basketball-game2.jpg';
import HolidayCards from '../app/assets/img/holidaycards.jpg';

function OutreachCarousel() {
    return (
      <Carousel fade className='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BasketBallGame}
            alt="Basketball game with youth"
          />
          <Carousel.Caption>
            <h3>Community Outreach</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BasketBallGame2}
            alt="Basketball game with youth"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={HolidayCards}
            alt="Holiday Cards"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default OutreachCarousel;