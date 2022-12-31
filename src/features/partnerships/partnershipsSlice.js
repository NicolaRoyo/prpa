
import { PARTNERSHIPS } from '../../app/shared/PARTNERSHIPS';
// import { baseUrl } from '../../app/shared/baseUrl';
// import { mapImageURL } from '../../utils/mapImageURL';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const selectAllPartnerships = () => {
    return PARTNERSHIPS;
};

export const selectPartnershipsById = (id) => {
    return PARTNERSHIPS.find((partnerships) => partnerships.id === id);
};


// export const fetchPartnerships = createAsyncThunk(
//     'partnerships/fetchPartnerships',
//     async () => {
//         const response = await fetch(baseUrl + 'partnerships');
//         if (!response.ok) {
//             return Promise.reject('Unable to fetch, status: ' + response.status);
//         }
//         const data = await response.json();
//         return data;
//     }
// );

// const initialState = {
//     partnersArray: [],
//     isLoading: true,
//     errMsg: ''
// };

// const partnershipsSlice = createSlice({
//     name: 'partnerships',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [fetchPartnerships.pending]: (state) => {
//             state.isLoading = true;
//         },
//         [fetchPartnerships.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.errMsg = '';
//             state.partnershipsArray = mapImageURL(action.payload);
//         },
//         [fetchPartnerships.rejected]: (state, action) => {
//             state.isLoading = false;
//             state.errMsg = action.error ? action.error.message : 'Fetch failed';
//         }
//     }
// });

// export const partnershipsReducer = partnershipsSlice.reducer;

// export const selectAllPartnerships = (state) => {
//    return state.partnerships.partnershipsArray; 
// };

// export const selectFeaturedPartnerships = (state) => {
//     return {
//         featuredItem: state.partnerships.partnershipsArray.find(
//             (partnerships) => partnerships.featured
//         ),
//         isLoading: state.partnerships.isLoading,
//         errMsg: state.partnerships.errMsg
//     };
// };