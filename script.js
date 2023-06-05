const {createApp}=Vue;
createApp({
    data(){
        return{
           
            imgArray:[
            '/img/01.webp',
            '02.webp',
            '03.webp',
            '04.webp',
            '05.webp',
           ],
           activeIndex:0,
        }
    },
    methods(){

    }
}).mount('#app')
