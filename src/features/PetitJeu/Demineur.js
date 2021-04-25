import React, { useState } from 'react'
import Style from './jeu.module.css'
import * as $ from 'jquery';
let text;
let nbDem=0;
let loop=0;
let nbLigne=10;
let nbColonne=10;
let nbMine=20;
let nbMinePlace=0;
let nbCaseDev=0;
let grille;
let zero=[];
                                   
function Demineur() {
    const [nbColonnes,setNbColonnes]=useState(10);
    const [nbLignes,setNbLignes]=useState(10);
    const [nbMines,setNbMines]=useState(10);
    const NouvelleGrille=()=>{
        if(nbColonnes>0 && nbLignes>0 && nbMines>0 && nbMines<(nbLignes*nbColonnes)){
            $("#"+Style.demTab).empty();
            nbDem=0;
            loop=0;
            nbCaseDev=0;
            nbMinePlace=nbMines;
            zero=[];
            $("#test").empty();
            creationGrille();
            }else{
                alert("caractéristiques invalides");
            }
    }
    function creationGrille(){
    
        $("#mines").text(nbMinePlace);
        grille=new Array(nbLignes);
        while(nbDem<nbMines){
        
        for(let i=0;i<nbLignes;i++){
            let g;
            if(loop===0){
            g=new Array(nbColonnes);
            }else{
            g=grille[i];
            }
            for(let j=0;j<nbColonnes;j++){
                let random=Math.floor(Math.random()*100);
                
                if(random>90 && nbDem<nbMines && g[j]!==9){
                    g[j]=9;
                    nbDem++;
                    
                }
                if(g[j]!==9){
                    g[j]=0;
                }
            }
            grille[i]=g;
        }
        
        loop++;
        }
        //alert(JSON.stringify(grille));
        for(let i=0;i<nbLigne;i++){
            for(let j=0;j<nbColonnes;j++){
                let nbMV=0;
                if(grille[i][j]!==9){
                for(let y=i-1;y<=i+1;y++){
                    for(let z=j-1;z<=j+1;z++){
                        if(y>=0 && y<nbLignes && z>=0 && z<nbColonnes && (y!==i || z!==j)){
                            if(grille[y][z]===9){
                                nbMV++;
                            }
                        }
                    }
                }
                grille[i][j]=nbMV;
                
                if(grille[i][j]===0){
                    let liste=[];
                    liste.push([i,j]);
                    
                for(let y=i-1;y<=i+1;y++){
                    for(let z=j-1;z<=j+1;z++){
                        if(y>=0 && y<nbLignes && z>=0 && z<nbColonnes && (i!==y || j!==z)){
                            liste.push([y,z]);
                        }
                    }
                }
                zero.push(liste);
                }
                }
            }
        }
        //alert(JSON.stringify(zero));
        //alert(JSON.stringify(grille));
        for(let i=0;i<nbLignes;i++){
            let ligne=$("<tr></tr>");
            for(let j=0;j<nbColonnes;j++){
                let c=$("<td></td>");
                let button=$("<button></button>");
                button.text(" ");
                button.attr("id","b"+i+"c"+j);
                button.attr("class","jeu "+Style.caseDem);
                //button.text(grille[i][j]);
                button.css("height","20px");
                button.css("width","20px");
                button.css("padding",0);
                button.on("click",function(){
                    if(grille[i][j]===9){
                        alert("Perdu");
                        $(".jeu").off();
                        affichageMine();
                        $("#b"+i+"c"+j).css("background-color","red");
                    }else{
                        $("#b"+i+"c"+j).text(grille[i][j]);
                        nbCaseDev++;
                        affichageZero(i,j);
                        if(nbCaseDev===(nbColonnes*nbLignes-nbMines)){
                            alert("Victoire");
                            $(".jeu").off();
                            affichageMine();
                            nbMinePlace=0;
                            $("#mines").text(nbMinePlace);
                        }
                    }
                })
                button.on("contextmenu",function(){
                    if($("#b"+i+"c"+j).text()==="M"){
                    $("#b"+i+"c"+j).css("color","black");
                    $("#b"+i+"c"+j).css("border-width","2px");
                    $("#b"+i+"c"+j).css("border-color","buttonface");
                    $("#b"+i+"c"+j).css("border-style","outset");
                    $("#b"+i+"c"+j).css("border-image","initial");
                    $("#b"+i+"c"+j).text(" ");
                    nbMinePlace++;
                    }else if($("#b"+i+"c"+j).text()===" "){
                    $("#b"+i+"c"+j).css("color","red");
                    $("#b"+i+"c"+j).css("border","solid");
                    $("#b"+i+"c"+j).text("M");
                    nbMinePlace--;
                    }
                    $("#mines").text(nbMinePlace);
                    return false;
                })
                //button.text(grille[i][j]);
                /*if(grille[i][j]===9){
                    button.css("color","red");
                }*/
                c.append(button);
                ligne.append(c);
            }
            $("#"+Style.demTab).append(ligne);
        }
    }
    function affichageMine(){
        for(let i=0;i<nbLignes;i++){
            for(let j=0;j<nbColonnes;j++){
                if(grille[i][j]===9){
                    $("#b"+i+"c"+j).css("color","red");
                    $("#b"+i+"c"+j).css("border","solid");
                    $("#b"+i+"c"+j).text("M");
                }else if(grille[i][j]!==9 && $("#b"+i+"c"+j).text()==="M"){
                    $("#b"+i+"c"+j).css("color","blue");
                }
            }
        }
    }
    function affichageZero(i,j){
        for(let assos of zero){
            for(let asso of assos){
                if(i===asso[0] && j===asso[1]){
                    for(let asso2 of assos){
                        if(($("#b"+asso2[0]+"c"+asso2[1]).text()===" " || $("#b"+asso2[0]+"c"+asso2[1]).text()==="M")&& grille[asso2[0]][asso2[1]]!==9){
                            if($("#b"+asso2[0]+"c"+asso2[1]).text()==="M"){
                                nbMinePlace++;
                                $("#mines").text(nbMinePlace);
                                $("#b"+asso2[0]+"c"+asso2[1]).css("color","black");
                                $("#b"+asso2[0]+"c"+asso2[1]).css("border-width","2px");
                                $("#b"+asso2[0]+"c"+asso2[1]).css("border-color","buttonface");
                                $("#b"+asso2[0]+"c"+asso2[1]).css("border-style","outset");
                                $("#b"+asso2[0]+"c"+asso2[1]).css("border-image","initial");
                            }
                            $("#b"+asso2[0]+"c"+asso2[1]).text(grille[asso2[0]][asso2[1]]);
                            nbCaseDev++;
                            affichageZero(asso2[0],asso2[1]);
                        }
                        //affichageZero(asso2[0],asso2[1]);
                    }
                }
            }
        }
    }
    return (
        <div className={Style.flex}>
            <div className={Style.article} id={Style.carteDemineur}>
            <div className={Style.w100}>
            <h3>Nombre de Mines à Placer : <span id="mines"></span></h3>
            <div className={Style.enveloppe}>
                <table id={Style.demTab}></table>
            </div>
            </div>
            </div>
            <div className={Style.article}>
            <div className={Style.w100}>
            <div className={Style.enveloppe}>
                <h5 className={Style.note}>Pour signaler une mine :</h5>
                <ul className={Style.note}>
                    <li>Clic droit sur ordinateur</li>
                    <li>Maintenir appuyer sur smartphone</li>
                </ul>
                <label htmlFor="col" className={Style.labelDem}>Nombre de Colonnes</label><input className={Style.paramDem} id="col" type="number" value={nbColonnes} onChange={e=>setNbColonnes(e.target.value)}/>
                <label htmlFor="ligne" className={Style.labelDem}>Nombre de Lignes</label><input className={Style.paramDem} id="ligne" type="number" value={nbLignes} onChange={e=>setNbLignes(e.target.value)}/>
                <label htmlFor="mine" className={Style.labelDem}>Nombre de Mines</label> <input className={Style.paramDem} id="mine" type="number" value={nbMines} onChange={e=>setNbMines(e.target.value)}/>
                <button onClick={()=>NouvelleGrille()}>Nouvelle Partie</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Demineur
