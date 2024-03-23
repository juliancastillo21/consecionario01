import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Text,Button } from 'react-native-paper';


  return (
    <View style={styles.seguroContainer}>
      <Text style={styles.nombre}>{name}</Text>
      <Text style={styles.descripcion}>{description}</Text>
      <Text style={styles.valor}>Valor: $ {worth}</Text>
      <Button onPress={() => handleSeguroClick({name, description, worth})}>Seleccionar</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  seguroContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 10,
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Sure;