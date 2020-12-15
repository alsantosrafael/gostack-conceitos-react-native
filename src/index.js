import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';

import api from './services/api';

/*
* Em react native nenhum elemento tem um significado, isto é, não existe semântica
* Além disso, em RN eles não possuem estilização própria
* View: representa uma div, section, footer, header, main, aside, 
* basicamente containeres do HTML 
*
* Text representa um h1-h6, p, strong, span, ou qualquer outra tag de texto da WEB
*/

export default function App () {
  const [repositories, setRepositories] = React.useState([]);

React.useEffect(() => {
  api.get('/repositories').then(response => {
    console.log(response.data);
    setRepositories(response.data);
  }).catch((err) => {
    console.log(err)
  }) 

  

}, [])

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="palevioletred"/>
    <SafeAreaView     style={styles.container} >
    <FlatList 
    data={repositories} 
    keyExtractor={repo => repo.id} 
    renderItem={({ item }) => (
      <Text style={styles.title}>{item.title}</Text>
    )}/>
        </SafeAreaView> 
    {/* <View style={styles.container}>
      {repositories.length ? 
      (repositories.map((repo) => (
      <Text style={styles.title} key={repo.id}>{repo.title}</Text> ))) 
      : (<Text style={styles.title}> Carregando...</Text>)
      }
    </View> */}

    </> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,

    backgroundColor: 'palevioletred'
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold'
  }
})