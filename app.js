//! Création d'une instance Vue c'est notre application
Vue.createApp({
//! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
//! Toutes les data seront contenues dans this
data() {
    return {
    nameUser: 'Dr.Mario',
    ageUser: 45,
    imageUser:'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg',
    compteur : 0,
    tasks: [],
    valeurDeInput: '',
    toto:'bonjour',
    texte : "hello world",
    chiffres : 12354645,
    tableaux : ["merci","aurevoir",9],
    objet : {
        nom:"mon nom",
        prenom:"mon prenom",
        tel:"0562258963"
    },
    htmlTitle: '<h1>Les mémoires de Steven Seagal</h1>',
    Intrandom: Math.random() * 100
};
},
//! Dans cet Object methods, on va écrire nos fonctions
methods: {
    
    agePlusDix(){
        return this.ageUser + 10;
    },
    exemple(){
        let randomInt = Math.random();
        if(randomInt> 0.5){
           return "blala";
        }else{
            return "titit";
            
        }
    },
    ajouterTask() {
    this.tasks.push(this.valeurDeInput);
    this.valeurDeInput = '';
    }
},
//! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');