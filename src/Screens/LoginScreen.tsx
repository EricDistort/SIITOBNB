import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const SHEET_API_URL = 'https://sheetdb.io/api/v1/q44dokc0xmncc';

type RootStackParamList = {
  StartNav: undefined;
  // add other routes here if needed
};

export default function LoginRegister() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigateToApp = () => {
    navigation.navigate('StartNav');
  };

  const handleRegister = async () => {
    if (!username || !password) {
      return Alert.alert('Fill all fields');
    }
    try {
      // Check if username already exists first
      const checkRes = await fetch(
        `${SHEET_API_URL}/search?username=${username}`,
      );
      const existingUsers = await checkRes.json();

      if (existingUsers.length > 0) {
        return Alert.alert('User already exists');
      }

      // Register new user
      const res = await fetch(SHEET_API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          data: [{username, password}],
        }),
      });
      if (res.ok) {
        Alert.alert('Registered successfully!');
        navigateToApp();
      } else {
        Alert.alert('Registration failed');
      }
    } catch (error) {
      Alert.alert('Error registering user');
    }
  };

  const handleLogin = async () => {
    if (!username || !password) {
      return Alert.alert('Fill all fields');
    }
    try {
      const res = await fetch(`${SHEET_API_URL}/search?username=${username}`);
      const data = await res.json();
      if (data.length && data[0].password === password) {
        Alert.alert('Login successful!');
        navigateToApp();
      } else {
        Alert.alert('Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Login error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login / Register</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholderTextColor="grey"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        autoCapitalize="none"
        placeholderTextColor="grey"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={{width: '48%'}}>
          <LinearGradient
            colors={['#B993D6', '#8CA6DB', '#B993D6']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button}>
            <Text style={styles.btntxt}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister} style={{width: '48%'}}>
          <LinearGradient
            colors={['#B993D6', '#8CA6DB', '#B993D6']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button}>
            <Text style={styles.btntxt}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: scale(10),
  },
  title: {
    fontSize: moderateScale(24),
    marginBottom: verticalScale(20),
    color: '#fff',
  },
  input: {
    width: '80%',
    paddingVertical: moderateScale(8),
    marginBottom: verticalScale(10),
    backgroundColor: 'transparent', // Remove box background
    color: 'grey',
    borderRadius: 0,
    fontSize: moderateScale(16),
    borderBottomWidth: 0.5, // Add a simple line
    borderBottomColor: '#fff', // White line
  },
  button: {
    padding: moderateScale(12),
    borderRadius: moderateScale(6),
    marginTop: verticalScale(10),
    alignItems: 'center',
  },
  btntxt: {color: '#fff', fontWeight: 'bold', fontSize: moderateScale(16)},

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
});



