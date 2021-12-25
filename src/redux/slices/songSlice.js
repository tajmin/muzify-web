import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
    name: 'song',
    initialState: {
        myPlaylist: []
    },
    reducers: {
        addToPlayList: (state, action) => {
            state.myPlaylist.push(action.payload)

        },
        removeFromPlayList: (state, { payload }) => {
            state.myPlaylist = state.myPlaylist.filter(song => song._id !== payload._id)
        }
    },
});

export const { addToPlayList, removeFromPlayList } = songSlice.actions;

export default songSlice.reducer;