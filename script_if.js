Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        nombre: 0,
        filmList:[],
        film:"",
        
        
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        testList(){
            if(this.filmList.length < 0){
                return true;
            }else{
                return false;
            }
        },
        putOnList(){
            this.filmList.push(this.film);

        },
        affichageFilm(){
            this.filmList.forEach(element => {
                `<p>${element}</p>`;
                
            });
        }
        
        
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');