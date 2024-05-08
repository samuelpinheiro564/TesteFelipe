import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView, Image } from 'react-native';

export default function PesquisarEmps() {
  const maquinas = Array.from({ length: 8 }, (_, index) => ({
    id: index,
    imagem:".png",
    modelo: `modelo: maquina ${index + 1}`,
  
  }));

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.headerText}>Maquinas Cadastradas</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Digite a maquina"
      />
      <View style={styles.companyList}>
        
        <View style={styles.row}>
          {maquinas.map((maq) => (
            <TouchableOpacity key={maq.id} style={styles.companyButton}>
              <Image source={maq.imagem} style={styles.imagens}/>
              <Text style={styles.companyButtonText}>{maq.modelo}</Text>
              <Text style={styles.companyButtonText}>{maq.marca}</Text>
              <Text style={styles.companyButtonText}>{maq.potencia}</Text>
              <Text style={styles.companyButtonText}>{maq.tipocombustivel}</Text>
              <Text style={styles.companyButtonText}>{maq.quantidade}</Text>
              <Text style={styles.companyButtonText}>{maq.anosdeuso}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
     
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 10,
    marginBottom:20,
    marginTop:15,
    width:"85%",
    marginLeft:25,
  },
  companyList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  companyButton: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 15,
    margin: 5,
  },
  companyButtonText: {
    color: '#fff',
    textAlign: 'left',
    width:100,
    height:"auto",
  },
  imagens:{
    borderRadius:50,
    width:90,
    height:90,
    borderColor:"#fff",
    borderWidth:5,
  }
});
