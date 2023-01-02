import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import OutreachDetail from '../features/events/OutreachDetail';
import OutreachList from '../features/events/OutreachList';
import { selectOutreachById } from '../features/events/outreachSlice';

const EventsDirectoryPage = () => {

    const [outreachId, setOutreachId] = useState(0);
    const selectedOutreach = selectOutreachById(outreachId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <OutreachList setOutreachId={setOutreachId} />
                </Col>
                <Col sm='7' md='5'>
                    <OutreachDetail outreach={selectedOutreach} />
                </Col>
            </Row>

        </Container>
    );
};

export default EventsDirectoryPage;