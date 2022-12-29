import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { PARTNERS } from '../../app/shared/PARTNERS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchPartnerships = createAsyncThunk(
    'partnerships/fetchPartnerships',
    async () => {
        const response = await fetch(baseUrl + 'partnerships');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    partnersArray: [],
    isLoading: true,
    errMsg: ''
};

const partnershipsSlice = createSlice({
    name: 'partnerships',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPartnerships.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPartnerships.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.partnershipsArray = mapImageURL(action.payload);
        },
        [fetchPartnerships.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const partnershipsReducer = partnershipsSlice.reducer;

export const selectAllPartnerships = (state) => {
   return state.partnerships.partnershipsArray; 
};

// export const selectFeaturedPartner = (state) => {
//     return {
//         featuredItem: state.partners.partnersArray.find(
//             (partner) => partner.featured
//         ),
//         isLoading: state.partners.isLoading,
//         errMsg: state.partners.errMsg
//     };
// };