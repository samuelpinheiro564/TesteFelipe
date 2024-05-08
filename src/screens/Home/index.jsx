import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image ,ScrollView} from 'react-native';

export default function Home(){
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.cont}>
    <Image source={require('../../../assets/imagefundo.jpg')} style={styles.imagefundo} /> 
      <Text style={styles.headerText}>A </Text>
      <Text style={styles.headerText}>SUSTENTABÍLIDADE </Text>
      <Text style={styles.headerText}>NÃO É</Text>
      <Text style={styles.headerText}>UM CUSTO </Text>
      <Text style={styles.headerText}>PARA A</Text>
      <Text style={styles.headerText}>INDÚSTRIA,</Text>
      <Text style={styles.headerText}>É UM</Text>
      <Text style={styles.headerText}>INVESTIMENTO</Text>
      <Text style={styles.headerTextFinal}>NO NOSSO PLANETA.</Text>
      </View>
      <Text style={styles.subHeaderText}>
        Venha descobrir como anda a {'\n'}
        produção de seus maquinários!
      </Text>
      <Text style={styles.descriptionText}>
        Avalie suas máquinas conosco.{'\n'}
        Entenda quão sustentável ela é e {'\n'}
        como pode ser ainda melhor!
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastre sua máquina</Text>
      </TouchableOpacity>
     <Image source={require('../../../assets/imagebaixo.png')} style={styles.maq} /> 
    
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
  
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'left',
  },
  headerTextFinal: {
    flex:2,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 35,
    textAlign: 'left',
    marginBottom: 20,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'left',
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'right',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'right',
    width: 160,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',

  },
  maq: {
    width: 200,
    height: 300,
    alignSelf: 'right',
    margin:0,
  },
  imagefundo:{
    flex:1,
    width: 500,
    height: 400,
    alignSelf: 'right',
    margin:0,
    right:100,
    left:100,

  },
  cont:{
flex:2,
  },
});


