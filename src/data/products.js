export const categories = ["All", "6 in 1", "4 in 1" , "Jagger Pro"];

export const products = [
  {
    id: 1,
    name: "Aether Mono",
    flavor: "Arctic Mint",
    category: "6 in 1",
    image: "/19.png",
  },
  {
    id: 2,
    name: "Aether Mono",
    flavor: "Black Cherry",
    category: "4 in 1",
    image: "/2.png",
  },
  {
    id: 3,
    name: "Nova Pod System",
    flavor: "Jagger Pro",
    category: "Jagger Pro",
    image: "/11.png",
  },
 
];

export const bestSellers = products.slice(0, 3);
