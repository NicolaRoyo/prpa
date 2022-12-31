import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import BoardDetail from '../features/boardMembers/BoardDetail';
import BoardList from '../features/boardMembers/BoardList';
import { selectBoardById } from '../features/boardMembers/boardSlice';

const BoardMembersPage = () => {

    const [boardId, setBoardId] = useState(0);
    const selectedBoard = selectBoardById(boardId);

    return (
        <Container>
            <SubHeader current='Board Members' />
                <Row>
                    <Col sm='6'md='8' >
                        <BoardList setBoardId={setBoardId} />
                    </Col>
                    <Col sm='6' md='4' >
                        <BoardDetail board={selectedBoard} />
                    </Col>
                </Row>
        </Container>
    );
};

export default BoardMembersPage;