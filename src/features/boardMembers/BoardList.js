import { Col, Row } from "reactstrap";
import BoardCard from "./BoardCard";
import { selectAllBoard } from "./boardSlice";

const BoardList = ({ setBoardId }) => {
   const boardMembers = selectAllBoard();

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
                        <BoardCard board={board} />
                    </Col>
                );
            })}

        </Row>
    );
};

export default BoardList;