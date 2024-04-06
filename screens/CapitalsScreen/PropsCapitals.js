import monterreyImage from "./assets/Monterrey.png";
import jaliscoImage from "../../screens/CapitalsScreen/assets/Jalisco.png";
import pueblaImage from "../../screens/CapitalsScreen/assets/Puebla.png";
import veracruzImage from "../../screens/CapitalsScreen/assets/Veracruz.png";
import yucantanImage from "../../screens/CapitalsScreen/assets/Yucatan.png";
import capitalsImage from "../HomeScreen/assets/capitals.png";

const PropsCapitals = {
  seccion: "¡Capitales de México!",
  introduction:
    "Pon a prueba tus conocimientos geográficos con nuestro quiz de capitales de México! Descubre si puedes identificar las capitales de los estados mexicanos en este desafiante juego",
  imageSection: capitalsImage,
  questionOne: {
    wallpaper: monterreyImage,
    title: "Nuevo Leon",
    options: ["Monterrey", "CDMX", "San Nicolas"],
    correct: "Monterrey",
  },
  questionTwo: {
    wallpaper: jaliscoImage,
    title: "Guadalajara",
    options: ["Jalisco", "Campeche", "Puebla"],
    correct: "Jalisco",
  },
  questionThree: {
    wallpaper: veracruzImage,
    title: "Veracruz",
    options: ["Cordoba", "Xalapa", "Michoacan"],
    correct: "Xalapa",
  },
  questionFour: {
    wallpaper: yucantanImage,
    title: "Merida",
    options: ["Guerrero", "Hidalgo", "Yucatan"],
    correct: "Yucatan",
  },
  questionFive: {
    wallpaper: pueblaImage,
    title: "Puebla",
    options: ["Sonora", "Tlaxcala", "Puebla"],
    correct: "Puebla",
  },
};

export default PropsCapitals;
