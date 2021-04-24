import { ajoutCarte, listePages } from "../features/Slices/CartesSlice";
import * as $ from 'jquery'

const useCartesList=(dispatch)=>{
    
    const addCartes=()=>{
        return new Promise((resolve)=>{
            $.get("http://localhost:8080/Data/Cartes/all",function(data){
                resolve(data);
            });
        })
    }
    
        addCartes().then((data)=>{
            let pages=[];
            for(let carte of data){
                let dataGet=0;
                if(carte.titre.length===2){
                    dataGet=1;
                }
                if(carte.contenus!==undefined){
                    for(let content of carte.contenus){
                        if(content[1]==="true"){
                            content[1]=dataGet;
                            dataGet++;
                        }else{
                            content.pop();
                        }
                    }
                }

            dispatch(ajoutCarte({carte:carte})); 
            if(pages.indexOf(carte.page)===-1){
                pages.push(carte.page);
            }
            } 
            dispatch(listePages({pages:pages}));
        });
    
}
export default useCartesList;