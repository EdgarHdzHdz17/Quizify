import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function CapitalsHome() {

  const incorrectAnswer= ()=>{
    Alert.alert("Incorrecto")
    console.log("Incorrecto")
  }

  const correctAnswer= ()=>{
    console.log("Correcto")
  }


  const pages = [
    {
      backgroundColor: 'rgba(255, 160, 122, 0.9)',
      image: <Image style={styles.image} source={require('./assets/Monterrey.png')} />,
      title: (
        <View style={styles.titleContainer}>
          <View style={styles.answersContainer}>
            <Text style={styles.titleText}>Nuevo Leon</Text>
            <TouchableOpacity style={styles.button} onPress={correctAnswer}>
              <Text style={styles.answerText}>Monterrey</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button } onPress={incorrectAnswer}>
              <Text style={styles.answerText}>CDMX</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={incorrectAnswer}>
              <Text style={styles.answerText}>San Nicolas</Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
      subtitle: '',
    },
    {
      backgroundColor: 'rgba(255, 160, 122, 0.9)',
      image: <Image style={styles.image} source={require('./assets/Jalisco.png')} />,
      title: (
        <View style={styles.titleContainer}>
          <View style={styles.answersContainer}>
            <Text style={styles.titleText}>Guadalajara</Text>
            <TouchableOpacity style={styles.button} onPress={correctAnswer}>
              <Text style={styles.answerText}>Jalisco</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={incorrectAnswer}>
              <Text style={styles.answerText}>Campeche</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={incorrectAnswer}>
              <Text style={styles.answerText}>Puebla</Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
      subtitle: '',
    },
    {
      backgroundColor: 'rgba(255, 160, 122, 0.9)',
      image: <Image style={styles.image} source={require('./assets/Veracruz.png')} />,
      title: ( 
      <View style={styles.titleContainer}>
        <View style={styles.answersContainer}>
          <Text style={styles.titleText}>Veracruz</Text>
          <TouchableOpacity style={styles.button} onPress={incorrectAnswer}>
            <Text style={styles.answerText}>Cordoba</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={correctAnswer}>
            <Text style={styles.answerText}>Xalapa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={incorrectAnswer}>
            <Text style={styles.answerText}>Michoacan</Text>
          </TouchableOpacity>
        </View>
      </View>
      ),
      subtitle: '',
    },
    {
      backgroundColor: 'rgba(255, 160, 122, 0.9)',
      image: <Image style={styles.image} source={require('./assets/Yucatan.png')} />,
      title: ( 
        <View style={styles.titleContainer}>
          <View style={styles.answersContainer}>
            <Text style={styles.titleText}>Merida</Text>
            <TouchableOpacity style={styles.button} onPress={incorrectAnswer}>
              <Text style={styles.answerText}>Guerrero</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={incorrectAnswer}>
              <Text style={styles.answerText}>Hidalgo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}  onPress={correctAnswer}>
              <Text style={styles.answerText}>Yucatan</Text>
            </TouchableOpacity>
          </View>
        </View>
        ),
      subtitle: '',
    },
    {
      backgroundColor: 'rgba(255, 160, 122, 0.9)',
      image: <Image style={styles.image} source={require('./assets/Puebla.png')} />,
      title: ( 
        <View style={styles.titleContainer}>
          <View style={styles.answersContainer}>
            <Text style={styles.titleText}>Puebla</Text>
            <TouchableOpacity style={styles.button} onPress={incorrectAnswer}>
              <Text style={styles.answerText}>Sonora</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={incorrectAnswer}>
              <Text style={styles.answerText}>Tlaxcala</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={correctAnswer}>
              <Text style={styles.answerText}>Puebla</Text>
            </TouchableOpacity>
          </View>
        </View>
        ),
      subtitle: '',
    },
  ];

  return (
    <View style={styles.container}>
      <Onboarding
        showPagination={false}
        pages={pages.map((page, index) => ({
          ...page,
        }))}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '60%',
    height: '60%',
    marginTop: 0,
  },
  titleContainer: {
    marginTop: 0,
    position: 'absolute',
  },
  answersContainer: {
    marginTop: 220,
    flex: 1,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    marginTop: 5,
    opacity: 0.9,
  },

  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  answerText: {
    color: '#6a5acd',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
