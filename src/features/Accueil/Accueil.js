import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListeCartes from '../ListeCartes/ListeCartes'
import { changePage, deconnexion, isConnected, selectPage, selectPseudo } from '../Slices/UserSlice'
import style from './Accueil.module.css'
import Header from './Header/Header'
import useConnected from './../../Hook/useConnected'
import mokk from '../../general/mokk/mokk'
import useDeconnected from '../../Hook/UseDeconnected'
import CreerCarte from '../ListeCartes/Cartes/CreerCarte'

function Accueil() {
    const connected=useSelector(isConnected);
    const pseudo=useSelector(selectPseudo);
    const page=useSelector(selectPage);
    const connectedSearch=useConnected;
    const dispatch=useDispatch();
    const deconnected=useDeconnected;
    useEffect(()=>{
        connectedSearch(dispatch);
    },[connectedSearch,dispatch]);
    const deconnexionProfil=()=>{
        dispatch(deconnexion());
        deconnected(pseudo);
        connectedSearch(dispatch);
    }
    const goTo=(pageTarget)=>{
        dispatch(changePage({pageName:pageTarget}));
    }
    const cartes=mokk.cartes.filter(x=>x.page===page);
    return (
        <>
            <Header></Header>
            <CreerCarte></CreerCarte>
           {page!=="Accueil"? <div id={style.return} className={style.return}><button className={style.returnButton} onClick={()=>goTo("Accueil")}>Retour a l'accueil</button>{pseudo==="admin"?<button className={style.returnButton} onClick={()=>goTo("CreationCartes")}>Ajouter Cartes</button>:null}</div>:null}
           {connected?<div><h3 id={style.pseudo}>{pseudo}, bienvenue</h3>
<button onClick={()=>deconnexionProfil()} className={style.returnButton}>Se Déconnecter</button>
</div>:null}
<ListeCartes cartes={cartes}/>
{!connected || page==="Accueil"?
<section id={style.cardsContainer} className={style.displayCards}>
    <article id={style.un}>
        <form action="/Connexion/Accueil" target="_blank" method="post">
            <input name="numero" type="hidden" value="2"/>
            <button className={style.pointer}>
                <div><div className={style.containerBorder}><div className={style.imageContainer}>
                <img className={style.img} src="/Contents/image/Dark.jpg" alt="error"/>
                </div></div>
                <h3 className={style.av}>
                    Quizz Hebdomadaire
                </h3>
                <p>Quizz N°<span></span></p>
                <p><span></span></p>
                <p><span></span></p>
                <p>Meilleur Score :<span></span></p>
                </div>
            </button>
        </form>
    </article>
    <article id={style.deux}>
        <form action="/Contents/Roman/liste.html" target="_blank">
            <button className={style.pointer}>
                <div>
                    <div className={style.containerBorder}>
                <div className={style.imageContainer}>
                <img className={style.img} src="/Contents/image/plateau.jpg" alt="error"/>
                </div>
                </div>
                <h3 className={style.av}>
                    La Saga des De Savoie
                </h3>
                <p>Chapitre n°7 :</p>
                <p>Secrets</p>
                <p>Prochain Chapitre :</p>
                <p>Confession</p>
                </div>
            </button>
        </form>
    </article>
    <article id={style.trois}>
        <form action="projets.html" target="_blank">
            <button className={style.pointer}>
                <div><div className={style.containerBorder}><div className={style.imageContainer}>
                <img className={style.img} src="/Contents/image/calendrier.jpg" alt="error"/>
                </div>
                </div>
                <h3 className={style.av}>
                    Projets
                </h3>
                <p>A venir</p>
                <p>Contenu :</p>
                <p>- Descritpions</p>
                <p>- Démonstrations</p></div>
            </button>
        </form>
    </article>
</section>
:
<div>
<section id={style.containerProfil} className={style.displayCards}>
<article id={style.AjoutMail}>
            <form action="/Connexion/AjoutMail" method="POST" id="AMForm">
            <h3>Ajouter un mail</h3>
   			<div className={style.containerForm}>
   			<div className={style.centerForm}>
            <label htmlFor="pseudoA">Votre Pseudo</label><br/>
            <input type="text" id="pseudoA" className={"pseudoForm"} name="pseudo" readOnly required/><br/>
            <label htmlFor="mdp">Mot de Passe</label><br/>
            <input type="password" id="mdp" name="mdp" required/><br/>
            <label htmlFor="mail">Votre E-mail</label><br/>
            <input type="email" id="mail" name="mail" maxLength="48" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$" required/><br/>
            <label htmlFor="mail2">Confirmer votre E-mail</label><br/>
            <input type="email" id="mail2" name="mail2" maxLength="48" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$" required/><br/>
            <button className={style.buttonForm}>Valider</button>
            </div>
            </div>
            </form>
           </article>
           <article id={style.ChangeMdp}>
            <form action="/Connexion/NewMdp" method="POST" id="CMDPForm">
            <h3>Changer votre mot de passe</h3>
            <div className={style.containerForm}>
   			<div className={style.centerForm}>
            <label htmlFor="pseudoNM">Votre Pseudo</label><br/>
            <input type="text" id="pseudoNM" className={"pseudoForm"} name="pseudo" readOnly required /><br/>
            <label htmlFor="mdpA"> Ancien Mot de Passe</label><br/>
            <input type="password" id="mdpA" name="mdp" required /><br/>
            <label htmlFor="mdpN">Votre nouveau mot de passe</label><br/>
            <input type="password" id="mdpN" name="mdpA" maxLength="22" required/><br/>
            <label htmlFor="mdpN2">Confirmer votre mot de passe</label><br/>
            <input type="password" id="mdpN2" name="mdpB" maxLength="22" required/><br/>
            <button>Valider</button>
            </div>
            </div>
            </form>
            </article>
           <article id={style.ChangeMail}>
            <form action="/Connexion/ChangeMail" method="POST" id="CMForm">
            <h3>Changer le mail associé à votre compte</h3>
            <div className={style.containerForm}>
   			<div className={style.centerForm}>
            <label htmlFor="pseudoC">Votre Pseudo</label><br/>
            <input type="text" id="pseudoC" className={"pseudoForm"} name="pseudo" readOnly required/><br/>
            <label htmlFor="mdpC">Mot de Passe</label><br/>
            <input type="password" id="mdpC" name="mdp" required/><br/>
            <label htmlFor="mailC">Votre Ancien E-mail</label><br/>
            <input type="email" id="mailC" name="mailA" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$" required/><br/>
            <label htmlFor="mailC2">Votre Nouvel E-mail (Si vide, supprime le mail actuel)</label><br/>
            <input type="email" id="mailC2" name="mail" maxLength="48" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$"/><br/>
            <label htmlFor="mailC3">Confirmer votre E-mail</label><br/>
            <input type="email" id="mailC3" name="mail2" maxLength="48" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$"/><br/>
            <button>Valider</button>
            </div>
            </div>
            </form>
            </article>
            <article id={style.Desinscritpion}>
            <form action="/Connexion/Desinscription" method="POST" id="DesForm">
            <h3>Se désinscrire</h3>
            <div className={style.containerForm}>
   			<div className={style.centerForm}>
            <label htmlFor="pseudoD">Votre Pseudo</label><br/>
            <input type="text" id="pseudoD" name="pseudo" className={"pseudoForm"} readOnly required/><br/>
            <label htmlFor="mdpD">Mot de Passe</label><br/>
            <input type="password" id="mdpD" name="mdp" required/><br/>
            <label htmlFor="mailD">Votre E-mail</label><br/>
            <input type="email" id="mailD" name="mail" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$" required/><br/>
            <button>Valider</button>
            </div>
            </div>
            </form>
            </article>
     </section> 
     </div>
}   
        </>
            
    )
}

export default Accueil
