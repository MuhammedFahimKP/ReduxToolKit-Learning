import { configureStore } from "@reduxjs/toolkit" ;
import reserVationSliceReducer from "../features/reserVationSlice"
import customerSliceReducer from "../features/customerSlice"

export const store = configureStore({

    reducer : {
        reservations:reserVationSliceReducer,
        customers:customerSliceReducer
    
    },
    
})


export type RootState = ReturnType <typeof store.getState>;
export type AppDispact = typeof store.dispatch;  

