import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Customer } from "../types"


interface CustomerState {
    value: Customer[]
}


interface AddFoodToCustomerPayload {
    food:string
    id:string
}


const initialState: CustomerState = {
    value: []
}


export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
      addCustomer : (state,action:PayloadAction<Customer>) => {
        state.value.push(action.payload)

      },
      addFoodToCustomer : (state, action:PayloadAction<AddFoodToCustomerPayload>) => {
        state.value.forEach((customer => {

            if (customer.id === action.payload.id){
                customer.food.push(action.payload.food)

            }
        } ))
      }
    }  

})



export const {  addCustomer,addFoodToCustomer } = customerSlice.actions


export default customerSlice.reducer 
