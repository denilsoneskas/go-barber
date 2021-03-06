import React, {useEffect,useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api'

export default function App(){

  const [projects, setProjetcs] = useState([]);

  useEffect(()=> {
    api.get('projects').then(response=> {
      console.log(response.data);
      setProjetcs(response.data);
    });
  }, []);

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Denilson Martins'
    });

    const project = response.data;

    setProjetcs([...projects, project]);

  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1'></StatusBar>

      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) =>(
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
        <TouchableOpacity 
          activeOpacity={0.6}
          style={styles.button} 
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adcionar Projeto</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#7159c1'
  },
  project : {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  button : {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems : 'center',
  },

  buttonText : {
    fontWeight: 'bold',
    fontSize: 16,
  }
});