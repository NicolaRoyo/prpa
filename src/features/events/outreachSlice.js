import { OUTREACH } from "../../app/shared/OUTREACH";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    outreachArray: OUTREACH
};

const outreachSlice =createSlice({
    name: 'outreach',
    initialState
});

export const outreachReducer = outreachSlice.reducer;

export const selectAllOutreach = (state) => {
    return state.outreach.outreachArray;
};

export const selectOutreachById = (id) => (state) => {
    return state.outreach.outreachArray.find(
        (outreach) => outreach.id === parseInt(id)
    );
};



