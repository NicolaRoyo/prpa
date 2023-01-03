import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import BoardDetail from '../features/boardMembers/AnimatedBoardDetail';
import BoardList from '../features/boardMembers/BoardList';
import { selectBoardById } from '../features/boardMembers/boardSlice';

const BoardMembersPage = () => {

    const [boardId, setBoardId] = useState(0);
    const selectedBoard = useSelector(selectBoardById(boardId));

    return (
        <Container>
            <SubHeader current='Board Members' />
                <Row >
                    <Col sm='5' md='7'  >
                        <BoardList setBoardId={setBoardId} />
                    </Col>
                    <Col  sm='7' md='5' >
                        <BoardDetail board={selectedBoard} />
                    </Col>
                </Row>
        </Container>
    );
};

export default BoardMembersPage;