import { MenuItem, ItemStatus } from "@/types";

const defaultStatus: ItemStatus = {
  isDisabled: false,
  isHidden: false,
  isComingSoon: false,
  isPromo: false,
  isBestSeller: false,
};

export const menus: MenuItem[] = [
  // Today’s Specialty
  {
    id: "specialty-1",
    name: "Australian Lamb Shoulder",
    image: "/Images/specialty-1.jpg",
    description: `Enjoy two pieces of premium Australian lamb shoulder (total weight 280–300g), expertly grilled to tender perfection for a juicy, flavorful bite in every piece. Served with rich black pepper sauce and your choice of side:\n
      1) Fries & Coleslaw
      or
      2) Mashed Potatoes & Mixed Vegetables`,
    category: "Today’s Specialty",
    price: {
      currency: "RM",
      standard: {
        current: "29.90",
        original: "29.90",
      },
    },
    status: { ...defaultStatus },
  },
  {
    id: "specialty-2",
    name: "NZ Sirloin Steak (200g)",
    image: "/Images/specialty-2.jpg",
    description: `Premium New Zealand sirloin steak, perfectly grilled to your preferred doneness and served with rich black pepper sauce. Accompanied by your choice of side:\n
      1) Mashed potato with coleslaw
      or
      2) Mashed potato with mixed vegetables`,
    category: "Today’s Specialty",
    price: {
      currency: "RM",
      standard: {
        current: "34.90",
        original: "34.90",
      },
    },
    status: { ...defaultStatus },
  },

  // Starters
  {
    id: "starters-1",
    name: "Fries",
    image: "/Images/starters-1.jpg",
    description:
      "Crispy golden potato fries, lightly salted for the perfect crunch with every bite.",
    category: "Starters",
    price: { currency: "RM", standard: { current: "7.90", original: "7.90" } },
    status: { ...defaultStatus },
  },
  {
    id: "starters-2",
    name: "Onion Ring",
    image: "/Images/starters-2.jpg",
    description:
      "Thick-cut onion rings coated in a crispy golden batter, perfectly fried and served hot with rich marinara sauce for the perfect bite.",
    category: "Starters",
    price: {
      currency: "RM",
      standard: {
        current: "8.90",
        original: "8.90",
      },
    },
    status: { ...defaultStatus },
  },
  {
    id: "starters-3",
    name: "Creamed Mash Potatoes",
    image: "/Images/starters-3.jpg",
    description:
      "Smooth and buttery mashed potatoes whipped to a creamy texture, served warm with rich and flavorful Rax sauce for the perfect comforting side dish.",
    category: "Starters",
    price: {
      currency: "RM",
      standard: {
        current: "7.90",
        original: "7.90",
      },
    },
    status: { ...defaultStatus },
  },
  {
    id: "starters-4",
    name: "Homemade Mushroom Soup",
    image: "/Images/starters-4.jpg",
    description:
      "Rich and creamy mushroom soup made from fresh mushrooms, slow-cooked to bring out their earthy flavor. Served warm with a slice of toasted bread for the perfect comforting start to your meal.",
    category: "Starters",
    price: {
      currency: "RM",
      standard: {
        current: "8.90",
        original: "8.90",
      },
    },
    status: { ...defaultStatus },
  },
  {
    id: "starters-5",
    name: "Mozzarella Sticks",
    image: "/Images/starters-5.jpg",
    description:
      "Enjoy 5 pieces of crispy, golden-fried mozzarella sticks. Crunchy on the outside and perfectly gooey inside. Served hot with your choice of dipping sauce.",
    category: "Starters",
    price: {
      currency: "RM",
      standard: {
        current: "10.90",
        original: "10.90",
      },
    },
    status: { ...defaultStatus },
  },
  {
    id: "starters-6",
    name: "Nachos with Beef Con Carne",
    image: "/Images/starters-6.jpg",
    description:
      "Crisp tortilla chips topped with savoury beef con carne and nachos cheese drizzle.",
    category: "Starters",
    price: {
      currency: "RM",
      standard: {
        current: "14.90",
        original: "14.90",
      },
    },
    status: { ...defaultStatus },
  },
  {
    id: "starters-7",
    name: "Buffalo Chicken Wing",
    label: "(5 pcs)",
    image: "/Images/starters-7.jpg",
    description: "Sweet & spicy chicken wings with creamy garlic sauce.",
    category: "Starters",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
    status: { ...defaultStatus },
  },

  // Mixed Grilled
  {
    id: "mixed-grilled-1",
    name: "Lamb + Grilled Chicken",
    image: "/Images/mixed-grilled-1.jpg",
    description:
      "A perfect duo of juicy grilled lamb and tender chicken, served with your choice of fries & coleslaw or fries & mix vegetables, and paired with two sauces - our signature black pepper sauce and one sauce of your choice.",
    category: "Mixed Grilled",
    price: {
      currency: "RM",
      standard: {
        current: "39.90",
        original: "39.90",
      },
    },
    status: { ...defaultStatus },
  },
  {
    id: "mixed-grilled-2",
    name: "Beef + Grilled Chicken",
    image: "/Images/mixed-grilled-2.jpg",
    description:
      "Savory juicy beef paired with grilled chicken, served with your choice of fries & coleslaw or fries & mix vegetables, and accompanied by two sauces — black pepper and one of your choice.",
    category: "Mixed Grilled",
    price: {
      currency: "RM",
      standard: {
        current: "44.90",
        original: "44.90",
      },
    },
    status: { ...defaultStatus },
  },
  {
    id: "mixed-grilled-3",
    name: "Mixed Grilled Lamb + Grilled Beef",
    image: "/Images/mixed-grilled-3.jpg",
    description:
      "A bold and flavorful duo of tender grilled lamb and juicy beef, served with golden fries, fresh coleslaw, and our rich black pepper sauce for the ultimate grill experience.",
    category: "Mixed Grilled",
    price: {
      currency: "RM",
      standard: {
        current: "99.99",
        original: "99.99",
      },
    },
    status: { isHidden: true },
  },
  {
    id: "mixed-grilled-4",
    name: "Mixed Grilled Lamb + Grilled Salmon",
    image: "/Images/mixed-grilled-4.jpg",
    description:
      "A luxurious pairing of juicy grilled lamb and tender salmon, served with golden fries, crisp coleslaw, and our signature creamy garlic sauce — indulgence in every bite.",
    category: "Mixed Grilled",
    price: {
      currency: "RM",
      standard: {
        current: "99.99",
        original: "99.99",
      },
    },
    status: { isHidden: true },
  },
  {
    id: "mixed-grilled-5",
    name: "Mixed Grilled Salmon + Grilled Chicken",
    image: "/Images/mixed-grilled-5.jpg",
    description:
      "Delicate grilled salmon paired with tender chicken, served hot with golden fries, crisp coleslaw, and our creamy garlic sauce — a delightful balance of flavor and freshness.",
    category: "Mixed Grilled",
    price: {
      currency: "RM",
      standard: {
        current: "99.99",
        original: "99.99",
      },
    },
    status: { isHidden: true },
  },
  {
    id: "mixed-grilled-6",
    name: "Mixed Grilled Salmon + Grilled Beef",
    image: "/Images/mixed-grilled-6.jpg",
    description:
      "A refined blend of tender grilled salmon and juicy beef, served with golden fries, fresh coleslaw, and our signature creamy garlic sauce — a true taste of indulgence.",
    category: "Mixed Grilled",
    price: {
      currency: "RM",
      standard: {
        current: "99.99",
        original: "99.99",
      },
    },
    status: { isHidden: true },
  },

  // Chicken Feast
  {
    id: "chicken-1",
    name: "Cabin Chicken Chop (Chicken Breast Part) ",
    label: "(4 pcs)",
    image: "/Images/chicken-1.jpg",
    description:
      "Enjoy 4 pieces of tender chicken breast coated with crispy breadcrumbs and deep-fried to golden perfection. Served with rich black pepper sauce, accompanied by fries and coleslaw for a hearty and satisfying meal.",
    category: "Chicken Feast",
    price: {
      currency: "RM",
      standard: {
        current: "10.90",
        original: "10.90",
      },
    },
  },
  {
    id: "chicken-2",
    name: "XXL Cabin Chicken Chop",
    label: "(6 pcs)",
    image: "/Images/chicken-2.jpg",
    description:
      "Enjoy 6 pieces of tender chicken breast coated with crispy breadcrumbs and deep-fried to golden perfection. Served with rich black pepper sauce, accompanied by fries and coleslaw for an extra hearty and satisfying meal.",
    category: "Chicken Feast",
    price: {
      currency: "RM",
      standard: {
        current: "16.90",
        original: "16.90",
      },
    },
    status: { isHidden: true },
  },
  {
    id: "chicken-3",
    name: "Mushroom Chicken Mushroom",
    image: "/Images/chicken-3.jpg",
    description:
      "Juicy chicken breast coated with crispy breadcrumbs, topped with creamy mushroom sauce and melted mozzarella cheese. Served with fries and coleslaw for a rich, flavorful, and satisfying meal.",
    category: "Chicken Feast",
    price: {
      currency: "RM",
      standard: {
        current: "14.90",
        original: "14.90",
      },
    },
  },
  {
    id: "chicken-4",
    name: "Grilled Chicken Chop (Thigh Part)",
    image: "/Images/chicken-4.jpg",
    description:
      "Juicy grilled chicken thigh served with savoury sauce, crispy fries, and coleslaw.",
    category: "Chicken Feast",
    price: {
      currency: "RM",
      standard: {
        current: "15.90",
        original: "15.90",
      },
    },
  },
  {
    id: "chicken-5",
    name: "Salted Egg Chicken (Thigh Part)",
    image: "/Images/chicken-5.jpg",
    description:
      "Chicken thigh coated with seasoned flour, fried to crispy perfection, serve with salted egg sauce, fries and coleslaw.",
    category: "Chicken Feast",
    price: {
      currency: "RM",
      standard: {
        current: "17.90",
        original: "17.90",
      },
    },
  },
  {
    id: "chicken-6",
    name: "Cheesy Chicken Ball",
    image: "/Images/chicken-6.jpg",
    description:
      "Crispy on the outside, juicy chicken on the inside, with melted cheese at the center for that perfect bite-sized delight.",
    category: "Chicken Feast",
    price: {
      currency: "RM",
      standard: {
        current: "13.90",
        original: "13.90",
      },
    },
  },

  // From The Sea
  {
    id: "sea-1",
    name: "Fish & Chips",
    image: "/Images/sea-1.jpg",
    description:
      "Crispy golden breadcrumbs fish served with fries, savoury sauce or tartar sauce.",
    category: "From The Sea",
    price: {
      currency: "RM",
      standard: {
        current: "16.90",
        original: "16.90",
      },
    },
  },
  {
    id: "sea-2",
    name: "Salmon (150g)",
    image: "/Images/sea-2.jpg",
    description:
      "Enjoy a 150-gram fillet of fresh  salmon, grilled to perfection with crispy skin and tender, flaky flesh. Served with creamy garlic sauce.",
    category: "From The Sea",
    price: {
      currency: "RM",
      standard: {
        current: "29.90",
        original: "29.90",
      },
    },
  },

  // Pasta
  {
    id: "pasta-1",
    name: "Veggie Pasta Aglio Olio",
    image: "/Images/pasta-1.jpg",
    description:
      "A delightful blend of al dente pasta tossed with fresh sautéed vegetables in a light, flavorful sauce. Perfectly seasoned for a wholesome and satisfying vegetarian meal.",
    category: "Pasta",
    price: {
      currency: "RM",
      standard: {
        current: "15.90",
        original: "15.90",
      },
    },
  },
  {
    id: "pasta-2",
    name: "Aglio with Grilled Chicken  ",
    image: "/Images/pasta-2.jpg",
    description:
      "Pasta sauteed with garlic, chili flakes, and topped with tender and juicy grilled chicken thigh.",
    category: "Pasta",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
  },
  {
    id: "pasta-3",
    name: "Aglio with Seafood ",
    image: "/Images/pasta-3.jpg",
    description:
      "A classic Italian-style pasta tossed with garlic and olive oil, featuring juicy prawns and tender squid. Light, aromatic, and perfectly balanced for seafood lovers.",
    category: "Pasta",
    price: {
      currency: "RM",
      standard: {
        current: "22.90",
        original: "22.90",
      },
    },
  },
  {
    id: "pasta-4",
    name: "Alfredo with Grilled Chicken",
    image: "/Images/pasta-4.jpg",
    description:
      "Rich, Creamy Alfredo sauce coats every strand of pasta, topped with juicy, perfectly grilled chicken.",
    category: "Pasta",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
  },
  {
    id: "pasta-5",
    name: "Chilli, Garlic Shrimp Pasta",
    image: "/Images/pasta-5.jpg",
    description:
      "Pasta tossed with garlic, chili flakes, and served with juicy shrimp.",
    category: "Pasta",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
  },
  {
    id: "pasta-6",
    name: "Salted Egg Chic Pasta (Chicken Thigh)",
    image: "/Images/pasta-6.jpg",
    description:
      "Creamy, savory salted egg sauce coats every strand of pasta, topped with juicy and flavorful chicken thigh.",
    category: "Pasta",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
  },
  {
    id: "pasta-7",
    name: "Salted Egg Shrimp Pasta",
    image: "/Images/pasta-7.jpg",
    description:
      "Creamy and savory salted egg sauce coats every strand of pasta, topped with juicy shrimp for a rich, flavorful, and indulgent pasta experience.",
    category: "Pasta",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
  },
  {
    id: "pasta-8",
    name: "Meatball Pasta",
    image: "/Images/pasta-8.jpg",
    description: "Pasta served with beef meatballs in rich tomato sauce.",
    category: "Pasta",
    price: {
      currency: "RM",
      standard: {
        current: "18.90",
        original: "18.90",
      },
    },
  },
  {
    id: "pasta-9",
    name: "Mac ‘N’ Cheese (Chicken Thigh)",
    image: "/Images/pasta-9.jpg",
    description:
      "Creamy macaroni and cheese topped with tender, juicy chicken thigh pieces.",
    category: "Pasta",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
  },
  {
    id: "pasta-10",
    name: "Mac ‘N’ Cheese (Shrimp)",
    image: "/Images/pasta-10.jpg",
    description:
      "Creamy macaroni and cheese topped with tender, succulent shrimp.",
    category: "Pasta",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
  },

  // Burgers
  {
    id: "burgers-1",
    name: "Cheese Burger (Beef)",
    image: "/Images/burgers-1.jpg",
    description:
      "A tender beef patty grilled to juicy perfection, topped with melted cheese slice and crispy onion rings for extra crunch and flavor. Served in a soft burger bun with fresh lettuce and tomato, paired with golden fries on the side.",
    category: "Burgers",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
  },
  {
    id: "burgers-2",
    name: "Crispy Chicken Burger",
    image: "/Images/burgers-2.jpg",
    description:
      "A juicy chicken thigh coated in golden, crunchy breadcrumbs, deep-fried to perfection, and served in a soft burger bun. Layered with melted cheese sauce, fresh lettuce, and sliced tomato for a rich, savory flavor and satisfying crunch. Served with crispy fries on the side.",
    category: "Burgers",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
  },
  {
    id: "burgers-3",
    name: "Crispy Fish Burger",
    image: "/Images/burgers-3.jpg",
    description:
      "Crispy, golden-fried fish fillet layered with fresh lettuce, tomato, and tartar sauce, served in a soft toasted bun for a deliciously crunchy and satisfying bite.",
    category: "Burgers",
    price: {
      currency: "RM",
      standard: {
        current: "19.90",
        original: "19.90",
      },
    },
  },

  // For Kiddies
  {
    id: "kids-1",
    name: "Kid’s Chicken Finger",
    image: "/Images/kids-1.jpg",
    description:
      "Crispy chicken fingers served with a side of golden fries – a perfect meal for little hands.",
    category: "For Kiddies",
    price: {
      currency: "RM",
      standard: {
        current: "7.90",
        original: "7.90",
      },
    },
  },
  {
    id: "kids-2",
    name: "Kid’s Fish & Fries",
    image: "/Images/kids-2.jpg",
    description:
      "Crispy fried fish fillet served with golden fries — simple and tasty for kids.",
    category: "For Kiddies",
    price: {
      currency: "RM",
      standard: {
        current: "7.90",
        original: "7.90",
      },
    },
    status: { isHidden: true },
  },
  {
    id: "kids-3",
    name: "Kid’s Alfredo Pasta",
    image: "/Images/kids-3.jpg",
    description:
      "Creamy pasta with tasty chicken ham – perfectly portioned for little tummies!",
    category: "For Kiddies",
    price: {
      currency: "RM",
      standard: {
        current: "8.90",
        original: "8.90",
      },
    },
  },

  // Extras
  {
    id: "extras-1",
    name: "Black Pepper Sauce",
    image: "/Images/extras-1.jpg",
    description: "Savory black pepper sauce.",
    category: "Extras",
    price: {
      currency: "RM",
      standard: {
        current: "1.00",
        original: "1.00",
      },
    },
  },
  {
    id: "extras-2",
    name: "Rax Sauce",
    image: "/Images/extras-2.jpg",
    description: "Signature Rax dipping sauce.",
    category: "Extras",
    price: {
      currency: "RM",
      standard: {
        current: "1.00",
        original: "1.00",
      },
    },
  },
  {
    id: "extras-3",
    name: "Tartar Sauce",
    image: "/Images/extras-3.jpg",
    description: "Tangy tartar sauce.",
    category: "Extras",
    price: {
      currency: "RM",
      standard: {
        current: "1.50",
        original: "1.50",
      },
    },
  },
  {
    id: "extras-4",
    name: "Garlic Bread",
    label: "(2 pcs)",
    image: "/Images/extras-4.jpg",
    description: "Toasted garlic bread slices.",
    category: "Extras",
    price: {
      currency: "RM",
      standard: {
        current: "3.00",
        original: "3.00",
      },
    },
  },

  // Desserts
  {
    id: "desserts-1",
    name: "Burnt Cheesecake",
    image: "/Images/desserts-1.jpg",
    description:
      "Rich creamy burnt cheesecake topped with crunchy crumbs for added texture.",
    category: "Desserts",
    price: {
      currency: "RM",
      standard: {
        current: "8.90",
        original: "8.90",
      },
    },
  },
  {
    id: "desserts-2",
    name: "Chocolate Brownies",
    image: "/Images/desserts-2.jpg",
    description:
      "Rich fudgy chocolate brownies served warm with a scoop of creamy vanilla ice cream.",
    category: "Desserts",
    price: {
      currency: "RM",
      standard: {
        current: "10.90",
        original: "10.90",
      },
    },
  },

  // Beverages
  {
    id: "beverages-1",
    name: "Iced Lemon",
    image: "/Images/beverages-1.jpg",
    description: "Chilled lemon drink — tangy and refreshing.",
    category: "Beverages",
    price: {
      currency: "RM",
      standard: {
        current: "4.50",
        original: "4.50",
      },
    },
  },
  {
    id: "beverages-2",
    name: "Iced Lemon Tea",
    image: "/Images/beverages-2.jpg",
    description: "Chilled tea with a splash of fresh lemon.",
    category: "Beverages",
    price: {
      currency: "RM",
      standard: {
        current: "4.90",
        original: "4.90",
      },
    },
  },
  {
    id: "beverages-3",
    name: "Iced Milk Tea",
    image: "/Images/beverages-3.jpg",
    description: "Rich, creamy tea served chilled over ice.",
    category: "Beverages",
    price: {
      currency: "RM",
      standard: {
        current: "5.50",
        original: "5.50",
      },
    },
  },
  {
    id: "beverages-4",
    name: "Iced Honey Lemon",
    image: "/Images/beverages-4.jpg",
    description:
      "A refreshing mix of honey and lemon, served chilled over ice.",
    category: "Beverages",
    price: {
      currency: "RM",
      standard: {
        current: "5.50",
        original: "5.50",
      },
    },
  },
  {
    id: "beverages-5",
    name: "Van Houten Iced Chocolate",
    image: "/Images/beverages-5.jpg",
    description: "Rich with creamy chocolate drink, served cold over ice.",
    category: "Beverages",
    price: {
      currency: "RM",
      standard: {
        current: "7.50",
        original: "7.50",
      },
    },
  },

  // Fresh Fruit Juices
  {
    id: "juices-1",
    name: "Green Apple",
    image: "/Images/juices-1.jpg",
    description: "Fresh apple with a naturally sweet and juicy.",
    category: "Fresh Fruit Juices",
    price: {
      currency: "RM",
      standard: {
        current: "7.90",
        original: "7.90",
      },
    },
  },
  {
    id: "juices-2",
    name: "Orange",
    image: "/Images/juices-2.jpg",
    description: "Refreshing orange packed with citrusy sweetness.",
    category: "Fresh Fruit Juices",
    price: {
      currency: "RM",
      standard: {
        current: "7.90",
        original: "7.90",
      },
    },
  },
  {
    id: "juices-3",
    name: "Watermelon",
    image: "/Images/juices-3.jpg",
    description: "Juicy, chilled watermelon with a refreshing burst.",
    category: "Fresh Fruit Juices",
    price: {
      currency: "RM",
      standard: {
        current: "7.90",
        original: "7.90",
      },
    },
  },
  {
    id: "juices-4",
    name: "Asam Boi",
    image: "/Images/juices-4.jpg",
    description:
      "A refreshing sweet and sour drink made with preserved plum (asam boi), served chilled for a tangy and uniquely Malaysian flavor that cools and refreshes every sip.",
    category: "Fresh Fruit Juices",
    price: {
      currency: "RM",
      standard: {
        current: "7.90",
        original: "7.90",
      },
    },
  },
  {
    id: "juices-5",
    name: "Orange + Asam Boi",
    image: "/Images/juices-5.jpg",
    description:
      "A zesty blend of fresh orange and tangy preserved plum (asam boi), served chilled for a vibrant, sweet-and-sour drink that refreshes and energizes with every sip.",
    category: "Fresh Fruit Juices",
    price: {
      currency: "RM",
      standard: {
        current: "8.90",
        original: "8.90",
      },
    },
  },
  {
    id: "juices-6",
    name: "Apple + Asam Boi",
    image: "/Images/juices-6.jpg",
    description:
      "A refreshing blend of green apple juice mixed with tangy asam boi, delivering the perfect balance of sweet and sour in every sip.",
    category: "Fresh Fruit Juices",
    price: {
      currency: "RM",
      standard: {
        current: "8.90",
        original: "8.90",
      },
    },
  },

  // Sparkling Drinks
  {
    id: "sparkling-1",
    name: "A&W Root Beer",
    image: "/Images/sparkling-1.jpg",
    description:
      "The classic, bold, and refreshing root beer with a smooth, foamy finish.",
    category: "Sparkling Drinks",
    price: {
      currency: "RM",
      standard: {
        current: "4.50",
        original: "4.50",
      },
    },
  },
  {
    id: "sparkling-2",
    name: "Lemonade",
    image: "/Images/sparkling-2.jpg",
    description:
      "Freshly squeezed lemon with a sparkling twist, perfectly sweet and tangy.",
    category: "Sparkling Drinks",
    price: {
      currency: "RM",
      standard: {
        current: "5.50",
        original: "5.50",
      },
    },
  },
  {
    id: "sparkling-3",
    name: "Blue Lemonade",
    image: "/Images/sparkling-3.jpg",
    description: "A vibrant blue citrus cooler with refreshing sparkle.",
    category: "Sparkling Drinks",
    price: {
      currency: "RM",
      standard: {
        current: "5.50",
        original: "5.50",
      },
    },
  },
  {
    id: "sparkling-4",
    name: "A&W Root Beer Float",
    image: "/Images/sparkling-4.jpg",
    description:
      "Classic A&W root beer served over a scoop of creamy vanilla ice cream for a refreshing float.",
    category: "Sparkling Drinks",
    price: {
      currency: "RM",
      standard: {
        current: "8.90",
        original: "8.90",
      },
    },
  },

  // Frappe
  {
    id: "frappe-1",
    name: "Vanilla Frappe",
    image: "/Images/frappe-1.jpg",
    description: "A creamy drink with smooth vanilla flavor, served chilled.",
    category: "Frappe",
    price: {
      currency: "RM",
      standard: {
        current: "9.90",
        original: "9.90",
      },
    },
  },
  {
    id: "frappe-2",
    name: "Chocolate Frappe",
    image: "/Images/frappe-2.jpg",
    description:
      "A refreshing drink with rich chocolate flavor, smooth and creamy.",
    category: "Frappe",
    price: {
      currency: "RM",
      standard: {
        current: "11.90",
        original: "11.90",
      },
    },
  },
  {
    id: "frappe-3",
    name: "Oreo Frappe",
    image: "/Images/frappe-3.jpg",
    description:
      "Ice-blended Oreo cookies topped with smooth whipping cream for the perfect cookies-and-cream treat.",
    category: "Frappe",
    price: {
      currency: "RM",
      standard: {
        current: "11.90",
        original: "11.90",
      },
    },
  },
  {
    id: "frappe-4",
    name: "Strawberry Crème Brulee Frappe",
    image: "/Images/frappe-4.jpg",
    description:
      "A creamy ice-blended strawberry frappe with a hint of crème brûlée flavour.",
    category: "Frappe",
    price: {
      currency: "RM",
      standard: {
        current: "12.90",
        original: "12.90",
      },
    },
  },

  // Buttercream Series
  {
    id: "buttercream-1",
    name: "Coffee Buttercream",
    image: "/Images/buttercream-1.jpg",
    description: "Smooth and creamy buttercream with the rich aroma of coffee.",
    category: "Buttercream Series",
    price: {
      currency: "RM",
      standard: {
        current: "9.90",
        original: "9.90",
      },
    },
  },
  {
    id: "buttercream-2",
    name: "Chocolate Buttercream",
    image: "/Images/buttercream-2.jpg",
    description:
      "Rich and creamy chocolate buttercream, perfect for sweetness.",
    category: "Buttercream Series",
    price: {
      currency: "RM",
      standard: {
        current: "9.90",
        original: "9.90",
      },
    },
  },
  {
    id: "buttercream-3",
    name: "Strawberry Buttercream",
    image: "/Images/buttercream-3.jpg",
    description:
      "Light and fluffy buttercream with the sweetness of ripe strawberries.",
    category: "Buttercream Series",
    price: {
      currency: "RM",
      standard: {
        current: "9.90",
        original: "9.90",
      },
    },
  },

  // Coffee (Hot)
  {
    id: "coffee-hot-1",
    name: "Americano (Hot)",
    image: "/Images/coffee-hot-1.jpg",
    description: "Bold, aromatic espresso gently blended with hot water.",
    category: "Coffee",
    price: {
      currency: "RM",
      standard: {
        current: "5.90",
        original: "5.90",
      },
    },
  },
  {
    id: "coffee-hot-2",
    name: "Latte (Hot)",
    image: "/Images/coffee-hot-2.jpg",
    description:
      "A smooth blend of rich espresso and milk, topped with light and creamy foam, served hot.",
    category: "Coffee",
    price: {
      currency: "RM",
      standard: {
        current: "7.90",
        original: "7.90",
      },
    },
  },

  // Coffee (Cold)
  {
    id: "coffee-cold-1",
    name: "Americano (Cold)",
    image: "/Images/coffee-cold-1.jpg",
    description: "Bold, aromatic espresso gently blended with ice.",
    category: "Coffee",
    price: {
      currency: "RM",
      standard: {
        current: "8.90",
        original: "8.90",
      },
    },
  },
  {
    id: "coffee-cold-2",
    name: "Latte (Cold)",
    image: "/Images/coffee-cold-2.jpg",
    description:
      "A smooth blend of rich espresso and milk, topped with light and creamy foam, served over ice.",
    category: "Coffee",
    price: {
      currency: "RM",
      standard: {
        current: "9.90",
        original: "9.90",
      },
    },
  },

  // Hot Drinks
  {
    id: "hot-drinks-1",
    name: "Hot Lemon",
    image: "/Images/hot-drinks-1.jpg",
    description: "Hot and soothing lemon drink and revitalizing refreshment.",
    category: "Hot Drinks",
    price: {
      currency: "RM",
      standard: {
        current: "3.50",
        original: "3.50",
      },
    },
  },
  {
    id: "hot-drinks-2",
    name: "Hot Lemon Tea",
    image: "/Images/hot-drinks-2.jpg",
    description: "A soothing blend of tea and fresh lemon, served hot.",
    category: "Hot Drinks",
    price: {
      currency: "RM",
      standard: {
        current: "4.50",
        original: "4.50",
      },
    },
  },
  {
    id: "hot-drinks-3",
    name: "Hot Milk Tea",
    image: "/Images/hot-drinks-3.jpg",
    description: "Smooth tea blended with milk, served hot and comforting.",
    category: "Hot Drinks",
    price: {
      currency: "RM",
      standard: {
        current: "4.50",
        original: "4.50",
      },
    },
  },
  {
    id: "hot-drinks-4",
    name: "Hot Honey Lemon",
    image: "/Images/hot-drinks-4.jpg",
    description:
      "A warm blend of natural honey and fresh lemon, soothing and comforting.",
    category: "Hot Drinks",
    price: {
      currency: "RM",
      standard: {
        current: "4.90",
        original: "4.90",
      },
    },
  },
  {
    id: "hot-drinks-5",
    name: "Van Houten Hot Chocolate",
    image: "/Images/hot-drinks-5.jpg",
    description: "Rich with creamy chocolate drink, served hot and comforting.",
    category: "Hot Drinks",
    price: {
      currency: "RM",
      standard: {
        current: "7.90",
        original: "7.80",
      },
    },
  },
] satisfies MenuItem[];
