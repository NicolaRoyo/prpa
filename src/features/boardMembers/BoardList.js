import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import AnimatedBoardCard from "./AnimatedBoardCard";
import { selectAllBoard } from "./boardSlice";

const BoardList = ({ setBoardId }) => {
   const boardMembers = useSelector(selectAllBoard);
   console.log('board:', board);
   
    return (
        <Row className='ms-auto' >
            {boardMembers.map((board) => {
                return (
                    <Col
                        md='4' 
                        className='m-4' 
                        key={board.id}
                        onClick={() => setBoardId(board.id)}
                    >
                        <AnimatedBoardCard board={board} />
                    </Col>
                );
            })}

        </Row>
    );
};

export default BoardList;