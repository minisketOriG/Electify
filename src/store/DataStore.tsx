
import { configureStore } from '@reduxjs/toolkit'
import contenderVarSlice  from './DataSlides/ContenderVarSlide';
import eventpageSlide  from './DataSlides/EventPageStatesSlide';
import categorypageSlide  from './DataSlides/CategoryPageStatesSlide';

const store = configureStore({
     reducer: {
         contenderVariables: contenderVarSlice,
         eventpage: eventpageSlide,
         categorypage: categorypageSlide
     }
});

export default store;