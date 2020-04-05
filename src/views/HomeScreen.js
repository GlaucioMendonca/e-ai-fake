import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button, Text, Card } from 'react-native-elements';

import api from '../services'

export default function HomeScreen({ navigation }) {
  const [value, setValue] = useState('')
  const [load, setLoad] = useState(false)

  async function handleSubmit() {
    setLoad(true)
    response = await api.get(`/users/${value}`)
   
    setLoad(false)
    navigation.navigate('resultScreen', response.data.avatar_url)
    
  }

  return (
    <View style={ styles.container }>
      <Card 
        title='E aí Fake!' 
        titleStyle={styles.divider} 
        containerStyle={styles.cardStyle}
      >
        
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
  logo: {
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: '#b3d9ff',
  },
  divider: {
    fontSize: 30,
    fontWeight: "bold"
  },
  cardStyle: {
    height:'80%',    
    borderRadius: 10,
  },
  input: {
    marginTop: 30
  },
  button: {
    marginTop: 30
  }
})