import { useState, useEffect } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { useSpring, animated  } from 'react-spring';

const AnimatedOutreachCard = ({outreach}) => {
    const { image, name } = outreach;
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
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </animated.div>
    );
};

export default AnimatedOutreachCard;
