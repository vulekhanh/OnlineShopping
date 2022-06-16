"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Product",
      [
        {
          title: "White dress",
          available: true,
          description:
            "latest popular selection - Easy match - Fiery new style - unique design - Slim fit - Elegant Fashion.",
          type: "dress",
          price: 199000,
          imageUrl:
            "https://i.pinimg.com/736x/25/0e/b1/250eb1c1b43eddda52570cadf886547c.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {//maxi dress
          title: "Maxi Dress",
          available: true,
          description:
            "You'll love the Running Free Maxi Dress! This gorgeous dress features lace detailing and a maxi length. This is the perfect dress for any occasion! ...",
          type: "dress",
          price: 990000,
          imageUrl:
            "https://www.showpo.com/on/demandware.static/-/Sites-sp-master-catalog/default/dw1d8cbaeb/images/running-free-maxi-dress/tn_running_free_maxi_dress_in_white.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Slim Elegant lace",
          available: true,
          description:
            "latest popular selection - Easy match - Fiery new style - unique design - Slim fit - Elegant Fashion.",
          type: "dress",
          price: 350000,
          imageUrl:
            "https://dynamic.zacdn.com/hwM8GdoGwYaOTFMZ8lyomaYKAzo=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/crystal-korea-fashion-1071-4439711-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Polyester sun",
          available: true,
          description:
            "Women Casual A Line Dress V Neck Solid Summer Dresses For Women Cheap Price Womens Strappy Midi Dress Ladies Summer RustyZipper.Com Vintage Clothing ...",
          type: "dress",
          price: 320000,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1083/6796/products/product-image-680475433_1024x1024.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Summer dress",
          available: true,
          description:
            "Midi floral dress designed with a straight neckline,two square front pockets, button down front and thin tie up straps with a relaxed fit. * ....",
          type: "dress",
          price: 280000,
          imageUrl:
            "https://i5.walmartimages.com/asr/6c788d4e-8b17-4885-8705-4cc5b635489f_1.2f4ec84f1484b5d316d4e3f3639ef693.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Midi dress",
          available: true,
          description:
            "Simplee Elegant button women dress Those of us who refuse to stick to sports aren’t going to shut up or go away any time soon. midi dress summer ...",
          type: "dress",
          price: 440000,
          imageUrl:
            "https://ae01.alicdn.com/kf/H33ee10ee9d654da3a8d9e1bc2a766895G/Simplee-Elegant-button-women-dress-Pocket-polka-dots-yellow-cotton-midi-dress-Summer-casual-female-plus.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "long sleeve lace ball",
          available: true,
          description:
            "A breathtaking choice for the unconventional bride, this wedding dress features contrasting layers of tulle, lace motifs, and Chantilly lace. The sheer bodice features illusion long sleeves, a plunging V-neckline, and scoop back, all accented in 3D floral lace motifs. Hemline trimmed in horsehair, completing the tulle ballgown skirt. Includes detachable modesty panel option for a more demure neckline. Finished with covered buttons over zipper closure.",
          type: "wedding_dress",
          price: 3000000,
          imageUrl:
            "https://www.kleinfeldbridal.com/wp-content/uploads/2019/03/sottero-and-midgley-long-sleeve-lace-ball-gown-wedding-dress-33910704.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tonya S-515",
          available: true,
          description:
            "- Wedding dresses London, Flower girls dresses, First Communion dresses and evening dresses 2018",
          type: "wedding_dress",
          price: 5000000,
          imageUrl:
            "https://nivaldo.co.uk/wp-content/uploads/2019/11/S-515-Tonya-4-768x1013.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "TALA S-516",
          available: true,
          description:
            "CATEGORY: 2020 COLLECTION SANTORINI",
          type: "wedding_dress",
          price: 5000000,
          imageUrl:
            "https://nivaldo.co.uk/wp-content/uploads/2019/11/S-516-Tala-4-768x1013.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "TAVIA S-509",
          available: true,
          description:
            "CATEGORY: 2020 COLLECTION SANTORINI",
          type: "wedding_dress",
          price: 7500000,
          imageUrl:
            "https://nivaldo.co.uk/wp-content/uploads/2019/11/S-509-Tavia-1-768x1013.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "TRISHA S-499",
          available: true,
          description:
            "CATEGORY: 2020 COLLECTION SANTORINI",
          type: "wedding_dress",
          price: 15000000,
          imageUrl:
            "https://nivaldo.co.uk/wp-content/uploads/2019/11/S-499-Trisha-1-1079x720.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Scarpin",
          available: true,
          description:
            "The most beloved type of formal shoes for women, the right Scarpins go perfectly with pencil skirts, trousers, suits, different types of dresses, and all other kinds of work wear.",
          type: "shoe",
          price: 380000,
          imageUrl:
            "https://lojaanimale.vteximg.com.br/arquivos/ids/821701/09030501_0003_1-SCARPIN-DE-VERNIZ-SALTO-ALTO.jpg?v=637153164646500000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Peep-Toe Heels",
          available: true,
          description:
            "It has an opening at the toe-box which allows the toes to show, Peep toe heels are used as both formal wear and party wear.",
          type: "shoe",
          price: 400000,
          imageUrl:
            "https://cheapsalemarket.com/wp-content/uploads/2020/03/Black-High-Heels-Peep-Toe-Platform-Womens-Pumps-Shoes.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sandals",
          available: true,
          description:
            "Get ready for an elevated look in the Steve Madden Heatwave Natural Multi Cork Platform High Heel Sandals! Faux leather shapes these cute heels that ..",
          type: "shoe",
          price: 430000,
          imageUrl:
            "https://www.lulus.com/images/product/xlarge/5576770_1198311.jpg?w=415&hdpi=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spool heels",
          available: true,
          description:
            "Buy Textured Pumps with Spool Heels | Blue | Pumps from Shoemart online. Receive free delivery on orders over AED 200 and same day on orders placed ...",
          type: "shoe",
          price: 290000,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlfh7VDYnlsvR2c8DGf6vTJlmwtB1guKY1w&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Oxford",
          available: true,
          description:
            "Nine west maia menswear inspired oxford features a flattering almond toe for a bit of feminine flourish",
          type: "shoe",
          price: 230000,
          imageUrl:
            "https://i0.wp.com/ae01.alicdn.com/kf/HTB1CjJIaBGE3KVjSZFhq6AkaFXaf/QPFJQD-Mori-Girl-Japanese-Style-Genuine-Split-Leather-font-b-Women-b-font-Round-Toe-T.jpg?crop=7,4,922,617&quality=3295",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mules",
          available: true,
          description:
            "Amina Muaddi's 'Gilda' mules are minimal yet glamorous. Set on stiletto heels, they've been made in Italy from shiny light-brown leather and have thin ...",
          type: "shoe",
          price: 190000,
          imageUrl:
            "https://cache.net-a-porter.com/images/products/1185937/1185937_in_2000_q80.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mules",
          available: true,
          description:
            "Amina Muaddi's 'Gilda' mules are minimal yet glamorous. Set on stiletto heels, they've been made in Italy from shiny light-brown leather and have thin ...",
          type: "shoe",
          price: 190000,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0302/3146/1932/products/2ee812_8fb49c0efd7a4b7cb8afe222cb759a75_mv2_1024x1024.jpg?v=1585096615",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pendant",
          available: true,
          description:
            "14K Treasure Chest 89 Time And Eternity Circle Pendant 1/4Ct 1 Round Diamond Hi Color And I1 Clarity 18 Inches",
          type: "jewelry",
          price: 3600000,
          imageUrl:
            "https://5.imimg.com/data5/GF/YG/MY-7832626/calvin-klein-minimal-women-watch-500x500.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Diamond ring",
          available: true,
          description:
            "Forevermark Icon Setting Cushion Engagement Ring With Two Row Pave Band",
          type: "jewelry",
          price: 2000000,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0302/3146/1932/products/2ee812_bb623419ba684ad89db095e6cb9f99a7_mv2_d_3508_2480_s_4_2_1296x.jpg?v=1585096800",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ippolita",
          available: true,
          description:
            "Ippolita Rostagno understands that comfort and ease are just as important as beauty when it comes to jewelry. These elegant 'Polished Rock Candy' earrings are set with smooth mother-of-pearl slices nestled harmoniously in an 18-karat gold setting that feels so lightweight.",
          type: "jewelry",
          price: 1500000,
          imageUrl:
            "https://cache.net-a-porter.com/images/products/1283484/1283484_in_920_q80.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gold hoop earrings",
          available: true,
          description:
            "Ippolita's earrings are from the label's aptly named 'Classico' collection, which includes timeless pieces to round out a well-edited closet. Handmade in Italy from 18-karat gold, these hoops are lightly hammered to catch and reflect the light. They're the perfect choice for almost any occasion, no matter how formal or casual.",
          type: "jewelry",
          price: 2400000,
          imageUrl:
            "https://cache.net-a-porter.com/images/products/1107646/1107646_in_920_q80.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Diamond necklace",
          available: true,
          description:
            "The exquisite stones in Ippolita's 'Lollipop®' collection are hand-faceted to ensure they shimmer at every angle. This necklace is centered with a striking Swiss blue topaz and illuminated by a frame of brilliant-cut diamonds. It has a slim 18-karat green gold chain that you can adjust to two different lengths.",
          type: "jewelry",
          price: 5400000,
          imageUrl:
            "https://cache.net-a-porter.com/images/products/1236937/1236937_in_920_q80.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Timex Butterfly",
          available: true,
          description:
            "Buy Timex Butterfly Pattern Dial Women Watch online at best price from IGP. Gift/Send Timex Butterfly Pattern Dial Women Watch online. Send Fashion ...",
          type: "watch",
          price: 3000000,
          imageUrl:
            "https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-timex-fashion-analog-golden-dial-watch-for-women-23588-m.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Space Gray Aluminum",
          available: true,
          description:
            "The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer with an innovative pin-and-tuck closure.",
          type: "watch",
          price: 12000000,
          imageUrl:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYAY2_VW_34FR+watch-40-alum-spacegray-nc-se_VW_34FR_WF_CO_GEO_US?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1603489882000,1604710952000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Silver Aluminum Case",
          available: true,
          description:
            "The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.The Solo Loop is made from soft, stretchable silicone and designed for ultracomfort with no clasps or buckles. ",
          type: "watch",
          price: 14000000,
          imageUrl:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYQP2_VW_34FR+watch-40-alum-silver-nc-se_VW_34FR_WF_CO_GEO_US?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1603488964000,1604710433000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ladies watches",
          available: true,
          description:
            "Cheap Women's Watches, Buy Quality Watches Directly from China Suppliers:Ladies watches Women Fashion Colorful Ultra thin Leather Rhinestone Analog ...",
          type: "watch",
          price: 33000,
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/-RSS0PoEKxe4uv_TkarlM4sdzSgOwukXicMfEN02tCXeqvSsVywhebO7U8ZUc1mtg4qXK5GP2VF_umDhxCYc4PJnOAJcrAYttDUb5MbZo52Xy0XVSewMvFA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Apple watch SE",
          available: true,
          description:
            "Buy an Apple Watch & learn how you can get $200 off a second Apple Watch when you buy both devices on a qualifying installment plan.",
          type: "watch",
          price: 1300000,
          imageUrl:
            "https://specials-images.forbesimg.com/imageserve/5e9c46aa10482f0006483e92/960x0.jpg?fit=scale",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "FILA trainers",
          available: true,
          description:
            "The Iconic Disruptor II, Comfortable, durable and great looking, these athletic trainers for women and men are a new twist on an old favourite. You'll ...",
          type: "trainers",
          price: 590000,
          imageUrl:
            "https://cf.shopee.vn/file/3c47a539ea7525190b25cc36854b2d5e",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gym trainers",
          available: true,
          description:
            "adidas Sleek Trainers White White U.K. Foreign Secretary: Leave Voters Will Be Disappointed by Brexit Reality adidas all white trainers U.S. Denies ...",
          type: "trainers",
          price: 320000,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKhaIQEF1COJiIBqCS2Nj4nkVvT681WYFFQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "FILA Disruptor",
          available: true,
          description:
            "Retro-inspired sneakers from the sports pros at FILA. With sporty-cool vibes + a lace-up silhouette in a sleek, durable faux leather with branded ...",
          type: "trainers",
          price: 690000,
          imageUrl:
            "https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315092941046_010_b?$xlarge$&fit=constrain&qlt=80&wid=683",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Brera continental ",
          available: true,
          description:
            "This elegant and timeless city wallet features a thoughtfully organised interior that offers ample space for cards, notes and coins. Easy to carry in ...",
          type: "purse",
          price: 300000,
          imageUrl:
            "https://d346btfl32uj11.cloudfront.net/media/catalog/product/cache/7/image/800x/9df78eab33525d08d6e5fb8d27136e95/V/9/V9L34__028000R__OC_1_1_1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "black purse",
          available: true,
          description:
            "Amore features a sleek crossbody design, supportive shoulder strap, and high definition graffiti print throughout. A spacious interior ensures ...",
          type: "purse",
          price: 3300000,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/2496/4916/products/product-image-991057547_1200x1200.jpg?v=1571710223",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "wallet classic",
          available: true,
          description:
            "PPallas wallet\r\nM58414 💎\r\nThis versatile Pallas wallet is extremely subtle, stylish and practical.The colorful Monogram canvas and the iconic ...",
          type: "purse",
          price: 259000,
          imageUrl:
            "https://cf.shopee.vn/file/cb0ee438f050905470c7f7fa57462adc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "volatile",
          available: true,
          description:
            "It was only a matter of time, wasn't it? Made for frivolous outings, the Volatile clasp frame purse is the new throw and go purse. Perfect for ...",
          type: "purse",
          price: 320000,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0214/8218/products/status-anxiety-wallet-purse-volatile-black-front.jpg?v=1607572547",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "small handbag",
          available: true,
          description:
            "bags for women small handbag purse shoulder bag lady's mini mobile p",
          type: "purse",
          price: 169000,
          imageUrl:
            "https://ae01.alicdn.com/kf/HTB1RcmwbMaH3KVjSZFpq6zhKpXao/bags-for-women-small-handbag-purse-shoulder-bag-lady-s-mini-mobile-phone-cute-business-handbag.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Product", null, {});
  },
};
