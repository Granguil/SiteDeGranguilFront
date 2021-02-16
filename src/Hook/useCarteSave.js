import * as $ from 'jquery'
import {createToaster} from './../general/js/toaster'

const useCarteSave=(event,id,adresse,method)=>{
    event.preventDefault();
        $.ajax({
          type: method,
          url: adresse,
          data: $("#"+id).serialize(),
          success: function (data) {
            createToaster("Success !",data,"left","success");
          }
        });
};


export default useCarteSave