import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


const AnimatedOutreachDetail = ({ outreach }) => {
    const { image, name, description } = outreach; 
    const [toggle, setToggle ] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 300 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <Col md='12' className='m-4'>
            <animated.div style={animatedStyle}>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
            </animated.div>
        </Col>
    );
};
 
export default AnimatedOutreachDetail;