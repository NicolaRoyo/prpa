import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const OutreachCard = (props) => {
    return (
        <Card>
            <CardImg
                width='100%'
                src={props.outreach.image}
                alt={props.outreach.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.outreach.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default OutreachCard;
