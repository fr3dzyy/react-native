import { useRef, useState } from 'react'

import {
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export default function Community() {
  const drawer = useRef(null)
  const [text, setText] = useState('')

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.headerMessages}>Messages</Text>
      <Text style={styles.paragraph}>{text}</Text>
      <Button
        title="Close messages"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  )

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Write a message?</Text>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
        <Button
          style={styles.button}
          title="Send message"
          onPress={() => alert('Thanks for your message! ✌️')}
        />
      </View>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="right"
        renderNavigationView={navigationView}
      >
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Show messages"
            onPress={() => drawer.current.openDrawer()}
          />
        </View>
      </DrawerLayoutAndroid>
    </>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#222222',
    flex: 3,
  },

  container: {
    alignItems: 'center',
    backgroundColor: '#222222',
    flex: 1,
  },

  headerMessages: {
    fontSize: 20,
    marginTop: 20,
  },

  headerText: {
    color: '#ffc0cb',
    fontSize: 20,
    marginVertical: 20,
  },

  input: {
    color: '#ffc0cb',
    borderColor: '#ffc0cb',
    borderWidth: 1,
    height: 35,
    marginBottom: 25,
    padding: 10,
    width: 100,
  },

  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },

  paragraph: {
    padding: 16,
    fontSize: 15,
  },
})
