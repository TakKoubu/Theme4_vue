const app = Vue.createApp({
  data(){
    return {
      text: ''
    }
  },
  computed: {
    inputdata: function() {
      return this.text
    },
  },
  methods: {
    boxSelected(box){
      if (box === 'A') {
        this.boxASelected = !this.boxASelected;
      } else if (box === 'B'){
        this.boxBSelected = !this.boxBSelected;
      } else if (box === 'C'){
        this.boxCSelected = !this.boxCSelected;
      }
    } 
  }
});

app.mount('#assignment');
