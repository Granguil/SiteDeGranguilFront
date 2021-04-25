import React,{useEffect,useState} from 'react'
import style from './Cartes.module.css'
import useGetData from './../../../Hook/useGetData'


function CarteFin({carte}) {
    const GetData=useGetData;
    const [getData,setData]=useState(new ArrayBuffer(10));
    useEffect( ()=>{
        const get=async ()=>{
        setData(await GetData(carte.getData));
        }
        get();
    },[GetData,carte.getData])
    return (
        <article id={style.un} className={style.projets}>
        <form action={carte.action} method={carte.method}>
            <button className={style.pointer}>
                <div><div className={style.containerBorder}><div className={style.imageContainer}>
                <img className={style.img} src={carte.image!==undefined?"/Contents/image/"+carte.image:"#"} alt="error"/>
                </div></div>
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

export default CarteFin
