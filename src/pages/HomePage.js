import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import OutreachCarousel from '../components/Carousel';
import NewsSignupForm from '../components/NewsSignupForm';

const HomePage = () => {
    return (
    <Container>
        <SubHeader current='Home' />
            <OutreachCarousel /> 

            <NewsSignupForm />
    </Container>

    );
};

export default HomePage;