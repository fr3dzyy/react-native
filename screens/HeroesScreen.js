import axios from 'axios'

import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
} from 'react-native'

import { useEffect, useState } from 'react'

export default function Heroes() {
  const [heroes, setHeroes] = useState([])
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  useEffect(() => {
    axios.get('https://api.opendota.com/api/heroStats').then((response) => {
      setHeroes(response.data)
    })
  }, [])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Heroes of Dota</Text>
        <Text style={styles.paragraph}>
          Heroes are the essential element of Dota 2, as the course of the match
          is dependent on their intervention. During a match, two opposing teams
          select five out of 123 heroes that accumulate Experience Experience
          and Gold Gold to grow stronger and gain new abilities in order to
          destroy the opponents Ancient. Most heroes have a distinct role that
          defines how they affect the battlefield, though many heroes can
          perform multiple roles. A heros appearance can be modified with
          equipment.
        </Text>
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
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
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
  },

  h1: {
    borderBottomColor: '#ffc0cb',
    borderBottomWidth: 1,
    color: '#ffc0cb',
    fontSize: 40,
    marginVertical: 15,
  },

  img: {
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
