import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import AnimatedOutreachCard from "./AnimatedOutreachCard";
import { selectAllOutreach } from "./outreachSlice";

const OutreachList = ({ setOutreachId }) => {
   const outreachEvents = useSelector(selectAllOutreach);
   
    return (
        <Row className='ms-auto'>
            {outreachEvents.map((outreach) => {
                return (
                    <Col
                        md='5' 
                        className='m-4' 
                        key={outreach.id}
                        onClick={() => setOutreachId(outreach.id)}
                    >
                        <AnimatedOutreachCard outreach={outreach} />
                    </Col>
                );
            })}

        </Row>
    );
};

export default OutreachList;