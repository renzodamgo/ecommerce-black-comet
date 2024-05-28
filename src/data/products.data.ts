export const productsData: ProductType[] = [
  {
    id: 1,
    name: "Weasel Climb",
    category: "Toys",
    price: 25.0,
    image: "/assets/weasel_climb.png",
    description: "Interactive climbing toy for pets",
    collection: "MOUSIN",
  },
  {
    id: 2,
    name: "Weasel Run",
    category: "Toys",
    price: 25.0,
    image: "/assets/weasel_run.png",
    description: "Weasel run toy for cats",
    collection: "MOUSIN",
  },
  {
    id: 3,
    name: "Weasel Stand",
    category: "Toys",
    price: 25.0,
    image: "/assets/weasel_stand.png",
    description: "Durable stand for Weasel toys",
    collection: "MOUSIN",
  },
  {
    id: 4,
    name: "Mousin Messenger",
    category: "Toys",
    price: 25.0,
    image: "/assets/mousin_messenger.png",
    description: "Fun messenger-themed toy for rodents",
    collection: "MOUSIN",
  },
  {
    id: 5,
    name: "Mousin Arco",
    category: "Toys",
    price: 25.0,
    image: "/assets/mousin_arco.png",
    description: "Arch-shaped toy for playing and resting",
    collection: "MOUSIN",
  },
  {
    id: 6,
    name: "Mousin Stand",
    category: "Toys",
    price: 25.0,
    image: "/assets/mousin_stand.png",
    description: "Stand for various Mousin toys",
    collection: "MOUSIN",
  },
  {
    id: 7,
    name: "Mousin Spear",
    category: "Toys",
    price: 25.0,
    image: "/assets/mousin_spear.png",
    description: "Spear-like toy for enhanced play",
    collection: "MOUSIN",
  },
  // {
  //   id: 8,
  //   name: "5mousin",
  //   category: "Toys",
  //   price: 7.0,
  //   image: "/imgs/5mousin.jpg",
  //   description: "Collection of five different Mousin toys",
  //   collection: "MOUSIN",
  // },
  {
    id: 8,
    name: "Mousin Shield",
    category: "Toys",
    price: 25.0,
    image: "/assets/mousin_shield.png",
    description: "Protective shield toy for active play",
    collection: "MOUSIN",
  },
];

export type ProductType = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  collection: string;
};