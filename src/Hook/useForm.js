import * as $ from 'jquery'
import {createToaster} from './../general/js/toaster'

const useForm=(event,id,adresse,method)=>{
    event.preventDefault();
        $.ajax({
          type: method,
          url: adresse,
          data: $("#"+id).serialize(),
          success: function (data) {
            let type=data[0];
            let text=data.substring(1);
            let typeNom="";
            if(type==="E"){
              typeNom="error"; 
            }else if(type==="S"){
                typeNom="success";
          }
        createToaster(typeNom+" !",text,"left",typeNom);
        $(window).scrollTop(0); 
        }});
};


export default useForm