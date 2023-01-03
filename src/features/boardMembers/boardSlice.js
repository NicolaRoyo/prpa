import { BOARD } from "../../app/shared/BOARD";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    boardArray: BOARD
};

const boardSlice =createSlice({
    name: 'board',
    initialState
});
export const boardReducer = boardSlice.reducer;

export const selectAllBoard = (state) => {
    return state.board.boardArray;
};

export const selectBoardById = (id) => (state) => {
    return state.board.boardArray.find(
        (board) => board.id === parseInt(id)
    );
};
