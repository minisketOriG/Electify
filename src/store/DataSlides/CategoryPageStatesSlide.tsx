
import { createSlice } from "@reduxjs/toolkit";

export const categorypageSlide = createSlice({
    name: "categorypageSlide",
    initialState: {
        categoryPageStates: {
            showCreate: false,
            showSettings: false,
            showShare: false
        }
    },
    reducers: {
        setShowCreate: (state, action) => {
            state.categoryPageStates.showCreate = action.payload
        },
        setShowSettings: (state, action) => {
            state.categoryPageStates.showSettings = action.payload
        },
        setShowShare: (state, action) => {
            state.categoryPageStates.showShare = action.payload
        }
    }
})

export const { setShowCreate, setShowSettings, setShowShare } = categorypageSlide.actions
export default categorypageSlide.reducer