import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: { theme: 'light' },
    reducers: {
        toggle(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },

        setTheme(state, {payload: newTheme}) {
            if(newTheme === 'light' || newTheme === 'dark') {
                state.theme = newTheme;
            }
        }
    }
});


export default themeSlice.reducer;

export const {
    toggle, setTheme
} = themeSlice.actions;