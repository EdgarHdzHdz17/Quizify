import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Onboarding from "react-native-onboarding-swiper";
import React, { useEffect, useState } from "react";
import stylesSlidersComponent from "./SliderComponentStyles";

function SliderComponent(props) {
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    let newScore = isCorrect ? Math.min(score + 2, 10) : Math.max(score - 2, 0);
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
      image: (
        <Image
          style={stylesSlidersComponent.image}
          source={props.questionOne.wallpaper}
        />
      ),
      title: (
        <View style={stylesSlidersComponent.titleContainer}>
          <View style={stylesSlidersComponent.answersContainer}>
            <Text style={stylesSlidersComponent.titleText}>
              {props.questionOne.title}
            </Text>
            <TouchableOpacity
              style={stylesSlidersComponent.button}
              onPress={() => handleAnswer(true)}
            >
              <Text style={stylesSlidersComponent.answerText}>
                {props.questionOne.answer1}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesSlidersComponent.button}
              onPress={() => handleAnswer(false)}
            >
              <Text style={stylesSlidersComponent.answerText}>
                {props.questionOne.answer2}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesSlidersComponent.button}
              onPress={() => handleAnswer(false)}
            >
              <Text style={stylesSlidersComponent.answerText}>
                {props.questionOne.answer3}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesSlidersComponent.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: "",
    },
    /*Guadalajara*/
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: (
        <Image
          style={stylesSlidersComponent.image}
          source={props.questionTwo.wallpaper}
        />
      ),
      title: (
        <View style={stylesSlidersComponent.titleContainer}>
          <View style={stylesSlidersComponent.answersContainer}>
            <Text style={stylesSlidersComponent.titleText}>A</Text>
            <TouchableOpacity
              style={stylesSlidersComponent.button}
              onPress={() => handleAnswer(true)}
            >
              <Text style={stylesSlidersComponent.answerText}>Jalisco</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesSlidersComponent.button}
              onPress={() => handleAnswer(false)}
            >
              <Text style={stylesSlidersComponent.answerText}>Campeche</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesSlidersComponent.button}
              onPress={() => handleAnswer(false)}
            >
              <Text style={stylesSlidersComponent.answerText}>Puebla</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesSlidersComponent.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: "",
    },
    /*Veracruz*/
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: (
        <Image
          style={stylesSlidersComponent.image}
          source={props.questionThree.wallpaper}
        />
      ),
      title: (
        <View style={stylesSlidersComponent.titleContainer}>
          <View style={stylesSlidersComponent.answersContainer}>
            <Text style={stylesSlidersComponent.titleText}>Veracruz</Text>
            <TouchableOpacity style={stylesSlidersComponent.button}>
              <Text style={stylesSlidersComponent.answerText}>Cordoba</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesSlidersComponent.button}>
              <Text style={stylesSlidersComponent.answerText}>Xalapa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesSlidersComponent.button}>
              <Text style={stylesSlidersComponent.answerText}>Michoacan</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesSlidersComponent.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: "",
    },
    /*Merida*/
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: (
        <Image
          style={stylesSlidersComponent.image}
          source={props.questionFour.wallpaper}
        />
      ),
      title: (
        <View style={stylesSlidersComponent.titleContainer}>
          <View style={stylesSlidersComponent.answersContainer}>
            <Text style={stylesSlidersComponent.titleText}>Merida</Text>
            <TouchableOpacity style={stylesSlidersComponent.button}>
              <Text style={stylesSlidersComponent.answerText}>Guerrero</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesSlidersComponent.button}>
              <Text style={stylesSlidersComponent.answerText}>Hidalgo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesSlidersComponent.button}>
              <Text style={stylesSlidersComponent.answerText}>Yucatan</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesSlidersComponent.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: "",
    },
    /*Puebla*/
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: (
        <Image
          style={stylesSlidersComponent.image}
          source={props.questionFive.wallpaper}
        />
      ),
      title: (
        <View style={stylesSlidersComponent.titleContainer}>
          <View style={stylesSlidersComponent.answersContainer}>
            <Text style={stylesSlidersComponent.titleText}>Puebla</Text>
            <TouchableOpacity style={stylesSlidersComponent.button}>
              <Text style={stylesSlidersComponent.answerText}>Sonora</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesSlidersComponent.button}>
              <Text style={stylesSlidersComponent.answerText}>Tlaxcala</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesSlidersComponent.button}>
              <Text style={stylesSlidersComponent.answerText}>Puebla</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesSlidersComponent.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: "",
    },
  ];

  return (
    <SafeAreaView style={stylesSlidersComponent.container}>
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

export default SliderComponent;
