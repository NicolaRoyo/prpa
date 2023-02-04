import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import AnimatedEventOutreachCard from "./AnimatedEventOutreachCard";
import { selectAllEventOutreach } from "./eventOutreachSlice";

const EventOutreachList = ({ setEventOutreachId }) => {
   const outreachEvents = useSelector(selectAllEventOutreach);
   
    return (
        <Row className='ms-auto'>
            {outreachEvents.map((eventOutreach) => {
                return (
                    <Col
                        md='5' 
                        className='m-4' 
                        key={eventOutreach.id}
                        onClick={() => setEventOutreachId(eventOutreach.id)}
                    >
                        <AnimatedEventOutreachCard eventOutreach={eventOutreach} />
                    </Col>
                );
            })}

        </Row>
    );
};

export default EventOutreachList;