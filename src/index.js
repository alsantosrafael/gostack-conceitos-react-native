import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
* Em react native nenhum elemento tem um significado, isto é, não existe semântica
* Além disso, em RN eles não possuem estilização própria
* View: representa uma div, section, footer, header, main, aside, 
* basicamente containeres do HTML 
*
* Text representa um h1-h6, p, strong, span, ou qualquer outra tag de texto da WEB
*/

export default function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Mundo!</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'palevioletred'
  },
  title: {
    color: '#FFF',

    fontSize: 32,
    fontWeight: 'bold'
  }
})