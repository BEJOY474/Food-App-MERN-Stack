const pizzas = [
    {
      "name": "Margherita",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 200,
        "medium": 350,
        "large": 500
      },
      "category": "veg",
      "image": "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
      "description": "Classic Margherita | Fresh Tomatoes, Mozzarella, Basil"
    },
    {
      "name": "Pepperoni Feast",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 280,
        "medium": 480,
        "large": 650
      },
      "category": "nonveg",
      "image": "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
      "description": "Pepperoni Feast | Pepperoni, Mozzarella, Tomato Sauce"
    },
    {
      "name": "Farmhouse",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 240,
        "medium": 400,
        "large": 550
      },
      "category": "veg",
      "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
      "description": "Farmhouse | Onion, Capsicum, Mushroom, Tomato"
    },
    {
      "name": "BBQ Chicken",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 300,
        "medium": 500,
        "large": 700
      },
      "category": "nonveg",
      "image": "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
      "description": "BBQ Chicken | Chicken, BBQ Sauce, Onions"
    },
    {
      "name": "Paneer Tikka",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 260,
        "medium": 420,
        "large": 580
      },
      "category": "veg",
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodandwine.com%2Frecipes%2Fclassic-cheese-pizza&psig=AOvVaw2i3KJVQBYn9skavke0QZws&ust=1724842303673000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCNkrqAlYgDFQAAAAAdAAAAABAR",
      "description": "Paneer Tikka | Paneer, Capsicum, Onion, Spices"
    },
    {
      "name": "Hawaiian Delight",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 270,
        "medium": 450,
        "large": 620
      },
      "category": "nonveg",
      "image": "https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg",
      "description": "Hawaiian Delight | Ham, Pineapple, Mozzarella"
    },
    {
      "name": "Veggie Supreme",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 230,
        "medium": 390,
        "large": 540
      },
      "category": "veg",
      "image": "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg",
      "description": "Veggie Supreme | Capsicum, Onion, Olive, Sweet Corn"
    },
    {
      "name": "Spicy Chicken",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 310,
        "medium": 510,
        "large": 710
      },
      "category": "nonveg",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWi2LUrZpymVi3CJMgmcqUyCmIYBGLTYYgxvYjSKMYmQk1w4A8jYC-udNR6nuWlf6aXKc&usqp=CAU",
      "description": "Spicy Chicken | Chicken, Jalapenos, Hot Sauce"
    },
    {
      "name": "Mushroom Magic",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 220,
        "medium": 370,
        "large": 520
      },
      "category": "veg",
      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/next_level_pizza-0e8a210.jpg?quality=90&resize=500,454",
      "description": "Mushroom Magic | Mushrooms, Mozzarella, Herbs"
    },
    {
      "name": "Chicken Bacon Ranch",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 320,
        "medium": 520,
        "large": 720
      },
      "category": "nonveg",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fssh3sYVKMrUhpZRfKGpUsRrEm2-mqtmAiWkuNdldk2jP2E2V0QA8mnhMu_-FE2QJCM&usqp=CAU",
      "description": "Chicken Bacon Ranch | Chicken, Bacon, Ranch Sauce"
    },
    {
      "name": "Golden Corn Delight",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 210,
        "medium": 360,
        "large": 510
      },
      "category": "veg",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiTQHtyvV0rarqP2bpTU9NTap24v8z0wuoA&s",
      "description": "Golden Corn Delight | Sweet Corn, Capsicum, Onion"
    },
    {
      "name": "Sausage Extravaganza",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 290,
        "medium": 490,
        "large": 690
      },
      "category": "nonveg",
      "image": "https://www.pamperedchef.com/iceberg/com/recipe/1684007-lg.jpg",
      "description": "Sausage Extravaganza | Sausages, Onions, Mozzarella"
    },
    {
      "name": "Peppy Paneer",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 270,
        "medium": 430,
        "large": 590
      },
      "category": "veg",
      "image": "https://www.healthyseasonalrecipes.com/wp-content/uploads/2019/12/greek-pizza-21-001-640x640.jpg",
      "description": "Peppy Paneer | Paneer, Capsicum, Red Paprika"
    },
    {
      "name": "Meat Lovers",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 340,
        "medium": 540,
        "large": 740
      },
      "category": "nonveg",
      "image": "https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg",
      "description": "Meat Lovers | Pepperoni, Sausage, Bacon, Ham"
    },
    {
      "name": "Deluxe Veggie",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 250,
        "medium": 410,
        "large": 570
      },
      "category": "veg",
      "image": "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F4108%2Ftrend20230915051203.jpg",
      "description": "Deluxe Veggie | Mushroom, Capsicum, Onion, Olive"
    },
    {
      "name": "Buffalo Chicken",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 310,
        "medium": 510,
        "large": 710
      },
      "category": "nonveg",
      "image": "https://blog.papajohns.com.gt/hubfs/Blogs%202023/Marzo/Pizzas%20al%20Chilazo/Pizza%20Mediana%20de%20Pepperoni.jpg",
      "description": "Buffalo Chicken | Chicken, Buffalo Sauce, Ranch"
    },
    {
      "name": "Cheese Burst",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 280,
        "medium": 440,
        "large": 600
      },
      "category": "veg",
      "image": "https://www.eatingwell.com/thmb/k3RhYf4XhAeqAejYjdInOlSOp6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-1124303516-36413b5bf61f45f1b7d18d90000b56b7.jpg",
      "description": "Cheese Burst | Extra Cheese, Mozzarella, Parmesan"
    },
    {
      "name": "Peri Peri Chicken",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 300,
        "medium": 500,
        "large": 700
      },
      "category": "nonveg",
      "image": "https://www.cobsbread.com/us/wp-content//uploads/2022/09/Pepperoni-pizza-850x630-1.png",
      "description": "Peri Peri Chicken | Chicken, Peri Peri Sauce, Onions"
    },
    {
      "name": "Tandoori Paneer",
      "variants": [
        "small",
        "medium",
        "large"
      ],
      "prices": {
        "small": 260,
        "medium": 420,
        "large": 580
      },
      "category": "veg",
      "image": "https://www.cobsbread.com/us/wp-content//uploads/2022/09/Pepperoni-pizza-850x630-1.png",
      "description": "Tandoori Paneer | Paneer, Tandoori Sauce, Capsicum"
    }
]

export default pizzas
  