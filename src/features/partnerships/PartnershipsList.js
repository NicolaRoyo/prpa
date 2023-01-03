import { useState, useEffect } from 'react';
import { useSpring, animated  } from 'react-spring';
import { useSelector } from "react-redux";
import { Col } from "reactstrap";
import Partnership from "../partnerships/Partnership";
import { selectAllPartnerships } from "./partnershipsSlice";


const PartnershipsList = (setPartnershipsId) => {
    const partnerships = useSelector(selectAllPartnerships);
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
            <Col className='mt-4'>
                    {partnerships.map((partnership) => {
                        return (
                            <Col 
                                md='8' 
                                className='m-4' 
                                key={partnership.id}
                                onClick={() => setPartnershipsId(partnership.id)}
                            >

                            <Partnership partnership={partnership} />
                            </Col>
                        );
                    })}
            </Col>
        </animated.div>  
    );
};
 // 'd-flex mb-5' 
export default PartnershipsList;