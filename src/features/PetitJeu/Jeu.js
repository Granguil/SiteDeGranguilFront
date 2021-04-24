import React, { useState } from 'react'
import Demineur from './Demineur';
import Style from './jeu.module.css'
import Sudoku from './Sudoku';

function Jeu() {
    const [Jeu,setJeu]=useState("Sudoku");
    return (
        <div className={Style.displayCards}>
            <div className={Style.article}>
            <div className={Style.w100}>
            <div className={Style.enveloppe}>
                <ul>
                    <li className={Style.pointer} onClick={()=>setJeu("Sudoku")}>Sudoku</li>
                    <li className={Style.pointer} onClick={()=>setJeu("Demineur")}>Démineur</li>
                </ul>
            </div>
            </div>
            </div>
            {Jeu==="Sudoku"?<Sudoku/>:null}
            {Jeu==="Demineur"?<Demineur/>:null}
        </div>
    )
}

export default Jeu
