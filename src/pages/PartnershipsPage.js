import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PartnershipsList from '../features/partnerships/PartnershipsList';
import { selectPartnershipsById } from '../features/partnerships/partnershipsSlice';
import PartnershipsDetail from '../features/partnerships/PartnershipsDetail';

const PartnershipsPage = () => {

    const [partnershipsId, setPartnershipsId] = useState(0);
    const selectedPartnerships = selectPartnershipsById(partnershipsId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <PartnershipsList setPartnershipsId={setPartnershipsId} />
                </Col>
                <Col sm='7' md='5'>
                    <PartnershipsDetail partnerships={selectedPartnerships} />
                </Col>
            </Row>

        </Container>
    );
};

export default PartnershipsPage;