const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url:  "https://media.vrbo.com/lodging/43000000/42550000/42540300/42540258/4bea63e8.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",

      },

      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        filename: "listingimage",
        url:      "https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg",
    
      },
        

      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image:{
        filename: "listingimage",
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/527042879.jpg?k=67e8fd696b106f20790e0329314b87a76e1f71cfe2725cd434b413424dcbadfe&o=&hp=1",
      
      }, 
       
      
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        filename: "listingimage",
        url:         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQs9nHcqDc69AV4tLpbi6Di6JsblbqGg2ACQ&s",
      },
       

      
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        filename: "listingimage",
        url: "https://www.travelandleisure.com/thmb/fSLoXAu9Vwf4PwaIlbfdfIt4Lnw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GOTreeHaus11-911cd65e846540ee91b6102a69f03915.jpg",
      
      },
        
      
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url: "https://www.theprivateworld.com/wp-content/uploads/2023/09/Beachfront-Paradise-Koh-Samui-Beachfront-Koh-Samui-3.jpg",
      },
    
     
      
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvn0GORfuf4vy9e68kTBXwNy349YrAw0FT3A&s",
    
      },
    
    
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        filename: "listingimage",
        url: "https://www.shutterstock.com/image-photo/view-manhattan-new-york-city-600nw-138528275.jpg",
      },
      
           
    
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image:{
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRp1uwFnCQ_3IS9Dq_sXE3CDzfrioGPagYJQ&s",
    
      },
      
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfeRHh65C3wcobZ_f7c9YL8EoBMHmvJ4EnQ&s",
    
      },
      
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image:{
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-MTYTtg_49NwJtwqC0V6tCRSo9rLNtQQeg&s",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: {
        filename: "listingimage",
        url:"https://t3.ftcdn.net/jpg/05/89/51/04/360_F_589510469_i85QVtm74nrW04qg7fea1RXZ1aL5eoA8.jpg",
      
      },
        
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image:{
        filename: "listingimage",
        url:         "https://images.smiletemplates.com/uploads/screenshots/449/0000449298/powerpoint-template-450w.jpg",
      },

      
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image:{
        filename: "listingimage",
        url:  "https://media.istockphoto.com/id/1384357207/photo/typical-townhouses-back-bay-boston-massachusetts.jpg?s=612x612&w=0&k=20&c=loEHloWGTaxA1xGWrwdZyaMpXrcpiWfMtSELhCSkZLM=",
      
      },

      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: {
        filename: "listingimage",
        url:        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaNzD6K5gSnX3iZzUMbKlVYwmRn_MjNF6Sg&s",
      },

      
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image:{
        filename: "listingimage",
        url:        "https://a0.muscache.com/im/pictures/41ee884e-2c0d-4b90-bca4-92ac05237338.jpg?im_w=720",
      
      }, 

      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: {
        filename: "listingimage",
        url:       "https://media.istockphoto.com/id/1300800419/photo/miami-beach-ocean-drive-historic-district.jpg?s=612x612&w=0&k=20&c=EszsFRCY6PHnpWGF2RMF0gegJ9ZX2u8-WI2OZsxyb9I=",
      },

      
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image:{
        filename: "listingimage",
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500753096.jpg?k=908114f9319dc52c88c81eac67fa8d6e9579b52f2fd84ed005aa5fd4129f2251&o=&hp=1",
      },
      
      
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: {
        filename: "listingimage",
        url:       "https://media.istockphoto.com/id/108585159/photo/edinburgh-castle-scotland-from-princes-street-gardens-with-ross-fountain.jpg?s=612x612&w=0&k=20&c=8IkNoaRDDxGw3GG_eIfK1ivOYXfvorSm8Ifn7T-Iut8=",
      },

    
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: {
        filename: "listingimage",
        url:      "https://media.gettyimages.com/id/1091391780/photo/looking-along-desert-towards-the-business-district.jpg?s=612x612&w=gi&k=20&c=eVksSPM-ws2C6vTeMbqclQrgdlHWGBt56bCVlPLmBcA=",
      },

      
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: {
        filename: "listingimage",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_2uN0mcKp9wKXguwFonZh2zRjIUJgg4sFA&s",
      },
        
        
    
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: {
        filename: "listingimage",
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/89716223.jpg?k=4fbaa9bd24887a0b4dd067183c5687d97ef1cf5c6b125c0daced2e4edf5b21f6&o=&hp=1",
      },
       
      
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: {
        filename: "listingimage",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkv2SlPJktXLBAatMv4a1MlIqrqXAdEKea-A&s",
    
      },
        
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: {
        filename: "listingimage",
        url:  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/96/f1/af/historic-kitchen-house.jpg?w=700&h=-1&s=1",
      },
      
      
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: {
        filename: "listingimage",
        url: "https://www.shutterstock.com/image-photo/tokyo-japan-31-october-2023-260nw-2415088667.jpg",
      
      },

      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: {
        filename: "listingimage",
        url:        "https://media.istockphoto.com/id/1057974094/photo/autumn-on-lake-winnipesaukee-in-new-hampshire.jpg?s=612x612&w=0&k=20&c=rQgv3iXuX1mfvg-KcmRGPGe4Cvy72MSz_mmJPtBOUcA=",
      },

      
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/1299305938/photo/drone-view-of-luxury-bungalows-in-the-maldives-man-on-the-stairs-arms-outstretched.jpg?s=612x612&w=0&k=20&c=PtW2fAcb3zX3NpstPy6kA22Z0vRRS-iVgqQFtUSNjm4=",
      },
       
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: {
        filename: "listingimage",
        url: "https://www.skiinluxury.com/attachments/photos/gallery/5f8eab7f-f2a0-497e-8a25-1a470a000f09.jpg",
      },
       
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      image:{
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/511935582/photo/beach-villa-on-remote-tropical-island.jpg?s=612x612&w=0&k=20&c=v4Pzx6QEWh4kXMbMK8IlHZPYN84j_dosBZCmkIUcn4k=",
      },
    
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
    },
  ];
  
   module.exports = { data: sampleListings };
  