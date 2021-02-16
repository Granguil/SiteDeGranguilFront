import {createSlice} from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name:"User",
    initialState:{
        connected:false,
        pseudo:"",
        displayPage:"Accueil",
    },
    reducers:{
        connexion:(state,action)=>{
            state.connected=true;
            state.pseudo=action.payload.pseudo;
            state.displayPage="Manager"
        },
        deconnexion:(state)=>{
            state.connected=false;
            state.pseudo="";
            state.displayPage="Accueil";
        },
        changePage:(state,action)=>{
            state.displayPage=action.payload.pageName;
        }
    }
})

export const {connexion, deconnexion, changePage} = UserSlice.actions;

export const isConnected=state=>state.User.connected;
export const selectPseudo=state=>state.User.pseudo;
export const selectPage=state=>state.User.displayPage;

export default UserSlice.reducer;