import * as $ from 'jquery'
import {createToaster}  from './../general/js/toaster'

const useDeconnected=(pseudo)=>{
    $.get("/Connexion/Deconnexion",function(){
        createToaster("Déconnexion !",pseudo+" a bien été déconnecté","left","success");
    })
}

export default useDeconnected