import React, { useState } from 'react'
import style from './Cartes.module.css'
import CarteLien from './CarteLien'
import style2 from './../ListeCartes.module.css'
import useCarteSave from './../../../Hook/useCarteSave'
import { useDispatch, useSelector } from 'react-redux'
import { ajoutPage, selectPages } from '../../Slices/CartesSlice'

function CreerCarte() {
    const nvelleCarte={action:"/Data/Cartes/Add"}
    const [Carte,setCarte]=useState({method:"GET",action:"#",titre:[],contenus:[]});
    const [NvPage,setNvPage]=useState(false);
    let pages=useSelector(selectPages);
    
    const modifContenu=(modificateur)=>{
        let arr=[...Carte.contenus];
        if(modificateur===1){
            arr.push([""]);
        }else{
            arr.pop();
        }
        setCarte({...Carte,contenus:[...arr]});
    }
    const changeValueContenu=(index,value)=>{
        let arr=[...Carte.contenus];
        if(arr[index].length===1){
            arr[index]=[value];
        }else{
        arr[index][0]=value;
        }
        setCarte({...Carte,contenus:[...arr]});
    }
    
    const addData=(index)=>{
        let arr=[...Carte.contenus];
        let num=0;
        for(let i=0;i<index;i++){
            if(arr[i].length===2){
                num++;
            }
        }
        if(Carte.titre.length===2){
            num++;
        }
        arr[index]=[arr[index],num];
        for(let i=index+1;i<Carte.contenus.length;i++){
            if(arr[i].length===2){
                arr[i][1]=arr[i][1]+1;
            }
        }
        setCarte({...Carte,contenus:[...arr]});
    }
    const removeData=(index)=>{
        let arr=[...Carte.contenus];
        arr[index]=[arr[index][0]];
        for(let i=index+1;i<arr.length;i++){
            if(arr[i].length===2){

                arr[i][1]=arr[i][1]-1;
            }
        }
        setCarte({...Carte,contenus:[...arr]})
    }
    const submitForm=useCarteSave;
    const dispatch=useDispatch();
   const CreerCarte=(e,id)=>{
        e.preventDefault();
        if(e.key!=="Enter"){
        submitForm(e,id,nvelleCarte.action,"Post");
        dispatch(ajoutPage(Carte.page));
        }
    }
    return (
        <div className={style2.displayCards}>
        
        {/*type==="Fin"?
        <article  className={style.creation}>
        <form action={nvelleCarte.action} method="POST" id="CreerCarteFin" onSubmit={(e)=>e.preventDefault()}>
                <div style={{overflowY:'auto'}}>
                <select name="page" onChange={(e=>setCarte({...Carte,page:e.target.value}))}>
                    <option value="Accueil">Accueil</option>
                    <option value="Manager">Manager</option>
                    <option value="Projets">Projets</option>
                    <option value="Profil">Profil</option>
                </select><br/>
                <label htmlFor="imgNvC">Nom Image</label><br/>
                <input type="text" name="image" id="imgNvC" value={Carte.image} onKeyUp={(e)=>{
                    if(e.key==="Enter"){
                    setCarte({...Carte,image:e.target.value})}}}/><br/>
                <label htmlFor="titreNvC">Titre</label><br/>
                <input type="text" name="titre" id="titreNvC" value={Carte.titre} onChange={(e)=>setCarte({...Carte,titre:[e.target.value]})}/><br/>
                <input type="checkbox" name="GetData" value="titre" id="titreGetData" onChange={(e)=>{
                    if(e.target.checked){
                    setCarte({...Carte,titre:[Carte.titre,0]});
                    }else{
                        setCarte({...Carte,titre:[Carte.titre[0]]});
                    }}}
                    /><label htmlFor="titreGetData">Get Data</label><br/> 
                <input placeholder="GetData" type="text" name="getDataAdresse" id="getDataNvC" value={Carte.getData} onKeyUp={(e)=>{
                    if(e.key==="Enter"){
                    setCarte({...Carte,getData:e.target.value})}}}/><br/>
                <label>Contenus</label><br/>
                <button type="button" onClick={()=>modifContenu(1)}>Ajout Contenu</button><button type="button" onClick={()=>modifContenu(-1)}>Réduire Contenu</button><br/>
                {Carte.contenus.map((contenu,index)=>{
                    return <div><input key={index} type="text" name="contenu" value={Carte.contenus[index][0]} onChange={(e)=>changeValueContenu(index,e.target.value)}/>
                        <input type="checkbox" name="GetData" value={"getData"+index} id={index+"GetData"}
                        onChange={(e)=>{
                            if(e.target.checked){
                                addData(index);
                            }else{
                                removeData(index);
                            }
                        }}
                        /><label htmlFor={index+"GetData"}>Get Data</label>
                    </div>
                })}
                </div>
                <button onClick={e=>CreerCarte(e,"CreerCarteFin")}>Créer</button>
        </form>
    </article>
    :type==="Link"?*/
    <article  className={style.creation}>
        <form action={nvelleCarte.action} method="POST" id="CreerCarteLink" onSubmit={e=>e.preventDefault()}>
                <div style={{overflowY:'auto'}}>
                <select name="page" onChange={(e=>{
                    if(e.target.value!=="Autre"){
                        setCarte({...Carte,page:e.target.value});
                        setNvPage(false);
                    }else{
                        setNvPage(true);
                    }
                    }
                    )}>
                    {pages.map((page,index)=>{return <option key={index} value={page}>{page}</option>})}
                    <option value="Autre">Autre</option>
                </select><br/>
                {NvPage?<div><input type="text" name="NvPage" onChange={e=>setCarte({...Carte,page:e.target.value})}/><br/></div>:null}
                <label htmlFor="actionNvC">Action</label><br/>
                <input type="text" name="action" id="actionNvC" value={Carte.action} onChange={(e)=>setCarte({...Carte,action:e.target.value})}/><br/>
                <label htmlFor="methodNvC">Methode</label><br/>
                <input type="text" name="methode" id="methodNvC" value={Carte.method} onChange={(e)=>setCarte({...Carte,method:e.target.value})}/><br/>
                <label htmlFor="getDataNvC">GetData</label><br/>
                <input type="text" name="getDataAdresse" id="getDataNvC" value={Carte.getData} onKeyUp={(e)=>{
                    if(e.key==="Enter"){
                    setCarte({...Carte,getData:e.target.value})}}}/><br/>
                <label htmlFor="imgNvC">Nom Image</label><br/>
                <input type="text" name="image" id="imgNvC" value={Carte.image} onKeyUp={(e)=>{
                    if(e.key==="Enter"){
                    setCarte({...Carte,image:e.target.value})}}}/><br/>
                <label htmlFor="titreNvC">Titre</label><br/>
                <input type="text" name="titre" id="titreNvC" value={Carte.titre} onChange={(e)=>setCarte({...Carte,titre:e.target.value})}/><br/>
                <input placeholder="GetData" type="checkbox" name="GetData" value="titre" id="titreGetData" onChange={(e)=>{
                    if(e.target.checked){
                    setCarte({...Carte,titre:[Carte.titre,0]});
                    }else{
                        setCarte({...Carte,titre:[Carte.titre[0]]});
                    }}}/><label htmlFor="titreGetData">Get Data</label><br/>
                <label>Contenus</label><br/>
                <button type="button" onClick={()=>modifContenu(1)}>Ajout Contenu</button><button type="button" onClick={()=>modifContenu(-1)}>Réduire Contenu</button><br/>
                {Carte.contenus.map((contenu,index)=>{
                    return <div><input key={index} type="text" name="contenu" value={Carte.contenus[index][0]} onChange={(e)=>changeValueContenu(index,e.target.value)}/>
                        <input type="checkbox" name="GetData" value={"getData"+index} id={index+"GetData"}
                        onChange={(e)=>{
                            if(e.target.checked){
                                addData(index);
                            }else{
                                removeData(index);
                            }
                        }}
                        /><label htmlFor={index+"GetData"}>Get Data</label>
                    </div>
                })}
                </div>
                <button onClick={(e)=>CreerCarte(e,"CreerCarteLink")}>Créer</button>
        </form>
    </article>}
    <CarteLien carte={Carte}/>
    </div>)
}

export default CreerCarte
