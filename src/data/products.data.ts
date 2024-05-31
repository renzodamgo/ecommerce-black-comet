export const productsData: ProductType[] = [
  {
    id: 1,
    name: "Weasel Climb",
    category: "Toys",
    price: 25.0,
    image: "/assets/weasel_climb.png",
    description:
      "Figura de un hurón trepando de la Colección MOUSIN, impresa en 3D con resina tipo ABS de alta calidad. Estas miniaturas de plástico muy detalladas están imprimadas previamente con imprimación Acrílicos Vallejo. Se requiere poco o ningún ensamblaje. Imprimado y listo para pintar. Algunas miniaturas incluyen partes translúcidas. Altura aproximada: 96 mm. Contenido: 1 miniatura Abominable Yeti, 1 base redonda (75 mm).",
    collection: "MOUSIN",
    height: 96,
  },
  {
    id: 2,
    name: "Weasel Run",
    category: "Toys",
    price: 25.0,
    image: "/assets/weasel_run.png",
    description:
      "Figura de un hurón corriendo de la Colección MOUSIN, impresa en 3D con resina tipo ABS de alta calidad. Durante millones de años han sobrevivido escondidos en el legendario Mundo Perdido. Sin embargo, su intensa actividad volcánica amenaza con hacerlos desaparecer. Únete a la partida de rescate, reúne dinosaurios en tu terreno y libéralos en entornos seguros para salvarlos de la ¡Extinción!",
    collection: "MOUSIN",
    height: 80,
  },
  {
    id: 3,
    name: "Weasel Stand",
    category: "Toys",
    price: 25.0,
    image: "/assets/weasel_stand.png",
    description:
      "Figura de un hurón sobre un soporte de la Colección MOUSIN, impresa en 3D con resina tipo ABS de alta calidad. Durante millones de años han sobrevivido escondidos en el legendario Mundo Perdido. Sin embargo, su intensa actividad volcánica amenaza con hacerlos desaparecer. Únete a la partida de rescate, reúne dinosaurios en tu terreno y libéralos en entornos seguros para salvarlos de la ¡Extinción!",
    collection: "MOUSIN",
    height: 80,
  },
  {
    id: 4,
    name: "Mousin Messenger",
    category: "Toys",
    price: 25.0,
    image: "/assets/mousin_messenger.png",
    description:
      "Figura temática de un roedor mensajero de la Colección MOUSIN, impresa en 3D con resina tipo ABS de alta calidad. Durante millones de años han sobrevivido escondidos en el legendario Mundo Perdido. Sin embargo, su intensa actividad volcánica amenaza con hacerlos desaparecer. Únete a la partida de rescate, reúne dinosaurios en tu terreno y libéralos en entornos seguros para salvarlos de la ¡Extinción!",
    collection: "MOUSIN",
    height: 80,
  },
  {
    id: 5,
    name: "Mousin Arco",
    category: "Toys",
    price: 25.0,
    image: "/assets/mousin_arco.png",
    description:
      "Figura de una estructura de juego en forma de arco de la Colección MOUSIN, impresa en 3D con resina tipo ABS de alta calidad. Durante millones de años han sobrevivido escondidos en el legendario Mundo Perdido. Sin embargo, su intensa actividad volcánica amenaza con hacerlos desaparecer. Únete a la partida de rescate, reúne dinosaurios en tu terreno y libéralos en entornos seguros para salvarlos de la ¡Extinción!",
    collection: "MOUSIN",
    height: 80,
  },
  {
    id: 6,
    name: "Mousin Stand",
    category: "Toys",
    price: 25.0,
    image: "/assets/mousin_stand.png",
    description:
      "Soporte para figuras de la Colección MOUSIN, impreso en 3D con resina tipo ABS de alta calidad. Durante millones de años han sobrevivido escondidos en el legendario Mundo Perdido. Sin embargo, su intensa actividad volcánica amenaza con hacerlos desaparecer. Únete a la partida de rescate, reúne dinosaurios en tu terreno y libéralos en entornos seguros para salvarlos de la ¡Extinción!",
    collection: "MOUSIN",
    height: 80,
  },
  {
    id: 7,
    name: "Mousin Spear 2",
    category: "Toys",
    price: 25.0,
    image: "/assets/mousin_spear.png",
    description:
      "Figura de una lanza de la Colección MOUSIN, impresa en 3D con resina tipo ABS de alta calidad. Durante millones de años han sobrevivido escondidos en el legendario Mundo Perdido. Sin embargo, su intensa actividad volcánica amenaza con hacerlos desaparecer. Únete a la partida de rescate, reúne dinosaurios en tu terreno y libéralos en entornos seguros para salvarlos de la ¡Extinción!",
    collection: "MOUSIN",
    height: 80,
  },
  {
    id: 8,
    name: "Mousin Shield",
    category: "Toys",
    price: 25.0,
    image: "/assets/mousin_shield.png",
    description:
      "Figura de un escudo protector de la Colección MOUSIN, impresa en 3D con resina tipo ABS de alta calidad. Estas miniaturas de plástico muy detalladas están imprimadas previamente con imprimación Acrílicos Vallejo. Se requiere poco o ningún ensamblaje. Imprimado y listo para pintar. Algunas miniaturas incluyen partes translúcidas. Altura aproximada: 96 mm. Contenido: 1 miniatura Abominable Yeti, 1 base redonda (75 mm).",
    collection: "MOUSIN",
    height: 96,
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
];

export type ProductType = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  collection: string;
  height: number;
};
