import { Card, CardImg, CardText, CardBody, Col, CardSubtitle } from 'reactstrap';

const BoardDetail = ({ board }) => {
    const { image, name, description  } = board; 
    
    return (
        <Col md='11' className='m-1'>
        {/* <Col md='5' className='m-4'> */}
            <Card>
                <CardImg  src={image} alt={name} />
                <CardBody className='text-center'>
                    <CardSubtitle className='board-detail' >{name}</CardSubtitle>
                    <CardText> {description} </CardText>
                </CardBody>
            </Card>
        </Col>
      
    );
};
 
export default BoardDetail;