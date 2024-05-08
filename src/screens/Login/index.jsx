import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , ScrollView } from 'react-native';

export default function Login(){
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');



  return (
    <ScrollView>
    <View style={styles.container}>
   
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da empresa"
        value={empresa}
        onChangeText={setEmpresa}
      />
      <View style={styles.linha}></View>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.linha}></View>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <View style={styles.linhaFinal}></View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>
        Não possui conta? <Text style={styles.registerLink}>Cadastre-se aqui.</Text>
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    // Adicione estilos para o seu logo aqui
  },
  logoText: {
    fontSize: 24,
    color: '#008000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:18,
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 5,
    marginBottom:20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  registerText: {
    marginTop: 20,
  },
  registerLink: {
    color: '#008000',
    fontWeight: 'bold',
  },
  linha: {
    height: 1,
    backgroundColor: 'black',
    width: '80%',
    marginBottom:20,
    marginTop:-20,
  },
  linhaFinal: {
    height: 1,
    backgroundColor: 'black',
    width: '80%',
    marginBottom:35,
    marginTop:-18,
  },
});

