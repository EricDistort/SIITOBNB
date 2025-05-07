import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, PermissionsAndroid, Platform } from "react-native";
import Contacts from "react-native-contacts";

const ContactsScreen: React.FC = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  useEffect(() => {
    const requestContactsPermission = async () => {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: "Contacts Permission",
            message: "This app would like to view your contacts.",
            buttonPositive: "OK",
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) return;
      }

      fetchContacts();
    };

    requestContactsPermission();
  }, []);

  const fetchContacts = () => {
    Contacts.getAll()
      .then((contactsList) => {
        setContacts(contactsList);
      })
      .catch((err) => console.log("Error fetching contacts:", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contacts List</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.recordID}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactItem}>
            <Text style={styles.contactName}>{item.displayName}</Text>
            {item.phoneNumbers.length > 0 && (
              <Text style={styles.contactNumber}>{item.phoneNumbers[0].number}</Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: '#FFFFFF'
  },
  contactItem: {
    padding: 15,
    backgroundColor: 'rgba(255, 153, 0, 0.17)',
    marginVertical: 5,
    borderRadius: 8,
    elevation: 1,

  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#FFFFFF'
  },
  contactNumber: {
    fontSize: 16,
    color: "gray",
  },
});

export default ContactsScreen;
