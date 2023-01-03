import { PARTNERSHIPS } from '../../app/shared/PARTNERSHIPS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    partnershipsArray: PARTNERSHIPS
};

const partnershipsSlice =createSlice({
    name: 'partnerships',
    initialState
});

export const partnershipsReducer = partnershipsSlice.reducer;

export const selectAllPartnerships= (state) => {
    return state.partnerships.partnershipsArray;
};
// I will make this a clickable feature 
// export const selectPartnershipsById = (id) => (state) => {
//     return state.partnerships.partnershipsArray.find(
//         (partnerships) => partnerships.id === parseInt(id)
//     );
// };
