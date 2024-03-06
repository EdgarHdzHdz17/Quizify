import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import stylesCapitalsHome from "./CapitalsHomeStyles";
import monterreyImage from "./assets/Monterrey.png";
import jaliscoImage from "./assets/Jalisco.png";
import pueblaImage from "./assets/Puebla.png";
import veracruzImage from "./assets/Veracruz.png";
import yucantanImage from "./assets/Yucatan.png";

export default function CapitalsHome() {
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    let newScore = isCorrect ? score + 2 : Math.max(score - 2, 0);
    setScore(newScore);
    console.log(newScore);

    if (newScore === 10) {
      console.log("¡Ganaste!");
    }
  };

  const pages = [
    /*Monterrey*/
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image style={stylesCapitalsHome.image} source={monterreyImage} />,
      title: (
        <View style={stylesCapitalsHome.titleContainer}>
          <View style={stylesCapitalsHome.answersContainer}>
            <Text style={stylesCapitalsHome.titleText}>Nuevo Leon</Text>
            <TouchableOpacity
              style={stylesCapitalsHome.button}
              onPress={() => handleAnswer(true)}
            >
              <Text style={stylesCapitalsHome.answerText}>Monterrey</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesCapitalsHome.button}
              onPress={() => handleAnswer(false)}
            >
              <Text style={stylesCapitalsHome.answerText}>CDMX</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesCapitalsHome.button}
              onPress={() => handleAnswer(false)}
            >
              <Text style={stylesCapitalsHome.answerText}>San Nicolas</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesCapitalsHome.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: "",
    },
    /*Guadalajara*/
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image style={stylesCapitalsHome.image} source={jaliscoImage} />,
      title: (
        <View style={stylesCapitalsHome.titleContainer}>
          <View style={stylesCapitalsHome.answersContainer}>
            <Text style={stylesCapitalsHome.titleText}>Guadalajara</Text>
            <TouchableOpacity
              style={stylesCapitalsHome.button}
              onPress={() => handleAnswer(true)}
            >
              <Text style={stylesCapitalsHome.answerText}>Jalisco</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesCapitalsHome.button}
              onPress={() => handleAnswer(false)}
            >
              <Text style={stylesCapitalsHome.answerText}>Campeche</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesCapitalsHome.button}
              onPress={() => handleAnswer(false)}
            >
              <Text style={stylesCapitalsHome.answerText}>Puebla</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesCapitalsHome.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: "",
    },
    /*Veracruz*/
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image style={stylesCapitalsHome.image} source={veracruzImage} />,
      title: (
        <View style={stylesCapitalsHome.titleContainer}>
          <View style={stylesCapitalsHome.answersContainer}>
            <Text style={stylesCapitalsHome.titleText}>Veracruz</Text>
            <TouchableOpacity style={stylesCapitalsHome.button}>
              <Text style={stylesCapitalsHome.answerText}>Cordoba</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button}>
              <Text style={stylesCapitalsHome.answerText}>Xalapa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button}>
              <Text style={stylesCapitalsHome.answerText}>Michoacan</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesCapitalsHome.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: "",
    },
    /*Merida*/
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image style={stylesCapitalsHome.image} source={yucantanImage} />,
      title: (
        <View style={stylesCapitalsHome.titleContainer}>
          <View style={stylesCapitalsHome.answersContainer}>
            <Text style={stylesCapitalsHome.titleText}>Merida</Text>
            <TouchableOpacity style={stylesCapitalsHome.button}>
              <Text style={stylesCapitalsHome.answerText}>Guerrero</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button}>
              <Text style={stylesCapitalsHome.answerText}>Hidalgo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button}>
              <Text style={stylesCapitalsHome.answerText}>Yucatan</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesCapitalsHome.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: "",
    },
    /*Puebla*/
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image style={stylesCapitalsHome.image} source={pueblaImage} />,
      title: (
        <View style={stylesCapitalsHome.titleContainer}>
          <View style={stylesCapitalsHome.answersContainer}>
            <Text style={stylesCapitalsHome.titleText}>Puebla</Text>
            <TouchableOpacity style={stylesCapitalsHome.button}>
              <Text style={stylesCapitalsHome.answerText}>Sonora</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button}>
              <Text style={stylesCapitalsHome.answerText}>Tlaxcala</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button}>
              <Text style={stylesCapitalsHome.answerText}>Puebla</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesCapitalsHome.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: "",
    },
  ];

  return (
    <SafeAreaView style={stylesCapitalsHome.container}>
      <Onboarding
        showPagination={false}
        pages={pages.map((page) => ({
          ...page,
        }))}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
