import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const BoardCard = ({board}) => {
    const { image, name } = board;
    
    return (
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default BoardCard;
