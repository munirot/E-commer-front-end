import topnav from '~/components/topNav/index.vue'
import Footer from '~/components/footer/index.vue'

// import api from '~/plugins/api';
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    topnav,
    Footer
  },
  mounted() {
    
  },
  created() {
    
  },

  watch: {
    '$route.fullPath': function () {

    }
  },

  methods:{

  },

  computed: {
  },

  beforeMount() {
    document.body.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.notificationMobile);
  },

  beforeDestroy() {
    document.body.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.notificationMobile);
  }
}
