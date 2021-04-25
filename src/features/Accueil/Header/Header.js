import React from 'react'
import { useSelector } from 'react-redux'
import {isConnected, selectPseudo } from '../../Slices/UserSlice';
import style from './Header.module.css'


function Header() {
    const connected=useSelector(isConnected);
    const pseudo=useSelector(selectPseudo);
    
        
    
    return (
        <header id={style.header}>
<div id={style.contact}>
Administrateur et Créateur du site :<br/>
Granguil<br/>
Mail de contact :<br/>
<a href="mailto:sitedegranguil@gmail.com">sitedegranguil@gmail.com</a>
</div>
<div id={style.containerTitre}>
<h1 id={style.titre}>Site de Granguil</h1>
{connected?<div id={style.ConnectedDiv}>
    <span>{pseudo[0]}</span>
</div>:
<div id={style.ConnexionDiv} >
<form action="/Connexion/Accueil" method="post">
<input name="numero" type="hidden" value="0"/>
<button><span>Se Connecter</span><br/>
<span>/</span><br/>
<span>S'Inscrire</span>
</button>
</form>
</div>
}
</div>
</header>
    )
}

export default Header
