import { View, Text, SafeAreaView } from "react-native";
import SlidersComponent from "../../src/components/SlidersComponent";
import PropsAnimals from "./PropsAnimals";
export default function AnimalsHome() {
  return <SlidersComponent {...PropsAnimals}></SlidersComponent>;
}
