import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import OutreachCarousel from '../components/OutReachCarousel';
import GalaCarousel from '../components/GalaCarousel';
import NewsSignupForm from '../components/NewsSignupForm';

const HomePage = () => {
    return (
    <Container>
        <SubHeader current='Home' />
            <OutreachCarousel /> 
            <GalaCarousel />
            <NewsSignupForm />
    </Container>

    );
};

export default HomePage;