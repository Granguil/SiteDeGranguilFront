import {createSlice} from '@reduxjs/toolkit'

export const JeuSlice = createSlice({
    name:"Jeu",
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

export const {ajoutCarte, listePages,ajoutPage} = JeuSlice.actions;

export const selectListes=state=>state.Jeu.liste;
export const selectPages=state=>state.Jeu.pages;

export default JeuSlice.reducer;