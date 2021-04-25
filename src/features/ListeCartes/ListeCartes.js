import React from 'react'
import CarteFin from './Cartes/CarteFin';
import CarteForm from './Cartes/CarteForm';
import CarteLien from './Cartes/CarteLien';
import style from './ListeCartes.module.css';

function ListeCartes({cartes}) {
    
    return (
        <section id={style.cardsContainer} className={style.displayCards}>
            {cartes.map((carte,index)=>{
                if(carte.type==="Link"){
                   return <CarteLien  carte={carte} key={index}></CarteLien>
                }else if(carte.type==="Form"){
                   return <CarteForm carte={carte} key={index}></CarteForm>
                }else if(carte.type==="Fin"){
                   return <CarteFin carte={carte} key={index}></CarteFin>
                }else{
                    return null;
                }
            })}
        </section>
    )
}

export default ListeCartes
