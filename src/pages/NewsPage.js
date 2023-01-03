import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
// import Tweets from '../features/news/Tweets';

const NewsPage = () => {
    return (
        <Container>
            <SubHeader current='News' />
            <Container>
    
                <div>
                <a class="twitter-timeline" href="https://twitter.com/PRPAChicago?ref_src=twsrc%5Etfw">Tweets by PRPAChicago</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">ASPIRA of Illinois teaches students to go from Boys to Men and Girls to Women. If you want to make a difference, then come join us at Aspira positively changes the lives of young people. <a href="https://t.co/zSMiTjuv1u">pic.twitter.com/zSMiTjuv1u</a></p>&mdash; PRPA (@PRPAChicago) <a href="https://twitter.com/PRPAChicago/status/1606487906624880642?ref_src=twsrc%5Etfw">December 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
            </Container>
        </Container>
    );
};

export default NewsPage;