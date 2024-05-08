import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default function PesquisarEmps() {
  const dicas = Array.from({ length: 8 }, (_, index) => ({
    id: index,
    titulo: `Dicas ${index + 1}`,
  }));

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.headerText}>Dicas para Maquinas</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Selecione uma Dica"
      />
      <View style={styles.companyList}>
        
        <View style={styles.row}>
          {dicas.map((dica) => (
            <TouchableOpacity key={dica.id} style={styles.companyButton}>
              <Text style={styles.companyButtonText}>{dica.titulo}</Text>
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
    textAlign: 'center',
    width:100,
    height:50,
    marginLeft:"5%",
    marginLeft:"5%",
    marginBottom:5,
    marginTop:20,
  },
});
