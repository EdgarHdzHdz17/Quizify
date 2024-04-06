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
    options: ["1 / Febrero", "3 / Marzo", "1 / Noviembre"],
    correct: "1 / Noviembre",
  },
  questionTwo: {
    wallpaper: candelariaImage,
    title: "Dia de la Candelaria",
    options: ["5 / Enero", "2 / Febrero", "30 / Enero"],
    correct: "2 / Febrero",
  },
  questionThree: {
    wallpaper: independenciaImage,
    title: "Dia de la Independencia",
    options: ["15 / Junio", "20 / Agosto", "16 / Septiembre"],
    correct: "16 / Septiembre",
  },
  questionFour: {
    wallpaper: batallaImage,
    title: "Batalla de Puebla",
    options: ["14 / Febrero", "5 / Mayo", "18 / Octubre"],
    correct: "5 / Mayo",
  },
  questionFive: {
    wallpaper: virgenImage,
    title: "Dia de la Virgen de Guadalupe",
    options: ["25 / Julio", "12 / Diciembre", "31 / Marzo"],
    correct: "12 / Diciembre",
  },
};

export default PropsTraditions;
