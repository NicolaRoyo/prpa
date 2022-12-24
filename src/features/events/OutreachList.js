import { Col, Row } from "reactstrap";
import OutreachCard from "./OutreachCard";
import { selectAllOutreach } from "./outreachSlice";

const OutreachList = () => {
    const outreachEvents = selectAllOutreach();

    return (
        <Row className='ms-auto'>
            {outreachEvents.map((outreach) => {
                return (
                    <Col md="5" className="m-4" key={outreach.id}>
                    <OutreachCard outreach={outreach} />
                </Col>
                );
            })}
        </Row>
    );
};

export default OutreachList;