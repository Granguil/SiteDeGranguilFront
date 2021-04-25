import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { changePage } from '../../Slices/UserSlice';
import style from './Cartes.module.css'
import useGetData from './../../../Hook/useGetData'

function CarteLien({carte}) {
    const dispatch=useDispatch();
    const GetData=useGetData;
    const [getData,setData]=useState(new ArrayBuffer(10));
    useEffect( ()=>{
        const get=async ()=>{
        setData(await GetData(carte.getData));
        }
        get();
    },[GetData,carte.getData])
    const navigation=(e)=>{
        if(carte.action==="#"){
            e.preventDefault();
            dispatch(changePage({pageName:carte.targetPage}));
        }
    }
    return (
        
    <article>
        <form action={carte.action} method={carte.method} target={carte.target!==undefined?"_blank":null} onSubmit={(e)=>navigation(e)}>
            <button className={style.pointer}>
                <div>
                    <div className={style.containerBorder}>
                <div className={style.imageContainer}>
                <img className={style.img} src={carte.image!==undefined?"/Contents/image/"+carte.image:"#"} alt="error"/>
                </div>
                </div>
                {carte.titre!=="" && carte.titre!==undefined && carte.titre!==null?
                <h3 className={style.av}>
                    {carte.titre.length<=1?<div>{carte.titre}</div>:<div>{carte.titre[0]+" "+getData[Number(carte.titre[1])]}</div>}
                </h3>:null}
                {carte.contenus.map((contenu,index)=>{

                    return <div key={index}>{contenu.length===1?<p>{contenu}</p>:<p>{contenu[0]+" "+getData[Number(contenu[1])]}</p>}</div>
                })}
                </div>
            </button>
        </form>
    </article>
        
    )
}

export default CarteLien
