let mokk={
    Titre:[
        ["Univers","Univers"],
        ["Texte","Détail Univers"],
        ["Chapitre","Détail Texte"],
        ["Scène","Détail Chapitre"]
    ],
    Element:[],
    Bloc:[
        {text:"Block 1",scene:0},{text:"Block 2",scene:0},{text:"Block 3",scene:0},{text:"Block 4",scene:0},{text:"Block 5",scene:0},
        {text:"Block 6",scene:0},{text:"Block 7",scene:0},{text:"Block 8",scene:0},{text:"Block 9",scene:0},{text:"Block 10",scene:0}
    ],

};

for(let i=0;i<3;i++){
    mokk.Element.push({id:i+1,Type:"Univers",Titre:"Univers"+(i+1),Detail:"Test Univers",Parent:null});
}

for(let i=0;i<10;i++){
    const parent=Math.floor(Math.random()*3+1);
    mokk.Element.push({id:mokk.Element.length+1,Type:"Texte",Titre:"Texte"+(i+1),Detail:"Test Texte",Parent:parent});
}

for(let i=0;i<30;i++){
    const parent=Math.floor(Math.random()*10+4);
    const read=Math.floor(Math.random()*3);
    mokk.Element.push({id:mokk.Element.length+1,Type:"Chapitre",Titre:"Chapitre"+(i+1),Detail:"Test Chapitre",Parent:parent,read:read});
}

for(let i=0;i<60;i++){
    const parent=Math.floor(Math.random()*30+14);
    const read=Math.floor(Math.random()*3);
    mokk.Element.push({id:mokk.Element.length+1,Type:"Scène",Titre:"Scène"+(i+1),Detail:"Test Scène",Parent:parent,read:read});
}

mokk.Element.push({id:mokk.Element.length+1,Type:"Univers",Titre:"De Savoie",Detail:"Test Scène",Parent:null});
mokk.Element.push({id:mokk.Element.length+1,Type:"Texte",Titre:"De Savoie",Detail:"Test Scène",Parent:mokk.Element.length});
mokk.Element.push({id:mokk.Element.length+1,Type:"Chapitre",Titre:"Réunion de Famille",Detail:"Test Scène",Parent:mokk.Element.length,read:0});

export default mokk;