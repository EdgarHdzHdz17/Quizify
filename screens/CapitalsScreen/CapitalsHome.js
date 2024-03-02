import React,{useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TouchableOpacity,SafeAreaView } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Audio } from 'expo-av'
import stylesCapitalsHome from './CapitalsHomeStyles';

export default function CapitalsHome() {

  const [buttonColorCorrect, setButtonColorCorrect] = useState('white');
  const [buttonColorIncorrect, setButtonColorIncorrect] = useState('white');

  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 2);
        setButtonColorCorrect('#8fbc8f');
        setButtonColorIncorrect('white');
      } else {
        setScore(Math.max(score - 2, 0));
        setButtonColorIncorrect('#FA682A');
        setButtonColorCorrect('#8fbc8f');
      }

  };

  const pages = [
    { 
      backgroundColor: 'rgba(255, 160, 122, 0.9)',
      image: <Image style={stylesCapitalsHome.image} source={require('./assets/Monterrey.png')} />,
      title: (
        <View style={stylesCapitalsHome.titleContainer}>
          <View style={stylesCapitalsHome.answersContainer}>
            <Text style={stylesCapitalsHome.titleText}>Nuevo Leon</Text>
            <TouchableOpacity style={[stylesCapitalsHome.button,{backgroundColor:buttonColorCorrect}]} onPress={() => handleAnswer(true)} disabled={answered} >
              <Text style={stylesCapitalsHome.answerText}>Monterrey</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[stylesCapitalsHome.button,{backgroundColor:buttonColorIncorrect}]} onPress={() => handleAnswer(false)} disabled={answered} >
              <Text style={stylesCapitalsHome.answerText}>CDMX</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[stylesCapitalsHome.button,{backgroundColor:buttonColorIncorrect}]} onPress={() => handleAnswer(false)} disabled={answered} >
              <Text style={stylesCapitalsHome.answerText}>San Nicolas</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesCapitalsHome.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: '',
    },
    {
      backgroundColor: 'rgba(255, 160, 122, 0.9)',
      image: <Image style={stylesCapitalsHome.image} source={require('./assets/Jalisco.png')} />,
      title: (
        <View style={stylesCapitalsHome.titleContainer}>
          <View style={stylesCapitalsHome.answersContainer}>
            <Text style={stylesCapitalsHome.titleText}>Guadalajara</Text >
            <TouchableOpacity style={stylesCapitalsHome.button} onPress={() => handleAnswer(true)} disabled={answered} >
              <Text style={stylesCapitalsHome.answerText}>Jalisco</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button} onPress={() => handleAnswer(false)} disabled={answered}>
              <Text style={stylesCapitalsHome.answerText}>Campeche</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button} onPress={() => handleAnswer(false)} disabled={answered}>
              <Text style={stylesCapitalsHome.answerText}>Puebla</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesCapitalsHome.scoreText}>Puntaje: {score}</Text>
        </View>
      ),
      subtitle: '',
    },
    {
      backgroundColor: 'rgba(255, 160, 122, 0.9)',
      image: <Image style={stylesCapitalsHome.image} source={require('./assets/Veracruz.png')} />,
      title: ( 
      <View style={stylesCapitalsHome.titleContainer}>
        <View style={stylesCapitalsHome.answersContainer}>
          <Text style={stylesCapitalsHome.titleText}>Veracruz</Text>
          <TouchableOpacity style={stylesCapitalsHome.button} >
            <Text style={stylesCapitalsHome.answerText}>Cordoba</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesCapitalsHome.button} >
            <Text style={stylesCapitalsHome.answerText}>Xalapa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesCapitalsHome.button} >
            <Text style={stylesCapitalsHome.answerText}>Michoacan</Text>
          </TouchableOpacity>
        </View>
        <Text style={stylesCapitalsHome.scoreText}>Puntaje: {score}</Text>
      </View>
      ),
      subtitle: '',
    },
    {
      backgroundColor: 'rgba(255, 160, 122, 0.9)',
      image: <Image style={stylesCapitalsHome.image} source={require('./assets/Yucatan.png')} />,
      title: ( 
        <View style={stylesCapitalsHome.titleContainer}>
          <View style={stylesCapitalsHome.answersContainer}>
            <Text style={stylesCapitalsHome.titleText}>Merida</Text>
            <TouchableOpacity style={stylesCapitalsHome.button} >
              <Text style={stylesCapitalsHome.answerText}>Guerrero</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button} >
              <Text style={stylesCapitalsHome.answerText}>Hidalgo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button} >
              <Text style={stylesCapitalsHome.answerText}>Yucatan</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesCapitalsHome.scoreText}>Puntaje: {score}</Text>
        </View>
        ),
      subtitle: '',
    },
    {
      backgroundColor: 'rgba(255, 160, 122, 0.9)',
      image: <Image style={stylesCapitalsHome.image} source={require('./assets/Puebla.png')} />,
      title: ( 
        <View style={stylesCapitalsHome.titleContainer}>
          <View style={stylesCapitalsHome.answersContainer}>
            <Text style={stylesCapitalsHome.titleText}>Puebla</Text>
            <TouchableOpacity style={stylesCapitalsHome.button} >
              <Text style={stylesCapitalsHome.answerText}>Sonora</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button} >
              <Text style={stylesCapitalsHome.answerText}>Tlaxcala</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCapitalsHome.button} >
              <Text style={stylesCapitalsHome.answerText}>Puebla</Text>
            </TouchableOpacity>
          </View>
          <Text style={stylesCapitalsHome.scoreText}>Puntaje: {score}</Text>
        </View>
        ),
      subtitle: '',
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
