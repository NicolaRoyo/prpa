import { Card, CardImg, CardImgOverlay, CardTitle, Row, Col, CardSubtitle } from 'reactstrap';

const BoardCard = ({board}) => {
    const { image, name, position } = board;
    
    return (
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay className= ' board d-flex flex-column justify-content-end'>
                <CardTitle className="board text-center">{name}</CardTitle>
                <CardSubtitle className='board text-center'>{position}</CardSubtitle>
            </CardImgOverlay>
        </Card>
    );
};

export default BoardCard;
