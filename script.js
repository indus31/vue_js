Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        nombre: 0
        
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        
        plusDix(param){
            
            return this.nombre += param;
        },
        moinsDix(param){
            return this.nombre -= param;

        },
        exemple(){
            let randomInt = Math.random();
            if(randomInt> 0.5){
               return "blala";
            }else{
                return "titit";
                
            }
        },
        
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');