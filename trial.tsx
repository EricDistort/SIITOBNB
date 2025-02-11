import { StyleSheet, Text, useColorScheme, View } from 'react-native'

function App() {

  const isDarkMode = useColorScheme() === 'dark'
  
  return(
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  whiteText: {
    color: '#FFFFFF'
  },

  darkText: {
    color: '#000000',
    fontWeight: 900,
    fontSize: 20,
    fontStyle: 'italic'
  }
})

export default App;
