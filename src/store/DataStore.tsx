
import { configureStore } from '@reduxjs/toolkit'
import contenderVarSlice  from './DataSlides/ContenderVarSlide';

const store = configureStore({
     reducer: {
         contenderVariables: contenderVarSlice,
     }
});

export default store;