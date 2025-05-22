
import { createSlice } from '@reduxjs/toolkit'
import { reqtype, vartype } from "@/interfaces/enums"

export const contenderVarSlice = createSlice({
    name: 'contenderVariables',
    initialState: {
        contenderVariables: [
            { id: 1, name: "title", type: vartype.text, requirement: reqtype.default }
        ]
    },
    reducers: {
        addContenderVariable: (state, action) => {
            const { variableName, requirementType, variableType } = action.payload;
            const newVariable = {
                id: state.contenderVariables[state.contenderVariables.length - 1].id + 1,
                name: variableName,
                requirement: requirementType,
                type: variableType
            }

            state.contenderVariables.push(newVariable);
        },
        removeContenderVariable: (state, action) => {
            const id  = action.payload;
            state.contenderVariables = state.contenderVariables.filter(variable => variable.id !== id);
        },
        editContenderVariable: (state, action) => {
            const { id, variableName, requirementType, variableType } = action.payload;
            
            state.contenderVariables.map((variable) =>{
                if(variable.id === id){
                   return {...variable, name: variableName, requirement: requirementType, type: variableType} 
                }else {    
                return variable
              }
            });
          
        }
    }
})

export const { addContenderVariable, removeContenderVariable } = contenderVarSlice.actions

export default contenderVarSlice.reducer