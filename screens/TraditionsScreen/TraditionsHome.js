import React, { useEffect, useState } from "react";
import SlidersComponent from "../../src/components/SlidersComponent";
import PropsTraditions from "./PropsTraditions";

export default function TraditionsHome() {
  return <SlidersComponent {...PropsTraditions}></SlidersComponent>;
}
