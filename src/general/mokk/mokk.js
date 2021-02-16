const mokk={
    cartes:[
        {page:"Accueil",type:"Lien",action:"/Contents/Roman/liste.html",method:"POST",target:"true",image:"plateau.jpg",titre:["La Saga des De Savoie"],contenus:[["Chapitre n°7 :"],["Secrets"],["Prochain Chapitre :"],["Confession"]]},
        {page:"Projets",type:"Fin",action:"#",method:"POST",image:"calendrier.jpg",titre:["Généralité"],contenus:[["Cas 1"],["Cas 2"],["Cas 3"],["Cas 4"]]},
        {page:"Accueil",type:"Lien",targetPage:"Projets",action:"#",method:"GET",image:"calendrier.jpg",titre:["Projets"],contenus:[["A Venir"],["Contenu"],["- Descriptions"],["- Démo"]]},
        {page:"Accueil",type:"Lien",action:"/Connexion/",method:"POST",target:"true",image:"Dark.jpg",titre:["Quizz Hebdomadaire"],contenus:[["Quizz n°",0],["",1],["",2],["Meilleur Score",3]],getData:"/QuizzHebdo/GetStat"}
    ]
}

export default mokk;