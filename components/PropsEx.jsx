import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

function PropsEx() {
    const [name, setName]=useState('mohan')

    function set(){
        setName('rahul devendra')
    }

  return (
     <View style={{alignItems:'center', marginTop: 20}}>
        <Text style={{fontSize:25, backgroundColor:'yellow'}}>Props Example Page</Text>
        <PropsName names={name}/>
        <Button title='Change Name' onPress={set}/>
     </View>
  )
}

function PropsName(props){
    return (
        <View style={{backgroundColor:'red'}}>
        <Text style={{fontSize:20, marginTop:10}}>Hello, My Name is {props.names}</Text>
        <Text style={{fontSize:20, marginTop:10}}>My Name is {props.names}</Text>

        </View>
    )
}

export default PropsEx
