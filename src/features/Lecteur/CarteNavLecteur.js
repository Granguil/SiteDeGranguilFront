import React from 'react'
import Style from './carte.module.css'

function CarteNavLecteur({Niveau,Titre,isDetail,content,navigation,detail,affichage}) {
    return (
        <div className={Style.article}>
            <div className={Style.w100}>
            <h3>{Titre}</h3>
            <div className={Style.enveloppe}>
                {isDetail?
                <div>
                <div>{content.Titre}</div>
                <div>{content.Detail}</div>
                {Niveau>2?
                content.read===0?
                <div style={{color:"black"}}>Non Lu</div>
                :content.read===1?
                <div style={{color:"red"}}>Lecture en Cours</div>
                :
                <div style={{color:"green"}}>Déjà Lu</div>
                :
                null}

                </div>
                :
                Niveau<4
                ?
                content.map((item,index)=>{
                    let readstate={};
                    if(item.read===0){
                        readstate={color:"black"}
                    }else if(item.read===1){
                        readstate={color:"red"};
                    }else if(item.read===2){
                        readstate={color:"green"};
                    }
                    return <button key={index} style={readstate} className={Style.displayinfo} onClick={()=>navigation(Niveau,index)}>{item.Titre} <div className={Style.info} onClick={(e)=>{e.stopPropagation(); detail(Niveau,index);}}>i</div></button>
                })
                :
                content.map((item,index)=>{
                    let readstate={};
                    if(item.read===0){
                        readstate={color:"black"}
                    }else if(item.read===1){
                        readstate={color:"red"};
                    }else if(item.read===2){
                        readstate={color:"green"};
                    }
                    return <button key={index} style={readstate} className={Style.displayinfo} onClick={()=>affichage(item.id)}>{item.Titre} </button>
                })
                }
            </div>
            </div>
        </div>
    )
}

export default CarteNavLecteur
