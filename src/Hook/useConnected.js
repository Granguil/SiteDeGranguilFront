import { connexion } from "../features/Slices/UserSlice";
import * as $ from 'jquery'

const useConnected=(dispatch)=>{
    
    const verifConnexion=()=>{
        return new Promise((resolve)=>{
            $.get("/Connexion/PseudoSession",function(data){
                resolve(data);
            });
        })
    }
    const connexionTentative=setInterval(()=>{
        verifConnexion().then((data)=>{
            if(data!=="nc"){
                alert(data);
            dispatch(connexion({pseudo:data}));
            clearInterval(connexionTentative);
            }
        })
    },1000);
    
}
export default useConnected;