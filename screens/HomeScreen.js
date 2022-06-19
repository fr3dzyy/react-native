import { Button, Image, StyleSheet, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import headerImage from '../assets/wd-bro.jpg'
import newsImage from '../assets/win.jpg'

export default function Home() {
  const navigation = useNavigation()

  return (
    <>
      <View>
        <Image style={styles.imageTop} source={headerImage}></Image>
      </View>
      <View style={styles.newsContainer}>
        <Text style={styles.newsHeader}>Latest News</Text>
        <Image style={styles.newsImage} source={newsImage}></Image>
        <Text style={styles.newsText}>
          The Stockholm Major Champions 24 Maj 2022
        </Text>
      </View>
      <View style={styles.heroContainer}>
        <Text style={styles.heroText}>Check out all the heroes of Dota!</Text>
        <Button
          style={styles.button}
          title="Go to heroes"
          onPress={() => navigation.navigate('Heroes')}
        />
      </View>
      <View style={styles.communityContainer}>
        <Button
          style={styles.button}
          title="Community"
          onPress={() => navigation.navigate('Community')}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  button: {},

  communityContainer: {
    alignItems: 'center',
    backgroundColor: '#222222',
    borderBottomColor: '#ffc0cb',
    borderBottomWidth: 0.5,
    color: '#ffc0cb',
    flex: 1,
    justifyContent: 'center',
  },

  heroContainer: {
    alignItems: 'center',
    backgroundColor: '#222222',
    borderTopColor: '#ffc0cb',
    borderTopWidth: 0.5,
    flex: 2,
    justifyContent: 'center',
  },

  heroText: {
    color: '#ffc0cb',
    fontSize: 15,
    margin: 10,
  },

  newsContainer: {
    alignItems: 'center',
    backgroundColor: '#222222',
    flex: 3,
  },

  newsImage: {
    height: 100,
    width: 300,
  },

  newsHeader: {
    borderBottomColor: '#ffc0cb',
    borderBottomWidth: 1,
    color: '#ffc0cb',
    fontSize: 25,
    margin: 10,
  },

  newsText: {
    color: '#ffc0cb',
    marginTop: 10,
  },

  imageTop: {
    height: 170,
    width: 'auto',
  },
})
