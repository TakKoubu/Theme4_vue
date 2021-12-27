const app = Vue.createApp({
  data() {
    return {
      className: '',
      isVisible: true,
      bgColor: ''
    }
  },
  computed: {
    validClassName() {
      return {
        user1: this.className === 'user1', 
        user2: this.className === 'user2',
        visible: this.isVisible,
        hidden: !this.isVisible
      };
    }
  },
  methods: {
    toggleParagraph() {
      this.isVisible = !this.isVisible;
    },
  }
});

app.mount('#assignment');
