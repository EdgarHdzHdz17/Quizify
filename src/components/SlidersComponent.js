import { Image, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Onboarding from "react-native-onboarding-swiper";
import React, { useEffect, useState } from "react";
import stylesSlidersComponent from "./styles/SliderComponentStyles";

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

  const Buttons = ({ option1, option2, option3, answer }) => {
    return (
      <>
        <TouchableOpacity
          style={stylesSlidersComponent.button}
          onPress={() =>
            option1 === answer ? handleAnswer(true) : handleAnswer(false)
          }
        >
          <Text style={stylesSlidersComponent.answerText}>{option1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesSlidersComponent.button}
          onPress={() =>
            option2 === answer ? handleAnswer(true) : handleAnswer(false)
          }
        >
          <Text style={stylesSlidersComponent.answerText}>{option2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesSlidersComponent.button}
          onPress={() =>
            option3 === answer ? handleAnswer(true) : handleAnswer(false)
          }
        >
          <Text style={stylesSlidersComponent.answerText}>{option3}</Text>
        </TouchableOpacity>
        <Text style={stylesSlidersComponent.scoreText}>Puntaje: {score}</Text>
      </>
    );
  };

  const Title = ({ description }) => {
    return <Text style={stylesSlidersComponent.titleText}>{description}</Text>;
  };

  const sliders = [
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.questionOne.wallpaper} />,
      title: <Title description={props.questionOne.title}></Title>,
      subtitle: (
        <Buttons
          option1={props.questionOne.options[0]}
          option2={props.questionOne.options[1]}
          option3={props.questionOne.options[2]}
          answer={props.questionOne.correct}
        ></Buttons>
      ),
    },
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.questionTwo.wallpaper} />,
      title: <Title description={props.questionTwo.title}></Title>,
      subtitle: (
        <Buttons
          option1={props.questionTwo.options[0]}
          option2={props.questionTwo.options[1]}
          option3={props.questionTwo.options[2]}
          answer={props.questionTwo.correct}
        ></Buttons>
      ),
    },
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.questionThree.wallpaper} />,
      title: <Title description={props.questionThree.title}></Title>,
      subtitle: (
        <Buttons
          option1={props.questionThree.options[0]}
          option2={props.questionThree.options[1]}
          option3={props.questionThree.options[2]}
          answer={props.questionThree.correct}
        ></Buttons>
      ),
    },
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.questionFour.wallpaper} />,
      title: <Title description={props.questionFour.title}></Title>,
      subtitle: (
        <Buttons
          option1={props.questionFour.options[0]}
          option2={props.questionFour.options[1]}
          option3={props.questionFour.options[2]}
          answer={props.questionFour.correct}
        ></Buttons>
      ),
    },
    {
      backgroundColor: "rgba(255, 160, 122, 0.9)",
      image: <Image source={props.questionFive.wallpaper} />,
      title: <Title description={props.questionFive.title}></Title>,
      subtitle: (
        <Buttons
          option1={props.questionFive.options[0]}
          option2={props.questionFive.options[1]}
          option3={props.questionFive.options[2]}
          answer={props.questionFive.correct}
        ></Buttons>
      ),
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
