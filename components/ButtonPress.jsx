import React from 'react'
import { Button, Text, View } from 'react-native'

function ButtonPress() {
    const call=(val) =>{
        //console.error("Function called when button is pressed error")
        console.error(val)
    }

  return (
     
      <View>
        <Text style={{fontSize: 20, marginTop: 20, marginStart: 110 }}>Button and onPress</Text>
        <Button title='Button Click 1' onPress={call} color={'red'}/>
        <Button title='Button Click 2' onPress={()=>call("Hello")} color={'green'}/>
      </View>
     
  )
}

export default ButtonPress
