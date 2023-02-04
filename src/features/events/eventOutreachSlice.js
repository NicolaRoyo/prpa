import { EVENTOUTREACH } from "../../app/shared/EVENTOUTREACH";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    eventOutreachArray: EVENTOUTREACH
};

const eventOutreachSlice =createSlice({
    name: 'eventOutreach',
    initialState
});

export const eventOutreachReducer = eventOutreachSlice.reducer;

export const selectAllEventOutreach = (state) => {
    return state.eventOutreach.eventOutreachArray;
};

export const selectEventOutreachById = (id) => (state) => {
    return state.eventOutreach.eventOutreachArray.find(
        (eventOutreach) => eventOutreach.id === parseInt(id)
    );
};



