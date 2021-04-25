import React from 'react'
import style from './CarteChoix.module.css'

function CarteChoix() {
    return (
        <div>
            <div className={style.carte}>
                <div className={style.cadre}>
                    <div className={style.cadreInterieur}>
                        <h3>Titre</h3>
                        <p>Présentation</p>
                        <button>Choix n°1</button>
                        <button>Choix n°2</button>
                        <button>Choix n°3</button>
                        <button>Choix n°4</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarteChoix
