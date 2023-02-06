import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isDark: localStorage.getItem("mode") === "dark",
    mode: localStorage.getItem("mode") === "dark" ? "dark" : "light",
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDark: (state) => {
            state.isDark = true;
            state.mode = "dark";
            localStorage.setItem("mode", "dark")
        },
        setLight: (state) => {
            state.isDark = false;
            state.mode = "light";
            localStorage.setItem("mode", "light")
        }
    },
})

export const {setDark, setLight} = themeSlice.actions
export default themeSlice.reducer