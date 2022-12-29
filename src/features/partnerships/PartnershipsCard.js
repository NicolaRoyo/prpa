import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const PartnershipsCard = ({partnerships}) => {
    const { image, name } = partnerships;
    
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

export default PartnershipsCard;
