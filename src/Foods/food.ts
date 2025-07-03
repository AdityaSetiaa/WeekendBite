interface Food {
    id: number;
    name: string;
    Tags: string[];
    image: string;
    description: string;
    ingredients: string[];
    Steps: { name: string; process: string }[];
    Tip: string;
    Credits: { name: string; link: string }[];
}

export const foods: Food[] = [
    {
        id: 1,
        name: "Dubai Chocolate",
        Tags: ["Middle-Eastern", "Dessert", "Chocolate"],
        image: "https://i.pinimg.com/736x/a4/49/24/a449247c61c897c8c4cf23e12e6a1ee2.jpg",
        description: "Dubai Chocolate is  a crispy, cheesy Middle Eastern dessert that’s sweet, nutty, and super satisfying. You take shredded phyllo dough, mix it with butter so it gets all golden and crunchy, then stuff it with a mix of tahini and soft cheese. After baking, it’s soaked in a sweet syrup with a hint of rose or orange blossom water. Top it off with pistachios—it’s crunchy, creamy, and just melts in your mouth..",
        ingredients: [

            "Kataifi pastry dough (5 oz / ~2 packed cups, coarsely chopped, thawed if frozen)",
            "Unsalted butter or coconut oil (3 tablespoons, divided)",
            "Pistachio butter or pistachio cream (1 jar, 7–8 oz, creamy)",
            "Tahini (sesame paste) (2 tablespoons, well-stirred)",
            "Kosher salt (1/4 teaspoon)",
            "Milk chocolate chips (12 oz / ~2 cups total, high-quality like Callebaut)",
            "White chocolate chips (3 tablespoons, preferably with cocoa butter like Guittard)",
            "Green food coloring (1–4 drops, optional)"
        ],
        Steps:[
            {
                name: "Prepare the Kataifi",
                process: "Toast coarsely chopped kataifi pastry dough in butter on the stovetop until golden-brown and crispy, then transfer to a bowl. Stir in creamy pistachio butter, tahini, and salt."
            },
            {
                name: "Melt the Chocolate",
                process: "Fill a saucepan halfway with water and bring to a simmer. Set a heatproof bowl over the simmering water to create a double boiler and add the white chocolate chips. Cook, stirring constantly, until completely melted. Carefully remove the bowl from the double boiler. Stir in green food coloring, then drizzle over the bottom of a chocolate mold to create an irregular pattern. Refrigerate the molds while you melt the milk chocolate"
            },
            {
                name: "Melt the milk chocolate.",
                process: "Set the same bowl back over the water. Add milk chocolate chips and butter to the bowl. Heat, stirring constantly, until completely melted. Spread just enough of the melted chocolate to coat the bottom and sides of the mold in a thin, even layer. Freeze until set."
            },
            {
                name: "Fill the chocolate shells",
                process: " Add the pistachio cream mixture to the chocolate mold and use an offset spatula or the back of a spoon to gently spread and press the filling into an even layer. Pour the remaining melted chocolate over the top and spread into an even layer to fill the mold. Using a bench scraper or offset spatula, lightly scrape over the top to level and remove excess chocolate."
            },
            {
                name: "Finish the chocolate bars.",
                process: "Refrigerate until completely set. Remove the bar from the mold and trim off any overhanging chocolate with a knife if desired."
            }
        ],
        Tip: "Refrigerate the bars in an airtight container for up to 3 weeks.",

        Credits: [
            {
                name: "Rachel Perlmutter",
                link: "https://www.instagram.com/byrachelp/"
            }
        ]


    },
     {
        id: 2,
        Tags: ["Indian", "Non-veg", "Chicken", "Curry"],
        name: "Butter Chicken",
        image: "https://myfoodstory.com/wp-content/uploads/2020/04/Butter-Chicken-3.jpg",
        description: "Butter Chicken is a rich and creamy Indian dish made with marinated chicken cooked in a spiced tomato sauce. It's known for its buttery flavor and is often served with naan or rice.",
        ingredients: [
    "2 lbs boneless, skinless chicken thighs, cut into 1-inch pieces",
    "1/2 cup plain whole-milk yogurt",
    "2 teaspoons finely grated garlic (divided, from about 6 cloves)",
    "1 1/2 teaspoons grated fresh ginger (divided)",
    "1 tablespoon freshly squeezed lemon juice",
    "1 1/2 teaspoons kosher salt (divided)",
    "2 teaspoons ground coriander",
    "1 teaspoon garam masala",
    "1 teaspoon Kashmiri chile powder or hot paprika",
    "1/4 teaspoon ground turmeric",
    "3 tablespoons raw cashews, soaked in boiling water for 30+ minutes",
    "1 small or 1/2 medium red onion, finely chopped (about 3/4 cup)",
    "1/2 green Thai bird’s-eye chile or serrano pepper, finely chopped (seeded if less heat is desired)",
    "1 teaspoon tomato paste",
    "1 (14.5 oz) can crushed or diced tomatoes with juices",
    "1 teaspoon dried fenugreek leaves (kasuri methi)",
    "1 tablespoon heavy cream or coconut cream (optional)",
    "2 tablespoons vegetable or olive oil (divided)",
    "5 tablespoons unsalted butter (divided)",
    "1/4 teaspoon cumin seeds",
    "1 1/2 cups plus 2 tablespoons water (divided)",
    "Salt to taste",
    "Chopped fresh cilantro, for garnish",
    "Cooked basmati rice or naan, for serving"
  ],
        Steps:[
            {
                name: "Marinate the chicken",
                process: "Make the yogurt-based marinade in a bowl, adding the spices, ginger, garlic, and lemon juice and whisking well to remove any lumps. If you don’t mind getting your hands dirty, mix the marinade and chicken well in the bowl or add the chicken and marinade to a zip-top bag, then seal and mush them around so that the spiced yogurt covers every piece of chicken"
            },
            {
                name: "Soak the cashews",
                process: "Before beginning to prepare the butter chicken, soak the cashews in boiling water, so when you blend them, they have had time to soften"
            },
            {
                name: "Sear the chicken",
                process: "In order to ensure that excess marinade doesn’t end up on the pan, pat dry the marinated chicken. Sear on high heat so that charred spots form, which provides the smoky flavor you are looking for and mimics the tandoori effect. Remove the chicken and juices from the pan, and set aside."
            },
            {
                name: "Make the onion-tomato-cashew-based sauce",
                process: "After wiping the pan clean, heat the ghee up and caramelize the onions with spices, ginger, and garlic. Add the tomato paste and allow the mixture to caramelize further. Blend the onion mixture with crushed tomatoes, water, and cashews until very smooth. Return the sauce to the heat with 1 cup of water and let it simmer for 15 minutes. Add the chicken and juices, continuing to cook it in the sauce for another 5 minutes. "
            },
            {
                name: "Finish the butter chicken",
                process: "Once the chicken is cooked, turn off the heat. Add heavy cream and butter. Garnish with chopped fresh cilantro and enjoy with rice, naan, or chapati. "
            }
        ],
        Tip: "The butter chicken can be made up to 1 day ahead. Any Indian chicken curry tastes better the next day, so make it the day before you intend to eat it, refrigerate, and then reheat over medium-low heat.Leftovers can be refrigerated in an airtight container for up to 4 days.",

        Credits: [
            {
                name: "Namrata Hedge",
                link: "https://www.instagram.com/namhegde/"
            }
        ]


    },
    {
        id: 3,
        name: "Spaghetti Carbonara",
        Tags: ["Italian", "Pasta", "Vegetarian"],
        image: "https://www.aheadofthyme.com/wp-content/uploads/2021/01/spaghetti-carbonara-1024x1536.jpg",
        description: "Spaghetti Carbonara is a classic Roman pasta dish. It features a silky sauce made from eggs, Pecorino Romano cheese, and black pepper, tossed with hot pasta (often with smoked chicken or mushroom instead of pork):contentReference[oaicite:2]{index=2}.",
        ingredients: [
            "8 oz spaghetti",
            "8 oz shiitake or cremini mushrooms, sliced",
            "2 tablespoons olive oil, divided",
            "2 cloves garlic, minced",
            "3 large eggs",
            "1/2 cup grated Pecorino Romano cheese",
            "1/2 cup grated Parmesan cheese",
            "1 teaspoon black pepper",
            "Salt to taste",
            "Chopped parsley, for garnish (optional)"
        ],
        Steps: [
            {
                name: "Cook the pasta",
                process: "Bring a large pot of salted water to a boil. Cook the spaghetti until al dente, drain (reserving 1/2 cup pasta water) and set aside."
            },
            {
                name: "Sauté the mushrooms",
                process: "In the same pan, heat 1 tablespoon olive oil over medium-high. Add garlic and mushrooms, and sauté until golden and tender. Remove and set aside."
            },
            {
                name: "Make the egg-cheese sauce",
                process: "In a bowl, whisk the eggs, cheeses, and pepper together until smooth. Set aside."
            },
            {
                name: "Combine pasta with sauce",
                process: "Return the pan to low heat with the remaining olive oil. Add the drained pasta and toss. Remove from heat and quickly pour in the egg-cheese mixture, tossing vigorously. Add pasta water a little at a time until the sauce is creamy and coats the pasta."
            },
            {
                name: "Finish and serve",
                process: "Stir in the sautéed mushrooms. Serve immediately, garnished with extra cheese, parsley, and black pepper."
            }
        ],
        Tip: "Work quickly off the heat when adding the egg mixture to get a creamy sauce without scrambling the eggs.",
        Credits: [
            {
                name: "Sho Spaeth",
                link: "https://www.instagram.com/shospaeth/"
            }
        ]
    },
    {
        id: 4,
        name: "Jerk Chicken",
        Tags: ["Jamaican", "Caribbean", "Non-veg", "Chicken"],
        image: "https://www.sandravalvassori.com/wp-content/uploads/2024/06/Jerk-Chicken-2349-2.jpg",
        description: "Jamaican Jerk Chicken is a spicy, smoky Caribbean dish. Chicken pieces are marinated in a blend of allspice, Scotch bonnet peppers, scallions, garlic, and spices, then grilled or roasted:contentReference[oaicite:3]{index=3}.",
        ingredients: [
            "4 lbs chicken (legs, thighs, or a whole cut-up chicken)",
            "1 medium onion, quartered",
            "4 scallions (green onions), chopped",
            "2 Scotch bonnet or habanero chilies, chopped (seeds removed for less heat)",
            "4 cloves garlic, chopped",
            "1 tablespoon ground allspice (pimento)",
            "1 tablespoon ground black pepper",
            "1 teaspoon dried thyme",
            "1 teaspoon ground cinnamon",
            "1/2 teaspoon ground nutmeg",
            "1 tablespoon soy sauce",
            "2 tablespoons vegetable oil",
            "2 tablespoons brown sugar",
            "Juice of 1 lime",
            "Salt to taste"
        ],
        Steps: [
            {
                name: "Blend the marinade",
                process: "In a blender or food processor, combine onion, scallions, chilies, garlic, allspice, pepper, thyme, cinnamon, nutmeg, soy sauce, oil, brown sugar, lime juice and salt. Blend to a coarse paste."
            },
            {
                name: "Marinate the chicken",
                process: "Place the chicken in a large dish or ziplock bag. Pour the marinade over the chicken, coat well, cover, and refrigerate (preferably overnight) to absorb flavors:contentReference[oaicite:4]{index=4}."
            },
            {
                name: "Cook the chicken",
                process: "Preheat grill to medium-hot (or oven to 425°F). Remove chicken from marinade and grill or bake until cooked through and charred in spots, about 35-40 minutes, turning occasionally."
            },
            {
                name: "Serve",
                process: "Let the chicken rest a few minutes, then serve with rice, salad, or plantains."
            }
        ],
        Tip: "Allow the chicken to marinate overnight for the deepest flavor:contentReference[oaicite:5]{index=5}.",
        Credits: [
            {
                name: "Paul Chung",
                link: "https://www.foodandwine.com/recipes/jamaican-jerk-chicken"
            }
        ]
    },
    {
        id: 5,
        name: "Shakshuka",
        Tags: ["North-African", "Middle-Eastern", "Vegetarian", "Brunch"],
        image: "https://i.imgur.com/99Lu01r.jpeg",
        description: "Shakshuka is a North African/Middle Eastern dish of eggs poached in a spiced tomato and pepper sauce. The base sauce is made with onion, bell pepper, garlic, cumin, and paprika, and eggs are gently cooked on top:contentReference[oaicite:6]{index=6}.",
        ingredients: [
            "2 tablespoons olive oil",
            "1 onion, diced",
            "1 red bell pepper, diced",
            "2 cloves garlic, minced",
            "1 teaspoon ground cumin",
            "1 teaspoon paprika",
            "1/4 teaspoon cayenne or chili powder (optional for heat)",
            "1 (14.5 oz) can diced tomatoes (or crushed tomatoes)",
            "4 large eggs",
            "Salt and pepper to taste",
            "Chopped cilantro or parsley, for garnish",
            "Optional: crumbled feta or olives for topping"
        ],
        Steps: [
            {
                name: "Sauté the vegetables",
                process: "Heat olive oil in a skillet over medium heat. Add the onion and bell pepper and cook until softened. Stir in garlic, cumin, paprika, and cayenne; cook 30 seconds until fragrant."
            },
            {
                name: "Simmer the sauce",
                process: "Add the diced tomatoes (with juices) and simmer the sauce until it thickens slightly, about 10 minutes. Season with salt and pepper."
            },
            {
                name: "Poach the eggs",
                process: "Make four wells in the sauce and crack an egg into each. Cover the skillet and cook on low until the egg whites are set but yolks remain runny, about 5-8 minutes."
            },
            {
                name: "Serve",
                process: "Garnish with cilantro or parsley (and feta or olives if using). Serve hot, with crusty bread or pita for dipping."
            }
        ],
        Tip: "Spoon some sauce over the egg whites as they cook to help them set faster while keeping yolks runny:contentReference[oaicite:7]{index=7}.",
        Credits: [
            {
                name: "J. Kenji López-Alt",
                link: "https://www.instagram.com/kenjilopezalt"
            }
        ]
    },
    {
        id: 6,
        name: "Falafel Wraps",
        Tags: ["Middle-Eastern", "Vegetarian", "Vegan", "Wrap"],
        image: "https://theallnaturalvegan.com/wp-content/uploads/2022/08/falafel-gyro.jpg.webp",
        description: "Falafel Wraps are Middle Eastern-style sandwiches. Crispy spiced chickpea falafel balls are wrapped in pita or flatbread with hummus or tahini sauce, fresh vegetables, and herbs.",
        ingredients: [
            "Pita bread or flatbreads",
            "8-10 prepared falafels (homemade or store-bought)",
            "1 ripe avocado, sliced",
            "1/2 cup chopped fresh parsley and mint",
            "1 lime, juiced",
            "Hot sauce or sriracha (to taste)",
            "For the tahini sauce: 1/4 cup plain yogurt, 1 tablespoon tahini, juice of 1/2 lemon, 1 garlic clove (minced), pinch of cumin, salt"
        ],
        Steps: [
            {
                name: "Make the tahini sauce",
                process: "Whisk together yogurt, tahini, lemon juice, garlic, cumin, and a pinch of salt. Adjust seasoning and consistency with a little water if needed."
            },
            {
                name: "Warm the bread",
                process: "Heat each pita or flatbread in a dry pan or oven until soft and pliable."
            },
            {
                name: "Assemble the wrap",
                process: "Spread tahini sauce on the bread, then layer on falafels, avocado slices, chopped herbs, a squeeze of lime, and drizzle of hot sauce. Roll up tightly."
            }
        ],
        Tip: "Want to save time? Use store-bought hummus or tahini sauce instead of making your own:contentReference[oaicite:9]{index=9}.",
        Credits: [
            {
                name: "BBC Good Food",
                link: "https://www.bbcgoodfood.com/recipes/ultimate-falafel-wrap"
            }
        ]
    },
    {
        id: 7,
        name: "Pad Thai",
        Tags: ["Thai", "Stir-fry", "Noodles", "Shrimp"],
        image: "https://www.happyskinkitchen.com/wp-content/uploads/2019/01/IMG_1475-683x1024.jpg",
        description: "Pad Thai is a famous Thai stir-fried noodle dish. It combines flat rice noodles with a sweet-sour sauce made from tamarind, fish sauce, and palm sugar, tossed with shrimp (or chicken/tofu), eggs, and bean sprouts.",
        ingredients: [
            "8 oz flat rice noodles",
            "2 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar (or brown sugar)",
            "1 teaspoon soy sauce",
            "2 tablespoons vegetable oil",
            "2 cloves garlic, minced",
            "8 oz shrimp, peeled and deveined (or chicken/tofu)",
            "2 eggs, lightly beaten",
            "1 cup bean sprouts",
            "3 green onions, sliced",
            "Crushed peanuts and lime wedges, for serving"
        ],
        Steps: [
            {
                name: "Soak and prepare noodles",
                process: "Soak the rice noodles in warm water until pliable (per package instructions), then drain."
            },
            {
                name: "Make the sauce",
                process: "In a small bowl, whisk together tamarind paste, fish sauce, sugar, and soy sauce."
            },
            {
                name: "Stir-fry the proteins",
                process: "Heat oil in a wok or large pan. Add garlic and sauté. Add shrimp and cook until just pink (or cook chicken/tofu until done). Move them aside and scramble the eggs in the pan."
            },
            {
                name: "Combine everything",
                process: "Add drained noodles and sauce to the pan. Toss to coat evenly. Stir in bean sprouts and green onions; cook until heated through."
            },
            {
                name: "Serve",
                process: "Plate the Pad Thai and top with crushed peanuts, extra sprouts, and a lime wedge."
            }
        ],
        Tip: "Adjust the sweetness and tanginess by balancing more sugar or tamarind to taste.",
        Credits: [
            {
                name: "The Kitchn",
                link: "https://www.thekitchn.com"
            }
        ]
    },
    {
        id: 8,
        name: "Chicken Biryani",
        Tags: ["Indian", "Rice", "Non-veg", "Chicken"],
        image: "https://www.recipetineats.com/tachyon/2018/08/Chicken-Biryani_1-1.jpg?resize=900%2C1260&zoom=0.72",
        description: "Chicken Biryani is a fragrant one-pot Indian rice dish. Chicken is cooked with aromatic spices (such as cardamom, cloves, and saffron) and layered with basmati rice, often garnished with fried onions and herbs.",
        ingredients: [
            "3 cups basmati rice, soaked and drained",
            "2 lbs chicken pieces (bone-in or boneless)",
            "2 onions, thinly sliced",
            "3 tomatoes, chopped",
            "4 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "4 cardamom pods",
            "4 cloves",
            "2 bay leaves",
            "1 cinnamon stick",
            "1 teaspoon turmeric",
            "2 teaspoons garam masala",
            "1 teaspoon red chili powder",
            "1/2 teaspoon saffron threads soaked in warm milk",
            "Fresh cilantro and mint leaves",
            "2 tablespoons ghee or oil",
            "Salt to taste"
        ],
        Steps: [
            {
                name: "Cook the chicken",
                process: "Heat ghee/oil in a pan. Fry onions until golden, set half aside. Add garlic, ginger, spices (cardamom, cloves, bay leaves, cinnamon) and fry briefly. Add chicken and tomatoes, along with turmeric, chili, and salt. Cook until chicken is nearly done and gravy thickens."
            },
            {
                name: "Par-boil the rice",
                process: "Boil the soaked rice in salted water with a few whole spices until 70% cooked. Drain and set aside."
            },
            {
                name: "Layer and simmer",
                process: "In a large pot, spread half the chicken mixture. Layer half the rice on top. Sprinkle fried onions, saffron milk, cilantro, and mint. Add remaining chicken and another layer of rice, and garnish similarly. Cover and cook on low heat for 20-30 minutes (dum style) until rice is fully cooked."
            },
            {
                name: "Serve",
                process: "Gently fluff the biryani, keeping layers intact. Serve hot with raita or curry."
            }
        ],
        Tip: "Marinate the chicken beforehand and let the biryani rest for 5-10 minutes after cooking for best texture.",
        Credits: [
            {
                name: "Namrata Hedge",
                link: "https://www.instagram.com/namhegde/"
            }
        ]
    },
    {
        id: 9,
        name: "Green Curry Chicken",
        Tags: ["Thai", "Curry", "Chicken", "Spicy"],
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/06/Thai-Green-Curry-png.png",
        description: "Thai Green Curry Chicken is a vibrant, spicy curry from Thailand. Chicken is simmered in a coconut milk-based curry paste flavored with green chilies, lemongrass, garlic, and fish sauce. It often includes eggplant, bamboo shoots, and basil.",
        ingredients: [
            "2 tablespoons green curry paste",
            "2 cups coconut milk",
            "1 lb chicken (breast or thigh), cut into pieces",
            "1 cup Thai eggplant or zucchini, cut into pieces",
            "1 red bell pepper, sliced",
            "3 kaffir lime leaves (optional)",
            "1 tablespoon fish sauce",
            "1 teaspoon brown sugar",
            "Fresh Thai basil leaves",
            "1 tablespoon vegetable oil"
        ],
        Steps: [
            {
                name: "Fry the curry paste",
                process: "Heat oil in a pot and fry the green curry paste until aromatic. Gradually stir in half of the coconut milk and simmer until it thickens slightly."
            },
            {
                name: "Cook the chicken and veggies",
                process: "Add the chicken pieces and cook until they change color. Pour in remaining coconut milk, fish sauce, sugar, and lime leaves. Simmer and add eggplant and bell pepper; cook until vegetables are tender."
            },
            {
                name: "Finish and serve",
                process: "Turn off heat and stir in basil leaves. Serve the green curry hot with steamed jasmine rice."
            }
        ],
        Tip: "Taste and adjust seasoning with fish sauce or sugar as needed to balance the heat and flavor.",
        Credits: [
            {
                name: "Pim Techamuanvivit",
                link: "https://www.instagram.com/mypassionforcooking/"
            }
        ]
    },
    {
        id: 10,
        name: "Chicken Tacos",
        Tags: ["Mexican", "Street Food", "Chicken"],
        image: "https://betterhomebase.com/wp-content/uploads/2025/04/Chicken-Street-Tacos.webp",
        description: "Chicken Tacos are a Mexican street-food staple. Soft corn or flour tortillas are filled with seasoned, grilled or shredded chicken, then topped with fresh salsa, cilantro, onions, and lime.",
        ingredients: [
            "8 small corn or flour tortillas",
            "1 lb chicken thighs or breasts",
            "1 packet taco seasoning (or homemade blend of cumin, chili powder, garlic powder)",
            "2 tablespoons vegetable oil",
            "1/2 cup chopped onion",
            "1/2 cup chopped cilantro",
            "2 limes, cut into wedges",
            "Salsa or pico de gallo for serving"
        ],
        Steps: [
            {
                name: "Season and cook chicken",
                process: "Rub chicken with taco seasoning. Sear in hot oil over medium-high heat until cooked through (about 5-6 minutes per side). Let rest and slice or shred."
            },
            {
                name: "Warm the tortillas",
                process: "Heat tortillas in a dry skillet until warm and pliable."
            },
            {
                name: "Assemble the tacos",
                process: "Fill each tortilla with chicken, onion, cilantro, and salsa. Squeeze lime juice over the top."
            }
        ],
        Tip: "Use leftover grilled or rotisserie chicken to save time.",
        Credits: [
            {
                name: "Homemade",
                link: ""
            }
        ]
    },
    {
        id: 11,
        name: "Spring Rolls",
        Tags: ["Asian", "Vegetarian", "Snack", "Fried"],
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Veggie-Spring-Rolls.jpg",
        description: "Vegetable Spring Rolls are a popular Asian appetizer or snack. Crisp fried rolls are stuffed with a mixture of shredded cabbage, carrots, and sometimes mushrooms or bean sprouts, seasoned with ginger and soy.",
        ingredients: [
            "12 spring roll wrappers (rice paper or wheat-based)",
            "2 cups shredded cabbage",
            "1 cup shredded carrots",
            "1/2 cup chopped mushrooms",
            "2 cloves garlic, minced",
            "1 tablespoon soy sauce",
            "Oil for frying"
        ],
        Steps: [
            {
                name: "Prepare the filling",
                process: "Stir-fry cabbage, carrots, mushrooms, and garlic with soy sauce until vegetables are tender. Let cool."
            },
            {
                name: "Fill and roll",
                process: "Place a small amount of filling on a wrapper, fold in edges, and roll tightly to enclose."
            },
            {
                name: "Fry the rolls",
                process: "Deep-fry spring rolls in hot oil (350°F) until golden brown and crisp. Drain on paper towels."
            },
            {
                name: "Serve",
                process: "Cut rolls in half and serve hot with sweet chili sauce or soy sauce."
            }
        ],
        Tip: "Keep filling moist to prevent wrappers from tearing; seal edges with a little water or cornstarch paste.",
        Credits: [
            {
                name: "The Kitchn",
                link: "https://www.thekitchn.com"
            }
        ]
    },
    {
        id: 12,
        name: "Chicken Satay",
        Tags: ["Indonesian", "Malaysian", "Grilled", "Chicken"],
        image: "https://www.eatyourselfskinny.com/wp-content/uploads/2023/08/chicken-skewers-5-scaled.jpg",
        description: "Chicken Satay is a Southeast Asian dish of marinated chicken skewers grilled to smoky perfection. It's traditionally served with a rich peanut dipping sauce and a side of cucumber salad.",
        ingredients: [
            "1 lb chicken breast or thigh, cut into strips",
            "2 tablespoons soy sauce",
            "2 tablespoons brown sugar",
            "1 tablespoon curry powder",
            "2 cloves garlic, minced",
            "1 tablespoon grated ginger",
            "1 tablespoon lime juice",
            "Bamboo skewers, soaked",
            "For peanut sauce: 1/2 cup peanut butter, 1/2 cup coconut milk, 1 tablespoon red curry paste, 1 tablespoon fish sauce, 1 tablespoon lime juice"
        ],
        Steps: [
            {
                name: "Marinate the chicken",
                process: "Mix soy sauce, sugar, curry powder, garlic, ginger, and lime juice. Toss the chicken strips in this marinade for at least 30 minutes."
            },
            {
                name: "Grill the skewers",
                process: "Thread chicken onto skewers. Grill or broil until chicken is cooked through and charred at edges."
            },
            {
                name: "Prepare peanut sauce",
                process: "Combine peanut butter, coconut milk, curry paste, fish sauce, and lime juice in a saucepan. Simmer until well combined."
            },
            {
                name: "Serve",
                process: "Serve satay skewers with warm peanut sauce and cucumber salad."
            }
        ],
        Tip: "Soak bamboo skewers in water for 30 minutes before grilling to prevent burning.",
        Credits: [
            {
                name: "Martha Stewart",
                link: "https://www.marthastewart.com"
            }
        ]
    },
    {
        id: 13,
        name: "Mango Sticky Rice",
        Tags: ["Thai", "Dessert", "Sweet", "Rice"],
        image: "https://therecipecritic.com/wp-content/uploads/2023/12/sticky_mango_rice-1025x1536.jpg",
        description: "Mango Sticky Rice is a Thai dessert made with glutinous rice. Sweet coconut milk is mixed into cooked sticky rice and served alongside ripe mango slices.",
        ingredients: [
            "1 cup glutinous (sweet) rice",
            "1 1/2 cups coconut milk",
            "1/4 cup sugar",
            "1/4 teaspoon salt",
            "2 ripe mangoes, peeled and sliced",
            "1 tablespoon toasted sesame seeds (optional)"
        ],
        Steps: [
            {
                name: "Cook the rice",
                process: "Rinse sticky rice until water runs clear. Steam or cook per package instructions until fully tender."
            },
            {
                name: "Make coconut sauce",
                process: "In a saucepan, heat coconut milk with sugar and salt until sugar dissolves. Let cool slightly."
            },
            {
                name: "Assemble the dessert",
                process: "Pour most of the coconut sauce over the hot rice and mix well. Serve sticky rice topped with mango slices and remaining sauce. Sprinkle with sesame seeds."
            }
        ],
        Tip: "Use ripe, sweet mangoes. Leftover sauce can be stored and reheated as a drink.",
        Credits: [
            {
                name: "Pailin Chongchitnant",
                link: "https://www.instagram.com/riverside_oil/"
            }
        ]
    },
    {
        id: 14,
        name: "Churros",
        Tags: ["Mexican", "Dessert", "Sweet", "Fried"],
        image: "https://i0.wp.com/chasety.com/wp-content/uploads/2023/12/realchasecurtis_Churros_with_Chocolate_Dipping_Sauce_sitting_on_f2b58bf9-b01f-4159-b4d8-5a4040906a60.png?w=768&ssl=1",
        description: "Churros are Mexican fried dough pastries. The dough is piped into hot oil, fried until golden, then rolled in cinnamon sugar. Churros are often served with a chocolate dipping sauce.",
        ingredients: [
            "1 cup water",
            "2 tablespoons sugar",
            "1/2 teaspoon salt",
            "2 tablespoons vegetable oil",
            "1 cup all-purpose flour",
            "1/2 cup sugar",
            "1 teaspoon ground cinnamon",
            "Oil for frying",
            "Chocolate sauce (for serving)"
        ],
        Steps: [
            {
                name: "Make the dough",
                process: "Boil water with 2 tbsp sugar, salt, and oil. Remove from heat and stir in flour until a dough forms."
            },
            {
                name: "Fry the churros",
                process: "Heat oil to 350°F. Pipe strips of dough into the oil using a star tip or plastic bag. Fry until golden brown, drain on paper towels."
            },
            {
                name: "Coat and serve",
                process: "Mix 1/2 cup sugar with cinnamon. Roll warm churros in the cinnamon-sugar. Serve with hot chocolate or caramel sauce."
            }
        ],
        Tip: "Keep the oil at steady heat; dough should sizzle immediately on contact.",
        Credits: [
            {
                name: "Nick Malgieri",
                link: "https://www.nypost.com/tag/nick-malgieri/"
            }
        ]
    },
    {
        id: 15,
        name: "Baklava",
        Tags: ["Middle-Eastern", "Dessert", "Sweet", "Pastry"],
        image: "https://recipestime.com/wp-content/uploads/2025/01/sunrise0173_2._A_tray_of_pistachio_baklava_with_golden_flaky__76e99147-b7fc-4d6c-86f4-824459c907d5_0.webp",
        description: "Baklava is a rich Middle Eastern dessert. It consists of layers of phyllo dough filled with chopped nuts (pistachios, walnuts, or almonds), baked until crisp, and drenched in honey or sugar syrup.",
        ingredients: [
            "1 package phyllo dough (thawed)",
            "2 cups mixed nuts (pistachios, walnuts, almonds), finely chopped",
            "1 teaspoon ground cinnamon",
            "1/2 cup butter, melted",
            "1/2 cup honey or sugar syrup"
        ],
        Steps: [
            {
                name: "Prepare layers",
                process: "Preheat oven to 350°F. Brush a baking dish with butter. Layer phyllo sheets in the dish, brushing each with butter, to use half the package."
            },
            {
                name: "Add nut filling",
                process: "Combine chopped nuts and cinnamon. Spread evenly over the phyllo base."
            },
            {
                name: "Top with phyllo",
                process: "Layer remaining phyllo sheets over the nuts, buttering each as before. Use about 20 sheets total."
            },
            {
                name: "Bake and syrup",
                process: "Cut baklava into diamonds. Bake until golden (about 45 min). Pour warm honey or sugar syrup over the hot baklava. Cool completely before serving."
            }
        ],
        Tip: "Cut the baklava before baking for even pieces, and pour syrup only once it has cooled slightly to allow absorption.",
        Credits: [
            {
                name: "Sally McKenney",
                link: "https://www.gimmedelicious.com"
            }
        ]
    },
    {
        id: 16,
        name: "Gulab Jamun",
        Tags: ["Indian", "Dessert", "Sweet", "Milk-based"],
        image: "https://www.munatycooking.com/wp-content/uploads/2020/10/Bread-Gulab-Jamun-Recipe-3.jpg",
        description: "Gulab Jamun is a classic Indian dessert. It features deep-fried milk-solid dough balls soaked in a warm sugar syrup flavored with cardamom and rose water.",
        ingredients: [
            "1 cup milk powder",
            "1/4 cup all-purpose flour",
            "1/4 teaspoon baking soda",
            "2 tablespoons butter (softened)",
            "Milk (enough to make a dough)",
            "Oil or ghee for frying",
            "For syrup: 1 cup sugar, 1 cup water, 4 cardamom pods, 1 teaspoon rose water"
        ],
        Steps: [
            {
                name: "Make dough balls",
                process: "Mix milk powder, flour, and baking soda. Add butter and just enough milk to form a soft dough. Roll into small, smooth balls."
            },
            {
                name: "Prepare syrup",
                process: "Boil sugar, water, and crushed cardamom until slightly thickened. Remove from heat and stir in rose water."
            },
            {
                name: "Fry the balls",
                process: "Heat oil or ghee to medium heat. Fry dough balls until golden brown. Drain briefly."
            },
            {
                name: "Soak in syrup",
                process: "Place fried balls in the warm syrup. Let them soak for at least 30 minutes before serving."
            }
        ],
        Tip: "Ensure oil is not too hot or too cold; medium heat cooks jamuns evenly.",
        Credits: [
            {
                name: "Sheela Prakash",
                link: "https://www.instagram.com/gordammi/"
            }
        ]
    },
    {
        id: 17,
        name: "Ratatouille",
        Tags: ["French", "Vegetarian", "Vegan", "Stew"],
        image: "https://www.vibrantplate.com/wp-content/uploads/2022/07/Homemade-Classic-French-Ratatouille-02-1200x1800.jpg.webp",
        description: "Ratatouille is a traditional French Provençal vegetable stew. It’s made by slowly simmering tomatoes with eggplant, zucchini, peppers, onions, garlic, and herbs until tender.",
        ingredients: [
            "1 eggplant, cubed",
            "2 zucchinis, sliced",
            "1 red bell pepper, chopped",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "4 tomatoes, diced (or 1 can crushed tomatoes)",
            "2 tablespoons olive oil",
            "1 teaspoon fresh thyme or herbes de Provence",
            "Salt and pepper to taste",
            "Fresh basil for garnish"
        ],
        Steps: [
            {
                name: "Sauté the vegetables",
                process: "Heat oil in a large pan. Add onion and garlic; cook until translucent. Add eggplant, zucchini, and pepper; cook until they begin to soften."
            },
            {
                name: "Add tomatoes and herbs",
                process: "Stir in tomatoes and thyme (or herbs de Provence). Season with salt and pepper. Simmer the mixture, partially covered, for 20-30 minutes until vegetables are fully tender and flavors meld."
            },
            {
                name: "Finish",
                process: "Taste and adjust seasoning. Garnish with basil and serve warm as a side or main with crusty bread."
            }
        ],
        Tip: "For richer flavor, sauté vegetables in stages so each type gets slightly browned before simmering together.",
        Credits: [
            {
                name: "Julia Child",
                link: "https://www.bonappetit.com"
            }
        ]
    },
    {
        id: 18,
        name: "Vegetable Samosas",
        Tags: ["Indian", "Snack", "Vegetarian"],
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-1.jpg",
        description: "Vegetable Samosas are deep-fried Indian pastries. They consist of a spicy potato and pea filling wrapped in a flour dough, and are commonly served with chutney.",
        ingredients: [
            "For the dough: 2 cups all-purpose flour, 2 tablespoons oil, 1/2 teaspoon salt, water to bind",
            "For the filling: 2 potatoes (boiled, chopped), 1 cup peas, 1 onion (chopped), 2 cloves garlic, 1 teaspoon grated ginger, 1 teaspoon cumin seeds, 1/2 teaspoon garam masala, 1/2 teaspoon turmeric, 1 teaspoon chili powder, Salt and oil"
        ],
        Steps: [
            {
                name: "Make the dough",
                process: "Combine flour, oil, and salt. Add enough water to form a firm dough. Cover and let rest."
            },
            {
                name: "Prepare the filling",
                process: "Heat oil in a pan. Fry cumin seeds, then sauté onion, garlic, and ginger. Add turmeric, chili, garam masala. Add potatoes and peas, salt, and cook until blended."
            },
            {
                name: "Shape samosas",
                process: "Divide dough into balls. Roll each into a thin oval, cut in half. Form a cone from each half, fill with potato mixture, and seal edges with water."
            },
            {
                name: "Fry the samosas",
                process: "Deep-fry samosas in hot oil until golden brown and crisp. Drain on paper towels and serve with chutney."
            }
        ],
        Tip: "Ensure the filling is cool before shaping to avoid tearing the dough.",
        Credits: [
            {
                name: "Nisha Vora",
                link: "https://www.instagram.com/foodfetishat/"
            }
        ]
    },
    {
        id: 19,
        name: "Bibimbap",
        Tags: ["Korean", "Non-veg", "Rice"],
        image: "https://www.recipetineats.com/tachyon/2019/05/Bibimbap_3.jpg?resize=900%2C1260&zoom=0.72",
        description: "Bibimbap is a Korean mixed rice bowl. It features white rice topped with an assortment of sautéed vegetables, spicy gochujang (chili paste), and usually a fried egg or sliced marinated meat.",
        ingredients: [
            "2 cups cooked rice",
            "1 cup bean sprouts",
            "1 cup shredded spinach",
            "1 carrot, julienned",
            "4 shiitake mushrooms, sliced",
            "2 eggs",
            "2 tablespoons gochujang (Korean red chili paste)",
            "1 tablespoon sesame oil",
            "Soy sauce and garlic for seasoning vegetables"
        ],
        Steps: [
            {
                name: "Cook the vegetables",
                process: "Quickly sauté bean sprouts with salt, spinach with garlic and sesame oil, carrots and mushrooms separately in oil with a splash of soy. Season each veggie accordingly."
            },
            {
                name: "Fry the egg",
                process: "In a little oil, fry eggs sunny side up so yolks remain runny."
            },
            {
                name: "Assemble the bowl",
                process: "Divide rice among bowls. Arrange vegetables on top in sections. Place fried egg in center. Add a dollop of gochujang and drizzle with sesame oil."
            },
            {
                name: "Mix and serve",
                process: "Just before eating, mix everything together, combining the spicy sauce evenly with rice and vegetables."
            }
        ],
        Tip: "Use a stone bowl (dolsot) for sizzling bibimbap if available, to get a crispy rice bottom.",
        Credits: [
            {
                name: "Maangchi",
                link: "https://www.maangchi.com"
            }
        ]
    },
    {
        id: 20,
        name: "Ceviche",
        Tags: ["Latin-American", "Seafood", "Gluten-free"],
        image: "https://www.cucinabyelena.com/wp-content/uploads/2024/05/Easy-Shrimp-Ceviche-Recipe-So-Fresh-8-1-scaled.jpg",
        description: "Ceviche is a Latin American seafood dish. Fresh raw fish (or shrimp) is cured in citrus juice (usually lime) with onions, cilantro, and chili peppers, served cold.",
        ingredients: [
            "1 lb fresh white fish fillet (like tilapia or bass) or shrimp, cut into bite-size pieces",
            "1/2 red onion, thinly sliced",
            "1-2 serrano or jalapeño chilies, minced",
            "Juice of 6-8 limes",
            "1/2 cup chopped cilantro",
            "Salt and pepper to taste",
            "Tortilla chips or tostadas (for serving)"
        ],
        Steps: [
            {
                name: "Marinate the fish",
                process: "Place fish or shrimp in a glass or ceramic bowl. Pour lime juice over to cover. Add onion and chili. Cover and refrigerate until the seafood turns opaque (about 15-30 minutes)."
            },
            {
                name: "Add cilantro and serve",
                process: "Once 'cooked' by the acid, drain some lime juice if needed. Stir in chopped cilantro, season with salt and pepper. Serve chilled with tortilla chips or on lettuce leaves."
            }
        ],
        Tip: "Use very fresh, sushi-grade fish and always refrigerate during marinating for safety.",
        Credits: [
            {
                name: "Jose Garces",
                link: "https://www.instagram.com/joseluisgarces"
            }
        ]
    },
    {
        id: 21,
        name: "Paella (Seafood)",
        Tags: ["Spanish", "Seafood", "Rice"],
        image: "https://recipesvibrant.com/wp-content/uploads/2024/08/9296e7be-b4a4-4c20-8a48-c1ba4de000ce.png.webp",
        description: "Seafood Paella is a famous Spanish rice dish. Saffron-flavored rice is cooked with a mix of seafood (mussels, clams, shrimp, etc.), vegetables, and aromatics in a wide shallow pan.",
        ingredients: [
            "1 1/2 cups paella rice (like bomba or arborio)",
            "3 cups seafood stock or broth",
            "1/4 teaspoon saffron threads",
            "1 onion, chopped",
            "1 red bell pepper, diced",
            "2 cloves garlic, minced",
            "8-10 mussels or clams (cleaned)",
            "8 large shrimp, peeled and deveined",
            "1/2 cup peas",
            "Olive oil, salt, and smoked paprika"
        ],
        Steps: [
            {
                name: "Sauté base vegetables",
                process: "Heat olive oil in a paella pan or large skillet. Sauté onion, bell pepper, and garlic until softened."
            },
            {
                name: "Toast the rice",
                process: "Add rice and paprika; stir to coat grains. Pour in hot stock with saffron and bring to a simmer."
            },
            {
                name: "Add seafood and cook",
                process: "Nestle mussels and shrimp into the rice. Simmer uncovered without stirring until rice is almost cooked and most liquid absorbed."
            },
            {
                name: "Finish",
                process: "Sprinkle peas over top and cover the pan with foil or lid to steam a few minutes. Discard any unopened shells. Serve directly from the pan."
            }
        ],
        Tip: "Do not stir the rice after adding stock; a socarrat (crispy crust) will form at the bottom if cooked properly.",
        Credits: [
            {
                name: "José Andrés",
                link: "https://www.josandres.com"
            }
        ]
    },
    {
        id: 22,
        name: "Piri Piri Chicken",
        Tags: ["Portuguese", "African", "Chicken", "Spicy"],
        image: "https://www.simplyrecipes.com/thmb/qLrk78uP7jjl8AMxa-3NOViKbqw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Piri-Piri-Roasted-Chicken-LEAD-02-cf14e7c991194b7cb616949554618d81.jpg",
        description: "Piri Piri Chicken is a Portuguese-African grilled chicken dish. Chicken is marinated in a spicy chili (piri piri) and citrus marinade, then grilled.",
        ingredients: [
            "1 whole chicken (spatchcocked) or 4 chicken legs",
            "3 tablespoons piri piri sauce or hot chili sauce",
            "2 tablespoons lemon juice",
            "2 cloves garlic, minced",
            "1 teaspoon smoked paprika",
            "1 tablespoon olive oil",
            "Salt"
        ],
        Steps: [
            {
                name: "Marinate the chicken",
                process: "Mix piri piri sauce, lemon juice, garlic, paprika, oil, and salt. Rub all over the chicken pieces. Marinate for at least 2 hours (overnight is best)."
            },
            {
                name: "Grill the chicken",
                process: "Preheat grill or oven broiler. Cook chicken until well charred and cooked through, turning and basting with leftover marinade."
            },
            {
                name: "Serve",
                process: "Let chicken rest for a few minutes, then serve with lemon wedges and a salad."
            }
        ],
        Tip: "Use the tender breast side down initially on the grill for juicier meat.",
        Credits: [
            {
                name: "Rick Stein",
                link: "https://www.rickstein.com"
            }
        ]
    },
    {
        id: 23,
        name: "Chicken Enchiladas",
        Tags: ["Mexican", "Chicken", "Bake"],
        image: "https://insanelygoodrecipes.com/wp-content/uploads/2024/05/Chicken-Enchiladas-2.jpg",
        description: "Chicken Enchiladas are a Mexican baked dish. Corn tortillas are filled with shredded chicken, rolled, and covered in chili sauce and cheese, then baked until bubbly.",
        ingredients: [
            "8 corn tortillas",
            "2 cups shredded cooked chicken",
            "1 cup enchilada sauce (red or green)",
            "1 cup shredded cheese (cheddar or Monterey Jack)",
            "1/2 cup chopped onion",
            "1/4 cup chopped cilantro (for garnish)",
            "Sour cream and extra sauce to serve"
        ],
        Steps: [
            {
                name: "Fill the tortillas",
                process: "Preheat oven to 350°F. Warm tortillas briefly to make pliable. Spoon some chicken and onion onto each, roll tightly, and place seam-side down in a baking dish."
            },
            {
                name: "Add sauce and cheese",
                process: "Pour enchilada sauce evenly over the rolled tortillas. Sprinkle with shredded cheese."
            },
            {
                name: "Bake",
                process: "Bake for 20-25 minutes until hot and cheese is melted."
            },
            {
                name: "Garnish and serve",
                process: "Top with cilantro, sour cream, or avocado if desired, and serve immediately."
            }
        ],
        Tip: "Use warm sauce to prevent the tortillas from tearing when rolled.",
        Credits: [
            {
                name: "Yucatan Kids",
                link: "https://www.yucatankitchen.com"
            }
        ]
    },
    {
        id: 24,
        name: "Greek Salad",
        Tags: ["Greek", "Vegetarian", "Salad", "Mediterranean"],
        image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg",
        description: "Greek Salad (Horiatiki) is a fresh Mediterranean salad. It typically includes tomatoes, cucumber, bell pepper, red onion, Kalamata olives, and feta cheese, dressed with olive oil and oregano.",
        ingredients: [
            "3 tomatoes, chopped",
            "1 cucumber, sliced",
            "1/2 red onion, thinly sliced",
            "1 green bell pepper, sliced",
            "1/2 cup Kalamata olives",
            "4 oz feta cheese, cubed",
            "2 tablespoons olive oil",
            "1 tablespoon red wine vinegar",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste"
        ],
        Steps: [
            {
                name: "Combine the vegetables",
                process: "Toss the tomatoes, cucumber, bell pepper, and onion in a salad bowl."
            },
            {
                name: "Add olives and feta",
                process: "Scatter olives and feta cubes over the vegetables."
            },
            {
                name: "Dress the salad",
                process: "Drizzle olive oil and vinegar over the top. Sprinkle with oregano, salt, and pepper."
            },
            {
                name: "Serve",
                process: "Toss gently before serving as a side or light meal."
            }
        ],
        Tip: "Use good-quality extra-virgin olive oil and let the salad sit a few minutes for flavors to meld.",
        Credits: [
            {
                name: "Dionysus Martis",
                link: "https://www.thegreekvegan.com"
            }
        ]
    },
    {
        id: 25,
        name: "Kung Pao Chicken",
        Tags: ["Chinese", "Stir-fry", "Spicy", "Chicken"],
        image: "https://www.oliveandmango.com/images/uploads/2020_04_27_takeout_style_kung_pao_chicken_2.jpg",
        description: "Kung Pao Chicken is a classic Sichuan stir-fry. It features diced chicken stir-fried with Sichuan peppercorns, dried red chilies, and peanuts in a savory-spicy sauce.",
        ingredients: [
            "1 lb chicken breast or thighs, diced",
            "2 tablespoons soy sauce",
            "1 tablespoon rice vinegar",
            "1 tablespoon cornstarch",
            "3 tablespoons vegetable oil",
            "8-10 dried red chilies",
            "1 teaspoon Sichuan peppercorns (optional)",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, minced",
            "4 green onions, sliced",
            "1/2 cup roasted peanuts",
            "For the sauce: 2 tablespoons soy sauce, 1 tablespoon hoisin sauce, 1 tablespoon water, 1 teaspoon sugar"
        ],
        Steps: [
            {
                name: "Marinate the chicken",
                process: "Toss diced chicken with soy sauce, vinegar, and cornstarch. Set aside for 10 minutes."
            },
            {
                name: "Stir-fry aromatics",
                process: "Heat oil in a wok. Fry dried chilies and peppercorns until fragrant (be careful not to burn them). Add garlic, ginger, and white parts of scallions; stir-fry briefly."
            },
            {
                name: "Cook the chicken",
                process: "Add marinated chicken and stir-fry until almost cooked through. Pour in the prepared sauce and continue cooking until the sauce thickens and coats the chicken."
            },
            {
                name: "Add peanuts and finish",
                process: "Stir in peanuts and green parts of scallions. Toss to combine and serve immediately with rice."
            }
        ],
        Tip: "Adjust the number of chilies to control spiciness, and use cornstarch slurry (cornstarch + water) to thicken the sauce if needed.",
        Credits: [
            {
                name: "Ken Hom",
                link: "https://www.khom.com"
            }
        ]
    }
    
   

]


