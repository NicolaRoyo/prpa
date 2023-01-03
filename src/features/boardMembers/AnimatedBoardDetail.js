import { Card, CardImg, CardText, CardBody, Col, CardSubtitle } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedBoardDetail = ({ board }) => {
    const { image, name, description  } = board; 
    const [toggle, setToggle ] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <Col md='11' className='m-1'>
        {/* <Col md='5' className='m-4'> */}
            <animated.div style={animatedStyle}>
                <Card>
                    <CardImg  src={image} alt={name} />
                    <CardBody className='text-center'>
                        <CardSubtitle className='animated-board-detail' >{name}</CardSubtitle>
                        <CardText> {description} </CardText>
                    </CardBody>
                </Card>
            </animated.div>
        </Col>
      
    );
};
 
export default AnimatedBoardDetail;