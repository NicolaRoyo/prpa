import { OUTREACH } from "../../app/shared/OUTREACH";
import { Col, Row } from "reactstrap";
import OutreachCard from "./OutreachCard";

const OutreachList = () => {
    return (
        <Row className='ms-auto'>
            {OUTREACH.map((outreach) => {
                return (
                    <Col md="5" className="m-4" key={outreach.id}>
                    <OutreachCard outreach={outreach} />
                </Col>
                );
            })}
        </Row>
    )
};
export default OutreachList;