export const regions = [
  { name: "Indian",
    img: "https://flavornest.net/wp-content/uploads/2025/05/Fragrant-Chicken-Biryani-768x768.webp"
   },
  { name: "Italian",
    img: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg"
   },
  { name: "Jamaican",
    img: "https://static01.nyt.com/images/2024/07/02/multimedia/Jerk-Chickenrex-gkmz/Jerk-Chickenrex-gkmz-mediumSquareAt3X.jpg"
   },
  { name: "Chinese",
    img: "https://www.oliveandmango.com/images/uploads/2020_04_27_takeout_style_kung_pao_chicken_2.jpg"
   },
  { name: "malaysian",
    img: "https://www.eatyourselfskinny.com/wp-content/uploads/2023/08/chicken-skewers-5-scaled.jpg"
   },
  { name: "Middle-Eastern",
    img: "https://png.pngtree.com/thumb_back/fw800/background/20250611/pngtree-falafel-wrap-with-crispy-balls-hummus-and-veggies-in-pita-bread-image_17414907.jpg"
   },
  { name: "Thai",
    img: "https://therecipecritic.com/wp-content/uploads/2023/12/sticky_mango_rice-1025x1536.jpg"
   },
  { name: "Mexican",
    img: "https://betterhomebase.com/wp-content/uploads/2025/04/Chicken-Street-Tacos.webp"
   },
  { name: "Mediterranean",
    img: "https://hips.hearstapps.com/hmg-prod/images/greek-salad-lead-642f29241cceb.jpg"
   }
]

export const filterTags = [
  "Non-veg",
  "Vegetarian",
  "Chicken",
  "Vegan",
  "Sweet",
  "Snack",
  "Fried",
  "Curry",
  "Pasta",
  "Rice",
  "Spicy",
]
