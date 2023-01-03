import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle } from 'reactstrap';

const BoardCard = ({board}) => {
    const { image, name, position } = board;
    
    return (
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay className="
                board-img-overlay 
                d-flex 
                flex-column 
                justify-content-end
            ">
                <CardTitle className='board-card-title text-center'>{name}</CardTitle>
                <CardSubtitle className='board-card-subtitle text-center'>{position}</CardSubtitle>
            </CardImgOverlay>
        </Card>
    );
};

export default BoardCard;
