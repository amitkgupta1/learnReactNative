
import React from 'react';
import { Button, Text, View } from 'react-native';
import Student from './components/Text';
import ButtonPress from './components/ButtonPress';
import StateHooks from './components/StateHooks';
import PropsEx from './components/PropsEx';
import TextStyle from './components/TextStyle';
function App() {

  return (
    <View>
      <Text style= {{fontSize:30, textAlign:'center'}}>Hello world</Text>
      {/* <Student />
      <ButtonPress />
      <StateHooks />
      <PropsEx /> */}
      <TextStyle />
    </View>
       
  );
}

export default App;
