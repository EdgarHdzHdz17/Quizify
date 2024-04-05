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
    title: "Dia de muertos",
    answer1: "Aguila",
    answer2: "Condor",
    answer3: "Buitre",
  },
  questionTwo: {
    wallpaper: coyoteImage,
    title: "Dia de la Candelaria",
    answer1: "Perro",
    answer2: "Zorro",
    answer3: "Coyote",
  },
  questionThree: {
    wallpaper: jaguarImage,
    title: "Dia de la Independencia",
    answer1: "Chita",
    answer2: "Jaguar",
    answer3: "Tigre",
  },
  questionFour: {
    wallpaper: quetzalImage,
    title: "Batalla de Puebla",
    answer1: "Cotorro",
    answer2: "Quetzal",
    answer3: "Perico",
  },
  questionFive: {
    wallpaper: tucanImage,
    title: "Dia de la Virgen de Guadalupe",
    answer1: "Tucan",
    answer2: "Loro",
    answer3: "Cotorro",
  },
};

export default PropsAnimals;
