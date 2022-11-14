const {createApp} = Vue;
const input = document.getElementById('yourNumber');

createApp({
  data(){
    return{
      emailList:[],
      emailNumber:10,
      title: 'La tua lista:',
    }
  },
  methods:{
    getMails(){
      console.log(this.emailNumber);
      this.emailList=[];
      for(let i=0; i< this.emailNumber; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( result => {
          this.emailList.push(result.data.response);
        })
        
      }
    }
  },
  mounted(){
    this.getMails();
  }
}).mount('#app')