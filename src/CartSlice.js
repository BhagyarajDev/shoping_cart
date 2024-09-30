import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        Addtocart: (state, action) => {
            let isExisteng = state.items.find(item => item.id === action.payload.id)
            if (!isExisteng) {
                state.items = [...state.items, { ...action.payload, productQuantity: 1 }]
            } else {
                state.items = state.items.map((a) => {
                    if (a.id === action.payload.id) {
                        return { ...a, productQuantity: a.productQuantity + 1 };
                    } else {
                        return a;
                    }
                })

            }

        },
        RemoveCart:(state,action)=>{

           state.items= state.items.filter(item => action.payload !== item.id) 
            
        },
        incrementProductQuantity:(state,action)=>{
            state.items = state.items.map((item)=>{
                if(action.payload == item.id){
                    item.productQuantity+=1
                }
                return item
            })

        },
        DecrementProductQuantity:(state,action)=>{
            state.items = state.items.map(item => {
                if (item.id === action.payload) {
                    item.productQuantity--;
                }
                return item;
            }).filter(item => item.productQuantity !== 0);

        }

    }


})


export const { Addtocart ,RemoveCart,incrementProductQuantity,DecrementProductQuantity} = cartSlice.actions

export default cartSlice.reducer