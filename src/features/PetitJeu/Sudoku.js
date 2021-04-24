import React from 'react'
import Style from './jeu.module.css'

function Sudoku() {
    let unicite;
    let limite=0;
    let g=new Array(81);
    let grille=new Array(81);
    let compteur2=0;
    let compteur3=0;
    const largeur=new Array(9);
    let a = document.getElementsByClassName(Style.input);
    let borders=document.getElementsByClassName(Style.border);
    for(let remp=0;remp<9;remp++){
        largeur[remp]=1;
    }
    function verification(){
        let d = 0;
        for(let j=0;j<81;j++){
            if(!a[j].readOnly && a[j]!==""){
                if(a[j].value<=0 || a[j].value>9){
                    a[j].style.color="red";
                        d = 1;
                }
                let ligne = Math.floor(j / 9) * 9;
                let col = j % 9;
                for (let i = ligne; i < ligne + 9; i++) {
                    if (a[i].value === a[j].value && i!==j) {
                        a[j].style.color="red";
                        d = 1;
                    }
                }
                for (let i = col; i < 81; i = i + 9) {
                    if (a[i].value === a[j].value && i!==j) {
                        a[j].style.color="red";
                        d = 1;
                    }
                }
                let carrel = Math.floor(ligne / 27) * 27;
                let carrec = Math.floor(col / 3);
                let debut = carrel + carrec * 3;
                let fin = debut + 20;
                let n = 0;
                
                for (let i = debut; i <= fin; i++) {

                    if (a[i].value === a[j].value && i!==j) {
                        a[j].style.color="red";
                        d = 1;
                    }
                    n++;
                    if (n === 3) {
                        n = 0;
                        i = i + 6;
                    }
                }

            }
        }
        if(d===0){
            alert("Grille Correcte");
        }else{
            alert("Grille Incorrecte")
        }
        setTimeout(function(){couleur()},30000);
    }
    function couleur(){
        for(let i=0;i<81;i++){
            if(a[i].style.color==="red"){
                a[i].style.color="gray";
            }
        }
    }
    function initialiser() {
        for (let i = 0; i < a.length; i++) {
            a[i].value = "";
            a[i].style.fontWeight="normal";
            a[i].style.color="black";
            a[i].readOnly=false;
            
        }
    }
    function creerGrille(diff) {
        initialiser();
        g = new Array(81);
        grille = new Array(81);
        let compteur = 0;
        compteur2=0;
        compteur3=0;
        limite=0;
        for (let j = 1; j <= 81; j++) {
            let car = 0;
            compteur++;
            //console.log(compteur);
            let e = 0;
            let c = 0;
            let f = new Array(9);
            for (let i = 0; i < 9; i++) {
                f[i] = 0;
            }
            let d=0;
            do {
                c = Math.floor(Math.random() * 9) + 1;
                //console.log(j+"="+c);

                f[c - 1] = 1;
                d = 0;
                let ligne = Math.floor((j - 1) / 9) * 9;
                let col = (j - 1) % 9;
                for (let i = ligne; i < ligne + 9; i++) {
                    if (g[i] === c) {

                        d = 1
                    }
                }
                for (let i = col; i < 81; i = i + 9) {
                    if (g[i] === c) {

                        d = 1
                    }
                }
                let carrel = Math.floor(ligne / 27) * 27;
                let carrec = Math.floor(col / 3);
                let debut = carrel + carrec * 3;
                let fin = debut + 20;
                let n = 0;
                car = 0;
                for (let i = debut; i <= fin; i++) {

                    if (g[i] === c) {

                        car = 1;
                    }
                    n++;
                    if (n === 3) {
                        n = 0;
                        i = i + 6;
                    }
                }
                e = 0;
                for (let i = 0; i < 9; i++) {
                    if (f[i] === 0) {
                        e = 1;
                    }
                }
            } while ((d === 1 || car === 1) && e === 1);
            let lig = Math.floor((j - 1) / 9) * 9;
            if (compteur >= 10000000) {
                alert("Echec après " + compteur + " tentatives");
                j = 100;
            }
            if (e === 0) {
                //initialiser();
                //j=0;
                if (car !== 1) {
                    for (let l = lig; l < lig + 9; l++) {
                        g[l] = 0;
                    }
                    j = lig;
                } else {
                    //console.log("Test car=1");
                    let cardeb = Math.floor(lig / 27) * 27;
                    for (let t = cardeb; t <= cardeb + 26; t++) {
                        g[t] = 0;
                    }
                    j = cardeb;
                }
            } else {
                g[j - 1] = c;
            }

        }
         grille = g.slice();				
            let casevide = 0;
            g = grille.slice();
            /* for (let j = 0; j <= 80; j++) {
                a[j].style.fontWeight = "normal";
            } */
            
            for (let i = 0; i < 81; i++) {
                compteur3++;
                if(compteur3%100===0 & compteur3>=100){
                //alert("C3 "+compteur3);
                }
                if (compteur3>20000){
                    //alert("Nouvelle Grille");
                    compteur3=0;
                    creerGrille();
                }
                if(compteur2%100===0 && compteur2!==0){
                //alert("Test1 "+compteur2);
                }
                if(compteur2>=200){
                    compteur2=0;
                    casevide=0;
                    g=grille.slice();
                  //  alert("Reinit");
                }
                if (g[i] !== 0 && casevide < diff) {
                    let alea = Math.floor(Math.random() * 4);
                    
                    if (alea === 0) {
                        //alert("resolution");
                        resolution(i);
                        //console.log("U "+unicite);
                        if(unicite===1){
                        g[i] = 0;
                        casevide++;
                        //alert("CV : "+casevide);
                        compteur2=0;
                        }else{
                            if(limite!==1){
                            compteur2=compteur2+1;
                            
                            //alert("C2 "+compteur2);
                            
                            }
                        }
                    }
                }
                
                if (i === 80 && casevide < diff) {
                    //alert("C'est reparti");
                    i = -1;
                }
                if (limite===1) {
                i=100;
                //alert("valeur de i : "+i);
                }
                if(i%10===9){
                //alert("valeur de i : "+i);
                }
            }
            alert("Grille Générée");
            if(limite!==1){
            for (let j = 0; j <= 80; j++) {
                if (g[j] !== 0) {
                    
                    a[j].style.fontWeight = "900";
                    a[j].readOnly=true;
                }
            }
        for(let border=0;border<=80;border++){
            borders[border].style.border="solid";
        }
        for (let j = 0; j <= 80; j++) {
             if (a[j].style.fontWeight !== "900") {
                a[j].style.color = "gray";
            }else{ 
                a[j].value=g[j];
            }
             
             if(j%3===2 && j%9!==8) {
                borders[j].style.borderRightColor="red";
                borders[j+1].style.borderLeftColor="red";
                //borders[j].style.borderRightWidth="thick";
            } 
            if((j>=18 && j<27)|| (j>=45 && j<54)){
                borders[j].style.borderBottomColor="red";
                borders[j+9].style.borderTopColor="red";
                //borders[j].style.borderBottomWidth="thick";
            }
        } 
            }else{
                alert("Relancez la création d'une grille");
            }
    }
    function resolution(numcase){
        //alert("resolution");
        let compteur4=0;
        let compteur5=0;
        let jmax=0;
        for (let RO=0;RO<81;RO++){
           
               a[RO].readOnly=false;
           
       }
       let grille2=g.slice();
       grille2[numcase]=0;
       for (let RO=0;RO<81;RO++){
           if(grille2[RO]!==0){
               a[RO].readOnly=true;
           }
       }
        let compteur = 0;
        for (let j = 1; j <= 81; j++) {
            
            if(!a[j-1].readOnly){
                if(jmax<j){
                jmax=j;
                compteur4=0;
                
            }
            let car = 0;
            compteur++;
            //console.log(compteur);
            let e = 0;
            let c = 0;
            let f = new Array(9);
            for (let i = 0; i < 9; i++) {
                f[i] = 0;
            }
            let d=0;
            do {
                c = Math.floor(Math.random() * 9) + 1;
                //console.log(j+"="+c);

                f[c - 1] = 1;
                d = 0;
                let ligne = Math.floor((j - 1) / 9) * 9;
                let col = (j - 1) % 9;
                for (let i = ligne; i < ligne + 9; i++) {
                    if (grille2[i] === c) {

                        d = 1
                    }
                }
                for (let i = col; i < 81; i = i + 9) {
                    if (grille2[i] === c) {

                        d = 1
                    }
                }
                let carrel = Math.floor(ligne / 27) * 27;
                let carrec = Math.floor(col / 3);
                let debut = carrel + carrec * 3;
                let fin = debut + 20;
                let n = 0;
                car = 0;
                for (let i = debut; i <= fin; i++) {

                    if (grille2[i] === c) {

                        car = 1;
                    }
                    n++;
                    if (n === 3) {
                        n = 0;
                        i = i + 6;
                    }
                }
                e = 0;
                for (let i = 0; i < 9; i++) {
                    if (f[i] === 0) {
                        e = 1;
                    }
                }
            } while ((d === 1 || car === 1) && e === 1);
            let lig = Math.floor((j - 1) / 9) * 9;
            if (compteur === 10000000) {
                alert("Echec après " + compteur + " tentatives de créer une grille jouable");
                j = 100;
                limite=1;
            }
            if (e === 0) {
                //initialiser();
                //j=0;
                if (car !== 1) {
                    for (let l = lig; l < lig + 9; l++) {
                        if(!a[l].readOnly){
                        grille2[l] = 0;
                    }
                    }
                    if(j===jmax){
                        compteur4++;
                    }
                    j = lig;
                } else {
                    //console.log("Test car=1");
                    let cardeb = Math.floor(lig / 27) * 27;
                    for (let t = cardeb; t <= cardeb + 26; t++) {
                        if(!a[t].readOnly){
                        grille2[t] = 0;
                        }
                    }
                    if(j===jmax){
                        compteur4++;
                    }
                    j = cardeb;
                }
            } else {
                grille2[j - 1] = c;
            }
            if(compteur4>20){
                
                //alert("C4:"+compteur4+" et C5: "+compteur5);
                
                for(let v=0;v<=80;v++){
                    if(!a[v].readOnly){
                        grille2[v]=0;
                    }
                }
                compteur4=0;
                compteur5++;
                jmax=0;
                
                j=0;

            }
            if(compteur5>50){
                //alert("C5 limite");
                j=100;
                compteur5=0;
            }
            }
        }
        
        if(grille2.join()===grille.join()){
            unicite=1;
            
        }else{
            unicite=0;
        }
        
    }
    return (
        <div className={Style.flex}>
            <div className={Style.article} id={Style.carteSudoku}>
            <div className={Style.w100}>
            <h3>Sudoku</h3>
            <div className={Style.enveloppe} id={Style.enveloppe}>
                {largeur.map((item,index)=>{
                    return <div className={Style.line} key={index}>{largeur.map((item2,index2)=><span className={Style.border} key={index2}><input type="number" className={Style.input}/></span>)}</div>;
                })}
            </div>
            </div>
            </div>
            <div className={Style.article}>
            <div className={Style.w100}>
            <div className={Style.enveloppe}>
            <div>
            <button className={Style.sudokuButton} id={Style.A} onClick={()=>creerGrille(30)}>Creer une grille facile</button>
            <button className={Style.sudokuButton} id={Style.B} onClick={()=>creerGrille(38)}>Creer une grille moyenne</button>
            <button className={Style.sudokuButton} id={Style.C} onClick={()=>creerGrille(46)}>Creer une grille difficile</button>
            <button className={Style.sudokuButton} id={Style.D} onClick={()=>creerGrille(52)}>Creer une grille diabolique</button>
            </div>
            <button className={Style.sudokuButton} id={Style.E} onClick={()=>verification()}>Vérifiez la grille</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Sudoku
