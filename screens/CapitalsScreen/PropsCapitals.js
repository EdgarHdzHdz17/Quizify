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
    answer1: "Monterrey",
    answer2: "CDMX",
    answer3: "San Nicolas",
  },
  questionTwo: {
    wallpaper: jaliscoImage,
    title: "Guadalajara",
    answer1: "Jalisco",
    answer2: "Campeche",
    answer3: "Puebla",
  },
  questionThree: {
    wallpaper: veracruzImage,
    title: "Veracruz",
    answer1: "Crodoba",
    answer2: "Xalapa",
    answer3: "Michoacan",
  },
  questionFour: {
    wallpaper: yucantanImage,
    title: "Merida",
    answer1: "Guerrero",
    answer2: "Hidalgo",
    answer3: "Yucatan",
  },
  questionFive: {
    wallpaper: pueblaImage,
    title: "Puebla",
    answer1: "Sonora",
    answer2: "Tlaxcala",
    answer3: "Puebla",
  },
};

export default PropsCapitals;
