import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import EventOutreachCarousel from '../components/EventOutreachCarousel';
import GalaCarousel from '../components/GalaCarousel';
import NewsSignupForm from '../components/NewsSignupForm';

const HomePage = () => {
    return (
    <Container>
        <SubHeader current='Home' />
            <EventOutreachCarousel /> 
            <GalaCarousel />
            <NewsSignupForm />
    </Container>

    );
};

export default HomePage;