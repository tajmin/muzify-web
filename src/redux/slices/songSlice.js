import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllSongs = createAsyncThunk(
    'song/fetchSongs',
    async () => {
        const response = await fetch('https://murmuring-brook-63531.herokuapp.com/songs').then(res => res.json())
        return response;
    }
)

export const songSlice = createSlice({
    name: 'song',
    initialState: {
        myPlaylist: [],
        songs: [],
        isLoading: true
    },
    reducers: {
        addToPlayList: (state, action) => {
            state.myPlaylist.push(action.payload)
        },
        removeFromPlayList: (state, { payload }) => {
            state.myPlaylist = state.myPlaylist.filter(song => song._id !== payload._id)
        },
        clearPlayList: (state, action) => {
            state.myPlaylist = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllSongs.fulfilled, (state, action) => {
            state.songs = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchAllSongs.pending, (state, action) => {
            state.isLoading = true;
        })
    },
});

export const { addToPlayList, removeFromPlayList, clearPlayList } = songSlice.actions;

export default songSlice.reducer;