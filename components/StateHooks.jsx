import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

function StateHooks() {
    const [name, setName]= useState('Amit Kumar')
    const changeState=()=>{
        setName('Bhatkar')
    }
  return (
     <View style={{marginTop: 20, alignItems:'center'}}>
        <Text style={{fontSize:25, color:'blue'}}>State Hooks Page</Text>
        <Text style={{fontWeight:'bold', fontSize:20, color:'green', marginTop:10}}>{name}</Text>
        <Text style={{fontSize:16, color:'red', marginTop:10}} onPress={changeState}>Change State</Text>
        <Button onPress={changeState} title='change state'/>
     </View>
  )
}

export default StateHooks
