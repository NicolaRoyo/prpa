
import { Col, Row } from "reactstrap";
import { Partnership } from "../partnerships/Partnership";
import { selectAllPartnerships } from "./partnershipsSlice";


const PartnershipsList = ({ setPartnershipsId }) => {
    const partnerships = selectAllPartnerships();
    
    return (
        <Col className='mt-4'>
            <Row>
                {partnerships.map((partnership) => {
                    return (
                        <div className='d-flex mb-5' key={partnership.id}>
                            <Partnership partnership={partnership} />
                        </div>
                    );
                })}
            </Row>
        </Col>
    // );
};

export default PartnershipsList;