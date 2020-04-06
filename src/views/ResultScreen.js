import React from 'react'
import { View, Text,StyleSheet, Image, BackHandler } from 'react-native'
import { Button, Card, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function resultScreen({ route, navigation }) {
  let isFake = false
  const fake_image = require('../assets/images/is_fake.png')
  const true_image = require('../assets/images/not_is_fake.png')

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
            source = { isFake ? true_image : fake_image }
            style= { styles.imageStyle }
          />

          <View style={ styles.info } >
            <View>     
              <Text style={ styles.infoHeaderLine }>This news is
                <Text style={ isFake == true ? styles.true : styles.false }> FAKE</Text>!
              </Text>
            </View>

            <Text style={ styles.infoText } >
              Veracity rate: <Text style={{ fontWeight: 'bold' }}> 97.53% </Text>
              {"\n"}
              Response accuracy: <Text style={{ fontWeight: 'bold' }}> 97.53% </Text>
            </Text>

          </View>

          <Button
            buttonStyle={ isFake == true ? styles.buttonTrue : styles.buttonFalse }
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
    marginTop: 30,
    width: '90%', 
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
  icon: {
    marginRight: 10,
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