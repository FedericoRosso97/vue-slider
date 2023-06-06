const {createApp}=Vue;
createApp({
    data(){
        return{
            items: [{ message: 'Foo' }, { message: 'Bar' }],
            imgArray:[
                {
                    image:'01.webp',
                },
                {
                    image:'02.webp',
                },
                {
                    image:'03.webp',
                },
                {
                    image:'04.webp',
                },
                {
                    image:'05.webp',
                },
                
                   
            
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
            if(this.activeIndex==this.imgArray.length-1){
                this.activeIndex=0;
                console.log(this.activeIndex);
            }else{
                this.activeIndex++;
                console.log(this.activeIndex);
            }
           
        }
    }
}).mount('#app')
