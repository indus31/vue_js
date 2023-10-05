const app = Vue.createApp({
    data() {
        return { leNombre:0 ,message:"give it a go",
        selectCard1:false,
        selectCard2:false,
        selectCard3:false,
        value1:false,
        value2:false,
        value3:false,
        value4:false,
        rdString:"",
    
    };
    },
    //! Les watchers permettent de prendre une variable et de l'utiliser comme une fonction
    //! de manière à surveiller des changments de valeurs.
    //! Ici on surveille notre variable leNombre, et si sa valeur atteint 7 alors on modifie la valeur du nombre

    methods:{
        stringFunction(){
            if(this.rdString == "world"){
                return true;
            }else if(this.rdstring == "hello"){
                return true;
            }
        },
        selectionCard(uneCard){
            if(uneCard == 1 ){
                this.selectCard1 = !this.selectCard1;  
            }else if(uneCard == 2){
                this.selectCard2 = !this.selectCard2;
            }else if(uneCard ==3){
                this.selectCard3 = !this.selectCard3;
                console.log(this.selectCard3);
            }

        },
        capterEventInput(event){
            if(event.target.value == "world"){
                console.log("world");
                this.value1 = !this.value1;

            }else if(event.target.value == "hello"){
                this.value2 = !this.value2;
            }
            
        },
        addOne(){
            this.leNombre++;
        },
        addFive(){
            this.leNombre += 5;
        },
        
        
    },

    watch:{
        leNombre(value) {
            console.log("watching");
                if(value >0 && value<=5){
                    this.message = "essaie encore";
                    console.log(this.message);

                }else if(value >5 && value < 15){
                    this.message = "tu chauffe";
                    console.log(this.message);
                }else if(value == 15){
                    this.message = "Got it !!";
                    console.log(this.message);

                }else if(value >15 && value <=25){
                    this.message = "tu refroidis";
                    console.log(this.message);
                }else if(value>25){
                    this.message = "il fait très froid par ici !!! restart ";
                    // this.leNombre = 0;
                    console.log(this.message);
                    setTimeout(() => {
                        this.leNombre = 0;
                    }, 3000);
                }
               
        },
           
        
    }
    });
    app.mount('#monApp');