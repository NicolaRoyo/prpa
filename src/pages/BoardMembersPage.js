import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import BoardDetail from '../features/boardMembers/BoardDetail';
import BoardList from '../features/boardMembers/BoardList';
import { selectBoardById } from '../features/boardMembers/boardSlice';

const BoardMembersPage = () => {

    const [boardId, setBoardId] = useState(0);
    const selectedBoard = selectBoardById(boardId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <BoardList setBoardId={setBoardId} />
                </Col>
                <Col sm='7' md='5'>
                    <BoardDetail board={selectedBoard} />
                </Col>
            </Row>

        </Container>
    );
};

export default BoardMembersPage;