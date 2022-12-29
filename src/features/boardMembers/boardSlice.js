import { BOARD } from "../../app/shared/BOARD";

export const selectAllBoard = () => {
    return BOARD;
};

export const selectBoardById = (id) => {
    return BOARD.find((board) => board.id === id);
};
