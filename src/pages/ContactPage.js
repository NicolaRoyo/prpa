import { Container, Col, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";
import MessageForm from "../components/MessageForm";


const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact PRPA Chicago'/>
                <Row className='row-content align-items-center'>
                    <Col>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+17738887176'
                        >
                        <i className='fa fa-phone' /> 773. 888. 7176
                        
                        </a>
                        <br />
                        {/* <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:fakeemail@fakeemail.co'
                        >
                            <i className='fa fa-envelope-o' /> campsites@nucamp.co
                        </a> */}
                    </Col>
                    <Col sm='4'>
                        <h5>Mailing Address</h5>
                        <address>
                        Puerto Rican Police Association
                            <br />
                            4321 W Armitage Ave 
                            <br />
                            Suite 102  
                            <br />
                            Chicago, IL 60639
                            <br />
                    
                        </address>
                    </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h2 className="message">Send Us A Message</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    <MessageForm />
                </Col>
            </Row>
        </Container>
    );

};

export default ContactPage;