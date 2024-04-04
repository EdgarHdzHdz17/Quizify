import React, { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import stylesTraditionsHome from "./TraditionsHomeStyles";
import SliderComponent from "../../src/components/SlidersComponent";
import monterreyImage from "../../screens/CapitalsScreen/assets/Monterrey.png";
import jaliscoImage from "../../screens/CapitalsScreen/assets/Jalisco.png";
import pueblaImage from "../../screens/CapitalsScreen/assets/Puebla.png";
import veracruzImage from "../../screens/CapitalsScreen/assets/Veracruz.png";
import yucantanImage from "../../screens/CapitalsScreen/assets/Yucatan.png";

import PropsTraditionsHom from "../../src/components/PropsQuestions";
import PropsTraditionsHomeee from "../../src/components/PropsQuestions";

export default function TraditionsHome() {
  return <SliderComponent {...PropsTraditionsHom}></SliderComponent>;
}
