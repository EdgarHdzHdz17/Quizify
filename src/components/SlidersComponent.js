import { Image, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Onboarding from "react-native-onboarding-swiper";
import React, { useEffect, useState } from "react";
import stylesSlidersComponent from "./SliderComponentStyles";

function SlidersComponent(props) {
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    let newScore = isCorrect ? Math.min(score + 2, 10) : Math.max(score - 2, 0);
    setScore(newScore);
    console.log(newScore);

    if (newScore === 10) {
      console.log("¡Ganaste!");
    }
  };

  const Bottons = () => {
    return (
      <>
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
        <Text style={stylesSlidersComponent.scoreText}>Puntaje: {score}</Text>
      </>
    );
  };

  const Title = (props) => {
    return (
      <Text style={stylesSlidersComponent.titleText}>{props.description}</Text>
    );
  };

  const sliders = [
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.imageSection} />,
      title: props.seccion,
      subtitle: props.introduction,
    },
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.questionOne.wallpaper} />,
      title: <Title description={props.questionOne.title}></Title>,
      subtitle: <Bottons></Bottons>,
    },
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.questionTwo.wallpaper} />,
      title: <Title description={props.questionTwo.title}></Title>,
      subtitle: <Bottons></Bottons>,
    },
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.questionThree.wallpaper} />,
      title: <Title description={props.questionThree.title}></Title>,
      subtitle: <Bottons></Bottons>,
    },
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.questionFour.wallpaper} />,
      title: <Title description={props.questionFour.title}></Title>,
      subtitle: <Bottons></Bottons>,
    },
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.questionFive.wallpaper} />,
      title: <Title description={props.questionFive.title}></Title>,
      subtitle: <Bottons></Bottons>,
    },
  ];

  return (
    <SafeAreaView style={stylesSlidersComponent.container}>
      <Onboarding showPagination={false} pages={sliders} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default SlidersComponent;
