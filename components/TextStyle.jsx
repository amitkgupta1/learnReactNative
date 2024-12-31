import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function TextStyle() {
  return (
     <View>
        <Text style={styles.text} >Hello</Text>
        <Text style={styles.text} >Hello</Text>
        <Text style={styles.text} >Hello</Text>
        <Text style={styles.text} >Hello</Text>
        <Text style={styles.text} >Hello</Text>
        <Text style={styles.text} >Hello</Text>
        <Text style={styles.text} >Hello</Text>
        <Text style={styles.text} >Hello</Text>
        <Text style={styles.text} >Hello</Text>
        <Text >Hello</Text>
     </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'lightred',
        backgroundColor: 'yellow',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
    },
})

export default TextStyle
