import React, { useEffect, useState } from 'react'
import { View, Text,StyleSheet, Image, BackHandler } from 'react-native'
import { Button, Card, Divider } from 'react-native-elements';

export default function resultScreen({ route, navigation }) {
  const [isTrue, setIsTrue] = useState(false)
  const [ rate, setRate] = useState('')
  const fake_image = require('../assets/images/is_fake.png')
  const true_image = require('../assets/images/not_is_fake.png')

  useEffect( () => {
    const isTrue = route.params.message.includes('TRUE')
    setIsTrue(isTrue)
    setRate(route.params.rate)
    console.log('is FAKE?',isTrue)
  }, [])

  const handlerCloseApp = () => {
    BackHandler.exitApp()
  }

  const cardTitle = <Text style={styles.title}> E aí <Text style = {styles.bold}>Fake!</Text></Text>

  return (
    <View style={ styles.container }>
      <Card 
        title={cardTitle} 
        containerStyle={styles.cardStyle}
      >
        <Divider style={{ backgroundColor: '#000', marginTop: 20 }} />
        <View style={ styles.responseContent }>
          <Image 
            source = { isTrue ? true_image : fake_image }
            style= { styles.imageStyle }
          />

          <View style={ styles.info } >
            <View>     
              <Text style={ styles.infoHeaderLine }>This news is
                <Text style={ isTrue == true ? styles.true : styles.false }> 
                  {isTrue == true ? 'TRUE' : 'FAKE'}
                </Text>!
              </Text>
            </View>

            <Text style={ styles.infoText } >
              Veracity rate: <Text style={{ fontWeight: 'bold' }}> {rate}% </Text>
            </Text>

          </View>

          <Button
            buttonStyle={ isTrue == true ? styles.buttonTrue : styles.buttonFalse }
            title="CLOSE"
            titleStyle={ styles.buttonTitle }
            onPress = { handlerCloseApp }
          />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: '#677FFF',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Poppins'
  },
  bold: {
    fontFamily: 'Poppins,sans-serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  responseContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    fontSize: 30,
    fontWeight: "bold",
  },
  cardStyle: {
    width: '91%',
    borderRadius: 10,
  },
  imageStyle: {
    marginTop: 30,
    width: 200, 
    height: 200,
    resizeMode: "contain"
  },
  info: {
    
  },
  infoHeaderLine: {
    fontSize: 30,
    textAlign: 'center',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  buttonTrue: {
    marginTop: 20,
    width: 300, 
    height: 50,
    borderRadius: 10,
    backgroundColor: '#3ACC6C'
  },
  buttonFalse: {
    marginTop: 20,
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F50057'
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  true: {
    fontWeight: 'bold',
    color: '#3ACC6C'
  },
  false: {
    fontWeight: 'bold',
    color: '#F50057'
  }
})