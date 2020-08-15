export default {
  name: 'Categories',
  data() {
    return {
      categories: [
        {
          name: "Women’s Clothing",
          img: require("../../assets/icon/Dress-2.svg"),
          child: [
            {
              name: "Women's Fashion",
              childs: [
                {
                  name: "Dresses",
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "Women's Sets"
                },
                {
                  name: "Suits & Blazers"
                },
                {
                  name: "Bodysuits"
                },
                {
                  name: "Tanks & Camis"
                },
                {
                  name: "Coats & Jackets"
                },
                {
                  name: "Sweaters"
                }
              ]
            },
            {
              name: "Bottoms",
              childs: [
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Weddings & Events",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Accessories",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Swimwear",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
              ]
            },
            {
              name: "Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
          ],
          benner: [
            {
              name: "Summer Sale",
              img: require("../../assets/image/summer.webp"),
            },
            {
              name: "Beach Style",
              img: require("../../assets/image/sell.webp"),
            },
            {
              name: "Sleep & Lounge",
              img: require("../../assets/image/b.webp"),
            },
          ],
          imag: [
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/l3.webp"),
            },
            {
              img: require("../../assets/image/l4.webp"),
            },
            {
              img: require("../../assets/image/l5.webp"),
            },
            {
              img: require("../../assets/image/l6.webp"),
            },
            {
              img: require("../../assets/image/l7.webp"),
            },
            {
              img: require("../../assets/image/l8.webp"),
            },
            {
              img: require("../../assets/image/l5.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
          ],
        },

        {
          name: "Men’s Clothing",
          img: require("../../assets/icon/dressup.svg"),
          child: [
            {
              name: "Novelty & Special Use",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
              ]
            },
            {
              name: "Hoodies & Sweatshirts",
              childs: [
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
            {
              name: "Hot Sale",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
              ]
            },
            {
              name: "Outerwear & Jackets",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
            {
              name: "Underwear & Loungewear",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
          ],
          benner: [
            {
              name: "Basic T-Shirts",
              img: require("../../assets/image/l9.webp"),
            },
            {
              name: "Moden Sport Style",
              img: require("../../assets/image/l10.webp"),
            },
            {
              name: "SweatPants",
              img: require("../../assets/image/l11.webp"),
            },
          ],
          imag: [
            {
              img: require("../../assets/image/l8.webp"),
            },
            {
              img: require("../../assets/image/l5.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/l3.webp"),
            },
          ],
        },

        {
          name: "Phones & Accessories",
          img: require("../../assets/icon/phone.svg"),
          child: [
            {
              name: "Women's Fashion",
              childs: [
                {
                  name: "Dresses",
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "Women's Sets"
                },
                {
                  name: "Suits & Blazers"
                },
                {
                  name: "Bodysuits"
                },
                {
                  name: "Tanks & Camis"
                },
                {
                  name: "Coats & Jackets"
                },
                {
                  name: "Sweaters"
                }
              ]
            },
            {
              name: "Bottoms",
              childs: [
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Weddings & Events",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Accessories",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Swimwear",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
              ]
            },
            {
              name: "Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
          ],
          imag: [
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/l3.webp"),
            },
          ],
        },

        {
          name: "Computer, Office, Security",
          img: require("../../assets/icon/4.svg"),
          child: [
            {
              name: "Novelty & Special Use",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
              ]
            },
            {
              name: "Hoodies & Sweatshirts",
              childs: [
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
            {
              name: "Hot Sale",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
              ]
            },
            {
              name: "Outerwear & Jackets",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
            {
              name: "Underwear & Loungewear",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
          ],
        },

        {
          name: "Consumer Electronics",
          img: require("../../assets/icon/5.svg"),
          child: [
            {
              name: "Women's Fashion",
              childs: [
                {
                  name: "Dresses",
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "Women's Sets"
                },
                {
                  name: "Suits & Blazers"
                },
                {
                  name: "Bodysuits"
                },
                {
                  name: "Tanks & Camis"
                },
                {
                  name: "Coats & Jackets"
                },
                {
                  name: "Sweaters"
                }
              ]
            },
            {
              name: "Bottoms",
              childs: [
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Weddings & Events",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Accessories",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Swimwear",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
              ]
            },
            {
              name: "Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
          ],
          imag: [
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/l3.webp"),
            },
          ],
        },

        {
          name: "Toys, Kids & Babies",
          img: require("../../assets/icon/6.svg"),
          child: [
            {
              name: "Women's Fashion",
              childs: [
                {
                  name: "Dresses",
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "Women's Sets"
                },
                {
                  name: "Suits & Blazers"
                },
                {
                  name: "Bodysuits"
                },
                {
                  name: "Tanks & Camis"
                },
                {
                  name: "Coats & Jackets"
                },
                {
                  name: "Sweaters"
                }
              ]
            },
            {
              name: "Bottoms",
              childs: [
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Weddings & Events",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Accessories",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Swimwear",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
              ]
            },
            {
              name: "Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
          ],
          imag: [
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/l3.webp"),
            },
          ],
        },

        {
          name: "Bags & Shoes",
          img: require("../../assets/icon/7.svg"),
          child: [
            {
              name: "Novelty & Special Use",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
              ]
            },
            {
              name: "Hoodies & Sweatshirts",
              childs: [
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
            {
              name: "Hot Sale",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
              ]
            },
            {
              name: "Outerwear & Jackets",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
            {
              name: "Underwear & Loungewear",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
          ],
          benner: [
            {
              name: "Basic T-Shirts",
              img: require("../../assets/image/l9.webp"),
            },
            {
              name: "Moden Sport Style",
              img: require("../../assets/image/l10.webp"),
            },
            {
              name: "SweatPants",
              img: require("../../assets/image/l11.webp"),
            },
          ],
          imag: [
            {
              img: require("../../assets/image/l8.webp"),
            },
            {
              img: require("../../assets/image/l5.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/l3.webp"),
            },
          ],
        },

        {
          name: "Beauty, Health & Hair",
          img: require("../../assets/icon/8.svg"),
          child: [
            {
              name: "Novelty & Special Use",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
              ]
            },
            {
              name: "Hoodies & Sweatshirts",
              childs: [
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
            {
              name: "Hot Sale",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
              ]
            },
            {
              name: "Outerwear & Jackets",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Shirts"
                },
                {
                  name: "Casual Shorts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
            {
              name: "Underwear & Loungewear",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "T-Shirts"
                },
                {
                  name: "Men's Sets"
                },
                {
                  name: "Jackets"
                },
                {
                  name: "T-Shirts"
                },
              ]
            },
          ],
          benner: [
            {
              name: "Basic T-Shirts",
              img: require("../../assets/image/l9.webp"),
            },
            {
              name: "Moden Sport Style",
              img: require("../../assets/image/l10.webp"),
            },
            {
              name: "SweatPants",
              img: require("../../assets/image/l11.webp"),
            },
          ],
          imag: [
            {
              img: require("../../assets/image/l8.webp"),
            },
            {
              img: require("../../assets/image/l5.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/l3.webp"),
            },
          ],
        },

        {
          name: "Automobiles & Motorcycles",
          img: require("../../assets/icon/9.svg"),
          child: [
            {
              name: "Women's Fashion",
              childs: [
                {
                  name: "Dresses",
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "Women's Sets"
                },
                {
                  name: "Suits & Blazers"
                },
                {
                  name: "Bodysuits"
                },
                {
                  name: "Tanks & Camis"
                },
                {
                  name: "Coats & Jackets"
                },
                {
                  name: "Sweaters"
                }
              ]
            },
            {
              name: "Bottoms",
              childs: [
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Weddings & Events",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Accessories",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Women's Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
            {
              name: "Swimwear",
              childs: [
                {
                  name: "Bikini Sets"
                },
                {
                  name: "Cover-Ups"
                },
              ]
            },
            {
              name: "Underwear",
              childs: [
                {
                  name: "Dresses"
                },
                {
                  name: "Tees"
                },
                {
                  name: "Blouses & Shirts"
                },
                {
                  name: "Hoodies & Sweatshirts"
                },
              ]
            },
          ],
          benner: [
            {
              name: "Summer Sale",
              img: require("../../assets/image/summer.webp"),
            },
            {
              name: "Beach Style",
              img: require("../../assets/image/sell.webp"),
            },
            {
              name: "Sleep & Lounge",
              img: require("../../assets/image/b.webp"),
            },
          ],
          imag: [
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
            {
              img: require("../../assets/image/l3.webp"),
            },
            {
              img: require("../../assets/image/l4.webp"),
            },
            {
              img: require("../../assets/image/l5.webp"),
            },
            {
              img: require("../../assets/image/l6.webp"),
            },
            {
              img: require("../../assets/image/l7.webp"),
            },
            {
              img: require("../../assets/image/l8.webp"),
            },
            {
              img: require("../../assets/image/l5.webp"),
            },
            {
              img: require("../../assets/image/temple.webp"),
            },
            {
              img: require("../../assets/image/eam.webp"),
            },
            {
              img: require("../../assets/image/l2.webp"),
            },
          ],
        },
      ],
    }
  },
  components: {

  },
  created() {

  },
  methods: {

  }
}