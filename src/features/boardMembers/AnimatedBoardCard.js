import { useState, useEffect } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle } from 'reactstrap';
import { useSpring, animated  } from 'react-spring';

const AnimatedBoardCard = ({board}) => {
    const { image, name, position } = board;
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
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay className="
                    board-img-overlay 
                    d-flex 
                    flex-column 
                    justify-content-end
                ">
                    <CardTitle className='board-card-title text-center'>{name}</CardTitle>
                    <CardSubtitle className='board-card-subtitle text-center'>{position}</CardSubtitle>
                </CardImgOverlay>
            </Card>
        </animated.div>
    );
};

export default AnimatedBoardCard;
