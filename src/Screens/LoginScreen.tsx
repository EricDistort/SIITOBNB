import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

const SHEET_API_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgsMrTIUoYPuwIQ1SWbKmmJGj8NIrWqq64RPt3gOaf10jLJLoMER7XUr77jP6ox1hzK33ZXkMn9p7XASm_aCaAQke3I7YLSFtj84kf5tbtbmHWd0CIvzDAZxABmFqq5eJuE0akhPzAbwKABf3PMKpKK5lk53871l0ucUN1n4y2h6PZCYOLfruHyS7LFoTlT3L7gQsOFKWWk44MbRFpk7j4OH-c0vVMONQ0GztjnB8imE6yjlq_zBjhuWRtWJGN2lznQsCtxT5143kXE_5NGj4l1DrLb_g&lib=ME-E8mFgtLHMJwd7P7FGhUN3lDsGkcowU';

type RootStackParamList = {
  Duno: undefined;
};

export default function LoginRegister() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigateToApp = () => navigation.navigate('Duno');

  const handleRegister = async () => {
    if (!username || !password) return Alert.alert('Fill all fields');
    try {
      const checkRes = await fetch(
        `${SHEET_API_URL}/search?username=${username}`,
      );
      const existingUsers = await checkRes.json();

      if (existingUsers.length > 0) return Alert.alert('User already exists');

      const res = await fetch(SHEET_API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data: [{username, password}]}),
      });

      if (res.ok) {
        navigateToApp();
      } else {
        Alert.alert('Registration failed');
      }
    } catch {
      Alert.alert('Error registering user');
    }
  };

  const handleLogin = async () => {
    if (!username || !password) return Alert.alert('Fill all fields');
    try {
      const res = await fetch(`${SHEET_API_URL}/search?username=${username}`);
      const data = await res.json();
      if (data.length && data[0].password === password) {
        navigateToApp();
      } else {
        Alert.alert('Invalid credentials');
      }
    } catch {
      Alert.alert('Login error');
    }
  };

  return (
    <ImageBackground
      source={require('../../media/background.png')}
      style={styles.background}
      resizeMode="cover">
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: moderateScale(8),
        }}>
        <View style={styles.container}>
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
                colors={['#8CA6DB', '#B993D6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.button}>
                <Text style={styles.btntxt}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister} style={{width: '48%'}}>
              <LinearGradient
                colors={['#8CA6DB', '#B993D6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.button}>
                <Text style={styles.btntxt}>Register</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: scale(14),
    backgroundColor: 'rgba(34, 34, 34, 0.74)',
    height: verticalScale(340),
    width: scale(320),
    borderRadius: moderateScale(14),
  },
  title: {
    fontSize: moderateScale(26),
    marginBottom: verticalScale(22),
    color: '#fff',
  },
  input: {
    width: '80%',
    paddingVertical: moderateScale(10),
    marginBottom: verticalScale(12),
    backgroundColor: 'transparent',
    color: '#fff',
    borderRadius: moderateScale(4),
    fontSize: moderateScale(17),
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
  },
  button: {
    padding: moderateScale(14),
    borderRadius: moderateScale(8),
    marginTop: verticalScale(12),
    alignItems: 'center',
  },
  btntxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(17),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
    marginTop: verticalScale(12),
  },
});
