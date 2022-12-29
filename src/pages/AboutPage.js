import { Col, Row, Container, Card, CardBody, CardHeader, CardText } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnershipsList from '../features/partnerships/PartnershipsList';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Us'/>
            <Row className='row-content'>
                <Col sm='6'>
                   {/* <h3>The Puerto Rican Police Association (PRPA)</h3> */}
                    <p>
                        <strong>The Puerto Rican Police Association (PRPA) </strong> is a local association of law enforcement officers who are united not only in protection of the community, but also to give back to it in a way that is meaningful and fulfilling to its members.  For more than 20 years, the men and women of the Puerto Rican Police Association have supported Esperanza by brightening the holidays of their students every December.  The PRPA organize a visit from Santa Claus, who arrives bearing gifts and cheer for all of the students Esperanza serves, many of whom are from low-income families, this visit from jolly St. Nick is especially meaningful.
                        "What we do with Esperanza is rewarding, and we are happy to do it," says Chicago Police Department officer Ray Calixto. "Every time we visit Esperanza, we see people learning and growing, and they're so happy.   When we come with Santa and see the excitement on the students faces, that in itself is an accolade for us."

                        Sgt. Waldermar Cruz, president of the PRPA, says that the group's support of Esperanza reflects their commitment on both a personal and professional level. "Some officers have children with special needs," says Sgt Waldermar Cruz. "We understand the challenges that families face, and the hope that Esperanza represents to families." He also cites the need in our community for the services Esperanza provides. "Without Esperanza, families would not have these opportunities.   Students and participants are socializing and developing skills in ways that they wouldn't have the opportunity to do if Esperanza wasn't here for them."

                        Sgt Waldermar Cruz also feels a great personal connection to their visits with Santa. "The rewards are huge," he says. "Esperanza is a wonderful and worthwhile organization, and we love to see firsthand the great work that is being done there.  I could not think of a better way for the officers of the Puerto Rican Police Association to give back to the community in a meaningful way."

                        For continually brightening the holidays of the students and families Esperanza serves, we are proud to present the 2015 Bobby Reyes Tribute Award to the men and women of the Puerto Rican Police Association.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>Mission</h3>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                            The mission of the Puerto Rican Police Association (PRPA) is to bring together law enforcement officers of Hispanic descent in a united effort to foster positive relationships with the communities we serve. We will demonstrate a higher degree of professionalism and integrity in all of our interactions as we strive to remove any obstacles to this partnership. In addition, we are dedicated to supporting, and initiating programs and policies that show our commitment to being of service to those communities.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>

            <Row className='row-content'>
                <Col xs='12'>
                    <h3>Partnership Links</h3>
                </Col>
                    <PartnershipsList />
            </Row>
        </Container>
    )
};

export default AboutPage;