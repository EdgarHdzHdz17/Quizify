import muertosImage from "./assets/Muertos.png";
import candelariaImage from "./assets/Candelaria.png";
import independenciaImage from "./assets/Independencia.png";
import batallaImage from "./assets/Batalla.png";
import virgenImage from "./assets/Virgen.png";
import traditionsImage from "../HomeScreen/assets/traditions.png";

const PropsTraditions = {
  seccion: "¡Tradiciones de México!",
  introduction:
    "Descubre la magia de las festividades, danzas y costumbres que hacen de México un país único. ",
  imageSection: traditionsImage,
  questionOne: {
    wallpaper: muertosImage,
    title: "Dia de muertos",
    answer1: "1 / Febrero",
    answer2: "3 / Marzo",
    answer3: "1 / Noviembre",
  },
  questionTwo: {
    wallpaper: candelariaImage,
    title: "Dia de la Candelaria",
    answer1: "5 / Enero",
    answer2: "2 / Febrero",
    answer3: "30 / Enero",
  },
  questionThree: {
    wallpaper: independenciaImage,
    title: "Dia de la Independencia",
    answer1: "15 / Junio",
    answer2: "20 / Agosto",
    answer3: "16 / Septiembre",
  },
  questionFour: {
    wallpaper: batallaImage,
    title: "Batalla de Puebla",
    answer1: "14 / Febrero",
    answer2: "5 / Mayo",
    answer3: "18 / Octubre",
  },
  questionFive: {
    wallpaper: virgenImage,
    title: "Dia de la Virgen de Guadalupe",
    answer1: "25 / Julio",
    answer2: "12 / Diciembre",
    answer3: "31 / Marzo",
  },
};

export default PropsTraditions;
