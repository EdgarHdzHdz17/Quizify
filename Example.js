import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const preguntasYrespuestas = {
  pregunta1: {
    pregunta: "¿Cuál es la capital de Francia?",
    respuestas: ["Roma", "Madrid", "París"],
    respuestaCorrecta: "París",
  },
  pregunta2: {
    pregunta: "¿En qué año llegó el hombre a la luna por primera vez?",
    respuestas: ["1969", "1975", "1980"],
    respuestaCorrecta: "1969",
  },
  pregunta3: {
    pregunta: '¿Quién escribió "Don Quijote de la Mancha"?',
    respuestas: [
      "Miguel de Cervantes",
      "Gabriel García Márquez",
      "Pablo Neruda",
    ],
    respuestaCorrecta: "Miguel de Cervantes",
  },
  pregunta4: {
    pregunta: "¿Cuál es el río más largo del mundo?",
    respuestas: ["Nilo", "Amazonas", "Misisipi"],
    respuestaCorrecta: "Amazonas",
  },
  pregunta5: {
    pregunta:
      "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
    respuestas: ["Hierro", "Oxígeno", "Silicio"],
    respuestaCorrecta: "Oxígeno",
  },
};

const Pregunta = ({ pregunta, respuestas, respuestaCorrecta }) => {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

  const seleccionarRespuesta = (respuesta) => {
    setRespuestaSeleccionada(respuesta);

    // Verificar si la respuesta seleccionada es la correcta
    if (respuesta === respuestaCorrecta) {
      console.log("Respuesta correcta");
    } else {
      console.log("Respuesta incorrecta");
    }
  };

  return (
    <View>
      <Text style={styles.pregunta}>{pregunta}</Text>
      {respuestas.map((respuesta, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.respuesta,
            respuesta === respuestaSeleccionada && styles.respuestaSeleccionada,
          ]}
          onPress={() => seleccionarRespuesta(respuesta)}
        >
          <Text>{respuesta}</Text>
        </TouchableOpacity>
      ))}
      <Text>Respuesta seleccionada: {respuestaSeleccionada}</Text>
    </View>
  );
};

const AnimalsHome = () => {
  return (
    <View style={styles.container}>
      {Object.values(preguntasYrespuestas).map((pregunta, index) => (
        <Pregunta
          key={index}
          pregunta={pregunta.pregunta}
          respuestas={pregunta.respuestas}
          respuestaCorrecta={pregunta.respuestaCorrecta}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  pregunta: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  respuesta: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  respuestaSeleccionada: {
    backgroundColor: "lightblue",
  },
});

export default AnimalsHome;
