import React from 'react'
import { useSelector } from 'react-redux'
import style from './Cartes.module.css'
import {selectPseudo} from './../../Slices/UserSlice'
import useForm from './../../../Hook/useForm'

function CarteForm({carte}) {
    const pseudo=useSelector(selectPseudo);
    const formSubmit=useForm;
    const interceptionSubmit=(e)=>{
        formSubmit(e,carte.id,carte.action,carte.method);
    }
    
    return (
        
            <article id={style.AjoutMail}>
            <form action={carte.action} method={carte.method} id={carte.id} onSubmit={(e)=>interceptionSubmit(e)}>
            <h3>{carte.titre}</h3>
   			<div className={style.containerForm}>
   			<div className={style.centerForm}>
            {carte.contenus.map((contenu,index)=>{
                return <div key={index}>  
                    <label htmlFor={contenu.id}>{contenu.label}</label><br/>
                    {contenu.name==="pseudo"?
                    <input type={contenu.type} id={contenu.id} name={contenu.name}  
                    readOnly={contenu.readOnly!==undefined?true:null}
                    required={contenu.required!==undefined?true:null}
                    maxLength={contenu.maxLength!==undefined?contenu.maxLength:null}
                    pattern={contenu.pattern!==undefined?contenu.pattern:null}
                    value={pseudo}
                    />:
                    <input type={contenu.type} id={contenu.id} name={contenu.name}  
                    readOnly={contenu.readOnly!==undefined?true:null}
                    required={contenu.required!==undefined?true:null}
                    maxLength={contenu.maxLength!==undefined?contenu.maxLength:null}
                    pattern={contenu.pattern!==undefined?contenu.pattern:null}
                    />}
                </div>
            })}
            <button className={style.buttonForm}>Valider</button>
            </div>
            </div>
            </form>
           </article>
        
    )
}

export default CarteForm
