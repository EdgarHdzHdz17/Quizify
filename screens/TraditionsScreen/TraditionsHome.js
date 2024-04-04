import React, { useEffect, useState } from "react";
import SliderComponent from "../../src/components/SlidersComponent";
import PropsTraditions from "./PropsTraditions";

export default function TraditionsHome() {
  return <SliderComponent {...PropsTraditions}></SliderComponent>;
}
