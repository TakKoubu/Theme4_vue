const app = Vue.createApp({
  data(){
    return {
      text: '',
      text2: '',
      boxC: false
    }
  },
  computed: {
    inputdata: function() {
      return this.text;
    },
    input2data: function() {
      return this.text2;
    },
  },
  methods: {
    boxSelected(box){
      if (box === 'C'){
        this.boxC = !this.boxC;
      }
    } 
  }
});

app.mount('#assignment');
