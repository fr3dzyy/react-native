import axios from 'axios'

import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { useEffect, useState } from 'react'

export default function Heroes() {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    axios.get('https://api.opendota.com/api/heroStats').then((response) => {
      setHeroes(response.data)
    })
  }, [])

  const renderHero = ({ hero }) => (
    <View>
      <Text>{hero.localized_name}</Text>
    </View>
  )

  return (
    <>
      <View>
        <Text>Heroes!</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={heroes}
          renderItem={renderHero}
          keyExtractor={(hero) => hero.id}
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
})
