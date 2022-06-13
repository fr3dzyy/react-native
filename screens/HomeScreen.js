import { Button, StyleSheet, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  return (
    <>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Hello there!</Text>
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
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topContainer: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    margin: 10,
  },
})
