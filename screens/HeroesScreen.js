import axios from 'axios'

import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native'

import Hyperlink from 'react-native-hyperlink'
import Modal from 'react-native-modal'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'

export default function Heroes() {
  const [heroes, setHeroes] = useState([])
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  const [isModalVisible, setModalVisible] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  useEffect(() => {
    axios.get('https://api.opendota.com/api/heroStats').then((response) => {
      setHeroes(response.data)
    })
  }, [])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.background}
        />
        <Text style={styles.h1}>Heroes of Dota</Text>
        <Text style={styles.paragraph}>
          Heroes are the essential element of Dota 2, as the course of the match
          is dependent on their intervention. During a match, two opposing teams
          select five out of 123 heroes that accumulate Experience and Gold to
          grow stronger and gain new abilities in order to destroy the opponents
          Ancient. Most heroes have a distinct role that defines how they affect
          the battlefield, though many heroes can perform multiple roles. A
          heros appearance can be modified with equipment.
        </Text>
        <Hyperlink
          linkDefault={true}
          linkStyle={{ color: '#2980b9' }}
          linkText={(url) =>
            url === 'https://dota2.fandom.com/wiki/Role' ? 'here' : url
          }
        >
          <Text style={styles.paragraph}>
            Read more about roles https://dota2.fandom.com/wiki/Role !
          </Text>
        </Hyperlink>
        <Text style={styles.paragraphHeroes}>Show heroes!</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#222222' }}
          thumbColor={isEnabled ? '#222222' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {isEnabled && (
          <FlatList
            data={heroes}
            style={styles.heroList}
            renderItem={({ item }) => (
              <>
                <Text style={styles.heroText}>{item.localized_name}</Text>
                <Image
                  alt="Hero Picture"
                  source={{ uri: 'https://steamcdn-a.akamaihd.net' + item.img }}
                  style={styles.img}
                />
              </>
            )}
            keyExtractor={(heroes) => heroes.id}
          />
        )}
        {!isEnabled && (
          <View>
            <Button title="Show modal" onPress={toggleModal} />

            <Modal
              animationInTiming={3000}
              animationOutTiming={800}
              animationIn="slideInDown"
              animationOut="slideOutUp"
              isVisible={isModalVisible}
            >
              <View>
                <Text style={styles.paragraph}>
                  Hello there! This is my modal. 😊
                </Text>

                <Button title="Hide modal" onPress={toggleModal} />
              </View>
            </Modal>
          </View>
        )}
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },

  container: {
    alignItems: 'center',
    backgroundColor: '#222222',
    flex: 2,
  },

  heroList: {},

  heroText: {
    color: '#9e9e9e',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },

  h1: {
    borderBottomColor: '#ffc0cb',
    borderBottomWidth: 1,
    color: '#ffc0cb',
    fontSize: 40,
    marginVertical: 15,
  },

  img: {
    borderRadius: 10,
    height: 80,
    marginLeft: 20,
    width: 120,
  },

  paragraph: {
    color: '#ffc0cb',
    marginHorizontal: 25,
    marginVertical: 15,
  },

  paragraphHeroes: {
    color: '#ffc0cb',
    fontSize: 20,
    marginTop: 10,
  },
})
