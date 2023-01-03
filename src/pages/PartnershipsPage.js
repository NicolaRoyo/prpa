import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import PartnershipsList from '../features/partnerships/PartnershipsList';
import { selectPartnershipsById } from '../features/partnerships/partnershipsSlice';
import AnimatedPartnershipsDetail from '../features/partnerships/PartnershipsDetail';
import SubHeader from '../components/SubHeader';

const PartnershipsPage = () => {

    const [partnershipsId, setPartnershipsId] = useState(0);
    const selectedPartnerships = useSelector(selectPartnershipsById(partnershipsId));

    return (
        <Container>
            <SubHeader current='Partnerships' />
            <Row>
                <Col >
                    <PartnershipsList setPartnershipsId={setPartnershipsId} />
                </Col>
                <Col >
                    <AnimatedPartnershipsDetail partnerships={selectedPartnerships} />
                </Col>
            </Row>

        </Container>
    );
};

export default PartnershipsPage;