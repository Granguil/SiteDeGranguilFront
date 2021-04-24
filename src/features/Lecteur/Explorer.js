import React, { useState } from 'react'
import CarteNavLecteur from './CarteNavLecteur'
import Style from './carte.module.css'
import mokk from '../../mokk/mokk2'

function Explorer() {
    
    const [Titre,setTitre]=useState(["Univers","Detail Univers","",""]);
    const[isDetail,setDetail]=useState([false,false,false,false]);
    const [Content,setContent]=useState([mokk.Element.filter(x=>x.Parent===null),[],[],[]]);
    const [Scene,setScene]=useState([]);
    const [Bloc,setBloc]=useState(mokk.Bloc);
    const navigation=(niveau,num)=>{
        
        let detail=[...isDetail];
        detail[niveau]=false;
            setDetail([...detail]);
        let titreModif=[...Titre];
        titreModif[niveau]=mokk.Titre[niveau][0];
            setTitre([...titreModif]);
        let newContent=[...Content];
        newContent[niveau]=mokk.Element.filter(x=>x.Parent===Content[niveau-1][num].id);
        for(let i=niveau+1;i<4;i++){
            newContent[i]=[];
        }
            setContent([...newContent]);
            
        
    }
    const hoverDetail=(niveau,num)=>{
        let detail=[...isDetail];
        detail[niveau]=true;
            setDetail([...detail]);
        let titreModif=[...Titre];
        titreModif[niveau]=mokk.Titre[niveau][1];
            setTitre([...titreModif]);
        let newContent=[...Content];
        //let detailContent="";
        /*if(niveau===1){
            detailContent= mokk.detail[mokk.Titre[niveau-1][0]][num];
        }
        if(niveau>1){
            detailContent=mokk.detail[Content[niveau-1][num]];
        }*/
        newContent[niveau]=mokk.Element.filter(x=>x.id===Content[niveau-1][num].id)[0];
        for(let i=niveau+1;i<4;i++){
            newContent[i]=[];
        }        
        setContent([...newContent]); 
    }

    const affichage=num=>{
        setScene(mokk.Bloc.filter(x=>x.scene===num));
    }
    const newScene=index=>{
        mokk.Element.push({id:mokk.Element.length+1,Type:"Scene",Titre:"Scene",Detail:"Test Scène",Parent:106,read:0});
        let compteur=0;
        let i=0;
        while(compteur<index){
            if(mokk.Bloc[i].scene===0){
                compteur++;
                mokk.Bloc[i].scene=mokk.Element.length;
            }
            i++;
        }
        setBloc([...mokk.Bloc])
    }
    return (
        <div>
            <div className={Style.displayCards}>
            <CarteNavLecteur Niveau={1} Titre={Titre[0]} isDetail={isDetail[0]} content={Content[0]} navigation={navigation} detail={hoverDetail}/>
            <CarteNavLecteur Niveau={2} Titre={Titre[1]} isDetail={isDetail[1]} content={Content[1]} navigation={navigation} detail={hoverDetail}/>
            <CarteNavLecteur Niveau={3} Titre={Titre[2]} isDetail={isDetail[2]} content={Content[2]} navigation={navigation} detail={hoverDetail}/>
            <CarteNavLecteur Niveau={4} Titre={Titre[3]} isDetail={isDetail[3]} content={Content[3]} navigation={navigation} detail={hoverDetail} affichage={affichage}/>
            </div>
            {mokk.Bloc.filter(x=>x.scene===0).map((item,index)=>{
                return <div key={index}><div>{item.text}</div><button onClick={()=>newScene(index+1)}>Nouvelle Scène</button></div>
            })}
            {Scene.map((item,index)=>{
                return <div key={index}>{item.text}</div>
            })}
        </div>
    )
}

export default Explorer
