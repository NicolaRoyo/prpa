import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import AnimatedEventOutreachDetail from '../features/events/AnimatedEventOutreachDetail';
import EventOutreachList from '../features/events/EventOutreachList';
import { selectEventOutreachById } from '../features/events/eventOutreachSlice';

const EventDirectoryPage = () => {

    const [eventOutreachId, setEventOutreachId] = useState(0);
    const selectedEventOutreach = useSelector(selectEventOutreachById(eventOutreachId));

    return (
        <Container>
            <SubHeader current='Event Directory' />
                <Row>
                    <Col sm='5' md='7'>
                        <EventOutreachList setEventOutreachId={setEventOutreachId} />
                    </Col>
                    <Col sm='7' md='5'>
                        <AnimatedEventOutreachDetail eventOutreach={selectedEventOutreach} />
                    </Col>
                </Row>
        </Container>
    );
};

export default EventDirectoryPage;