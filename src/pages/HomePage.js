import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import OutreachCarousel from '../components/Carousel';
const HomePage = () => {
    return (
    <Container>
        <SubHeader current='Home' />
            <OutreachCarousel /> 
    </Container>

    );
};

export default HomePage;