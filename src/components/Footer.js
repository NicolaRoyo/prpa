import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col 
                        xs={{ 
                            size: 4, 
                            offset: 1 
                        }} 
                        sm='3'
                    >
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/directory'>Event Directory</Link>
                            </li>
                            <li>
                                <Link to='/board_members'>Board Members</Link>
                            </li>
                            <li>
                                <Link to='/partnerships'>Partnerships</Link>
                            </li>
                            <li>
                                <Link to='/news'>News</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col 
                        xs='6' 
                        sm='3' 
                        className='text-center'
                    >
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='https://twitter.com/prpachicago/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                    </Col>
                    <Col 
                        sm='4' 
                        className='text-center'
                    >
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+17738887176'
                        >
                            <i className='fa fa-phone fa-lg' /> 1(773)888-7176
                        </a>
                        <br />
                    
                            <i className='fa fa-envelope fa-lg' /> 
                            <br />
                            Puerto Rican Police Association
                            <br />
                                4321 W Armitage Ave 
                                <br />
                                ​Suite 102   
                                <br />
                                Chicago  IL 60639
                    </Col>  
                </Row>
            </Container>

        </footer>
    )

};

export default Footer; 