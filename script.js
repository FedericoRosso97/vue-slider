const {createApp}=Vue;
createApp({
    data(){
        return{
           imgArray:[
            'img/01.webp',
            'img/02.webp',
            'img/03.webp',
            'img/04.webp',
            'img/05.webp',
           ],
           activeIndex:0,
        }
    },
    methods(){

    }
}).mount('#app')
