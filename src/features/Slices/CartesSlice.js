import {createSlice} from '@reduxjs/toolkit'

export const CartesSlice = createSlice({
    name:"Cartes",
    initialState:{
        liste:[],
        pages:[],
    },
    reducers:{
        ajoutCarte:(state,action)=>{
            state.liste.push(action.payload.carte);
        },
        listePages:(state,action)=>{
            state.pages=action.payload.pages;
        },
        ajoutPage:(state,action)=>{
            if(state.pages.indexOf(action.payload.page)===-1){
                state.pages.add(action.payload.page);
            }
        }
    }
})

export const {ajoutCarte, listePages,ajoutPage} = CartesSlice.actions;

export const selectListes=state=>state.Cartes.liste;
export const selectPages=state=>state.Cartes.pages;

export default CartesSlice.reducer;