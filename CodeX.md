Process to Emplement In Built Update 


First create a tsx file called UpdateChecker.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Linking,
  Platform,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import VersionCheck from 'react-native-version-check';

const UPDATE_JSON_URL =
  'https://raw.githubusercontent.com/EricDistort/raw/main/update.json'; //replace the link of the updated json url

const UpdateChecker = () => {
  const [visible, setVisible] = useState(false);
  const [apkUrl, setApkUrl] = useState('');

  const checkForUpdate = async () => {
    try {
      const res = await fetch(UPDATE_JSON_URL);
      const updateInfo = await res.json();

      const currentVersion = VersionCheck.getCurrentVersion();
      if (updateInfo.version !== currentVersion) {
        setApkUrl(updateInfo.apkUrl);
        setVisible(true);
      }
    } catch (error) {
      console.log('Update check failed:', error);
    }
  };

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handleUpdate = async () => {
    setVisible(false);
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert('Permission denied');
      return;
    }

    // Open the APK URL in the browser to download it
    Linking.openURL(apkUrl).catch(err => {
      console.error('Failed to open APK URL:', err);
      Alert.alert('Failed to open APK for installation.');
    });
  };

  useEffect(() => {
    checkForUpdate();
  }, []);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 10,
            width: '80%',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Update Available
          </Text>
          <Text style={{marginTop: 10, textAlign: 'center'}}>
            A new version of the app is available. Would you like to update now?
          </Text>
          <TouchableOpacity
            onPress={handleUpdate}
            style={{
              marginTop: 20,
              backgroundColor: '#007bff',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}>
            <Text style={{color: '#fff'}}>Update Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UpdateChecker;


Then in the main app.tsx 

import UpdateChecker from './UpdateChecker'; // import the UpdateChecker.tsx from its path
<><UpdateChecker /> // in the return section this element should be add before all the elements

