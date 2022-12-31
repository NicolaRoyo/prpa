import { Card, CardImg, CardImgOverlay, CardTitle, Row, Col, CardSubtitle } from 'reactstrap';

const BoardCard = ({board}) => {
    const { image, name, position } = board;
    
    return (
        <Row>
            <Col md='12'>
          
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay className= 'd-flex flex-column justify-content-end'>
                <CardTitle className="text-center">{name}</CardTitle>
                    <CardSubtitle className='text-center'>{position}</CardSubtitle>
            </CardImgOverlay>
        </Card>
        </Col>
        </Row>
    );
};

export default BoardCard;
