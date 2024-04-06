import aguilaImage from "./assets/Aguila.png";
import coyoteImage from "./assets/Coyote.png";
import jaguarImage from "./assets/Jaguar.png";
import quetzalImage from "./assets/Quetzal.png";
import tucanImage from "./assets/Tucan.png";
import animalsImage from "../HomeScreen/assets/animals.png";

const PropsAnimals = {
  seccion: "¡Animales de México!",
  introduction:
    "Explora la diversidad de la fauna mexicana con nuestro quiz de animales de México! Descubre las especies únicas que habitan en este país y pon a prueba tus conocimientos",
  imageSection: animalsImage,
  questionOne: {
    wallpaper: aguilaImage,
    title: "Cuāuhtli",
    options: ["Águila", "Cóndor", "Buitre"],
    correct: "Águila",
  },
  questionTwo: {
    wallpaper: coyoteImage,
    title: "Cōyōtl",
    options: ["Perro", "Zorro", "Coyote"],
    correct: "Coyote",
  },
  questionThree: {
    wallpaper: jaguarImage,
    title: "Ocelotl",
    options: ["Chita", "Jaguar", "Tigre"],
    correct: "Jaguar",
  },
  questionFour: {
    wallpaper: quetzalImage,
    title: "Quetzalli",
    options: ["Cotorro", "Quetzal", "Perico"],
    correct: "Quetzal",
  },
  questionFive: {
    wallpaper: tucanImage,
    title: "Tōcan",
    options: ["Tucán", "Loro", "Cotorro"],
    correct: "Tucán",
  },
};

export default PropsAnimals;
