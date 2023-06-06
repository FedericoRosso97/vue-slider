const {createApp}=Vue;
createApp({
    data(){
        return{
            items: [{ message: 'Foo' }, { message: 'Bar' }],
            imgArray:[
                '01.webp',
                   
                '02.webp',
               
                '03.webp',
    
                '04.webp',
                 
                '05.webp',
           ],
           activeIndex:0,
        }
    },
    methods:{
        previousSlide(){
            if(this.activeIndex==0){
                this.activeIndex=this.imgArray.length-1;
            console.log(this.activeIndex);
            }else{
                this.activeIndex--;
                console.log(this.activeIndex);
            }
            
        },
        nextSlide(){
            if(this.activeIndex=this.imgArray.length){
                this.activeIndex=0;
            }else{
                this.activeIndex++;
                console.log(this.activeIndex);
            }
           
        }
    }
}).mount('#app')
