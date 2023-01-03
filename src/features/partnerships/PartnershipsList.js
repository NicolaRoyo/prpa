import { useSelector } from "react-redux";
import { Col } from "reactstrap";
import Partnership from "../partnerships/Partnership";
import { selectAllPartnerships } from "./partnershipsSlice";


const PartnershipsList = (setPartnershipsId) => {
    const partnerships = useSelector(selectAllPartnerships);

    
    return (
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
    );
};
 // 'd-flex mb-5' 
export default PartnershipsList;