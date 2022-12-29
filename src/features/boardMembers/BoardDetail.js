import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const BoardDetail = ({ board }) => {
    const { image, name, description } = board; 

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};
 
export default BoardDetail;