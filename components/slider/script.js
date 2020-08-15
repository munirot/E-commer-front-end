// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
export default {
  name: 'slider',
  data() {
    return {
      // swiperOptions: {
      //   pagination: {
      //     el: '.swiper-pagination'
      //   },
      //   // Some Swiper option/callback...
      // }
      listProduct:[
        {
          name:"PS63",
          price:"$90.89",
          img: require("../../assets/image/p1.webp"),
        },
        {
          name:"ST-Pro",
          price:"$80.89",
          img: require("../../assets/image/p2.webp"),
        },
        {
          name:"18KRGB",
          price:"$190.89",
          img: require("../../assets/image/p3.webp"),
        },
        {
          name:"AT-14",
          price:"$940.89",
          img: require("../../assets/image/p4.webp"),
        },
        {
          name:"AU-90",
          price:"$60.89",
          img: require("../../assets/image/p1.jpeg"),
        },
      ]
    }
  },
  components: {

  },
  computed: {
  },
  mounted() {
  },
  created() {

  },
  methods: {
    
  }
}

