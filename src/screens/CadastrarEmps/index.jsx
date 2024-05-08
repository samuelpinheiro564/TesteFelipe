import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , ScrollView } from 'react-native';

export default function CadastrarMaqs(){
 const [nome,setNome] = useState("");
 const [email,setEmail] = useState("");
 const [senha,setSenha] = useState("");
 const[cnpj,setCnpj] = useState("");
 const[cep,setCep] = useState("");
 const[atuacao,setAtuacao] = useState("");

  return (
    <ScrollView>
    <View style={styles.container}>
   
      <Text style={styles.title}>Cadastrar Empresas</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da empresa"
        value={nome}
        onChangeText={setNome}
      />
      <View style={styles.linha}></View>
      <TextInput
        style={styles.input}
        placeholder="Email da empresa"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.linha}></View>
    
      <TextInput
        style={styles.input}
        placeholder="cnpj da empresa"
        secureTextEntry
        value={cnpj}
        onChangeText={setCnpj}
      />
      <View style={styles.linhaFinal}></View>
      <TextInput
        style={styles.input}
        placeholder="cep da empresa"
        secureTextEntry
        value={cep}
        onChangeText={setCep}
      />
      <View style={styles.linhaFinal}></View>

      <TextInput
        style={styles.input}
        placeholder="Area de atuacao da empresa"
        secureTextEntry
        value={atuacao}
        onChangeText={setAtuacao}
      />
      <View style={styles.linhaFinal}></View>
      <TextInput
        style={styles.input}
        placeholder="senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <View style={styles.linhaFinal}></View>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
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

