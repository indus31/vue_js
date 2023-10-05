Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        nombre: 0,
        randomString : "",
        test : "hello world",
        userName:""
        
        
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        updateUser(){
            console.log("fonctions exécutée");
            if(this.userName = ""){
                this.userName = "test";
                 
            }else{
                this.userName = "un autre test";
               
            }
        },
        capterEventInput(event){
            
            this.randomString = event.target.value; 
        },
        capterEventKeyup(event){
            this.test = event.target.value;
        },

        message(){
            alert("alerte !!");
        },
        plusDix(){  
             this.nombre += 10;
        },
        moinsDix(){
             this.nombre -= 10;

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