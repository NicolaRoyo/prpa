import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import Partnership from "../partnerships/Partnership";
import { selectAllPartnerships } from "./partnershipsSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const PartnershipsList = () => {
    const partnerships = useSelector(selectAllPartnerships);
    const isLoading = useSelector((state) => state.partnerships.isLoading);
    const errMsg = useSelector((state) => state.partnerships.errMsg);
    
    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
                {partnerships.map((partnership) => {
                    return (
                        <div className='d-flex mb-5' key={partnership.id}>
                            <Partnership partnership={partnership} />
                        </div>
                    );
                })}
            </Row>
        </Col>
    );
};

export default PartnershipsList;