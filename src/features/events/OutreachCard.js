import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const OutreachCard = ({outreach}) => {
    const { image, name } = outreach;
    
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

export default OutreachCard;
