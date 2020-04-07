import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button, Text, Card, Divider } from 'react-native-elements';

import api from '../services'

export default function HomeScreen({ navigation }) {
  const [value, setValue] = useState('')
  const [load, setLoad] = useState(false)

  async function handleSubmit() {
    setLoad(true)
    let response = null
    try {
      response = await api.post('/verify', { url: `${value}` })
      console.log(response.data)
      navigation.navigate('resultScreen', response.data)
      setLoad(false)
    } catch (error) {
      setLoad(false)
    }
    
  }
  const cardTitle = <Text style={styles.title}> E aí <Text style = {styles.bold}>Fake!</Text></Text>
  return (
    <View style={ styles.container }>
      <Card 
        title={cardTitle} 
        titleStyle={styles.divider} 
        containerStyle={styles.cardStyle}
      >
        <Divider style={{ backgroundColor: '#000', marginTop: 20 }} />
        
        <Input 
          placeholder='Check notice...'
          maxLength = {500}
          onChangeText = { text => setValue(text) }
          value = {value}
          containerStyle = { styles.input }
        />

        <Button
          title="Verify fake news"
          loading = {load}
          onPress = { () => handleSubmit() }
          buttonStyle = { styles.button }
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',

  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: '#677FFF',
  },
  divider: {
  },
  cardStyle: {
    height:'80%',    
    borderRadius: 10,
  },
  input: {
    marginTop: 50
  },
  button: {
    marginTop: 50
  },
  bold: {
    fontWeight: 'bold'
  }
})