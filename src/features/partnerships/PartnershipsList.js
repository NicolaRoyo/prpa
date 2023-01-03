import { useSelector } from "react-redux";
import { Col } from "reactstrap";
import Partnership from "../partnerships/Partnership";
import { selectAllPartnerships } from "./partnershipsSlice";


const PartnershipsList = () => {
    const partnerships = useSelector(selectAllPartnerships);

    
    return (
        <Col className='mt-4'>
                {partnerships.map((partnership) => {
                    return (
                        <div className='d-flex mb-5' key={partnership.id}>
                            <Partnership partnership={partnership} />
                        </div>
                    );
                })}
        </Col>
    );
};

export default PartnershipsList;