import { createSlice } from "@reduxjs/toolkit";


export const contenderpageSlide = createSlice({
    name: "contenderPageStates",
    initialState: {
        contenderStates: {
            showCreate: false,
            showEdit: false
        }
    },
    reducers: {
        setShowCreate: (state,action) => {
            state.contenderStates.showCreate = action.payload 
        },
        setShowEdit: (state,action) => {
            state.contenderStates.showEdit = action.payload
        }
    }
})


export const { setShowCreate, setShowEdit } = contenderpageSlide.actions 

export default contenderpageSlide.reducer