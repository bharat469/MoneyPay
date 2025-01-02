import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid'
import firestore from '@react-native-firebase/firestore'

const ChatDetailScreen = ({ route}) => {
  const { data, currentUserId } = route.params;
  const navigation = useNavigation()
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const renderMessage = ({ item }) =>{ 
   
    return(
    <View style={item.sender === 'me' ? styles.myMessage : styles.theirMessage}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTimestamp}>
          {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
    </View>
  )};
  useEffect(() => {
    // Reference to the Firestore messages collection
    const chatDocId = currentUserId + data?.userId; // Unique chat document ID
    const messagesRef = firestore()
      .collection('Chats')
      .doc(chatDocId)
      .collection('messages')
      .orderBy('createdAt', 'asc');
  
    // Subscribe to real-time updates
    const unsubscribe = messagesRef.onSnapshot(querySnapshot => {
      const allMessages = querySnapshot.docs.map(doc => ({
        id: doc.id,                // Include the document ID
        ...doc.data(),             // Spread the message data
     
      }));
   
      // You can now set the messages to state if required:
      setMessages(allMessages);
    });
  
    // Cleanup subscription when component unmounts
    return () => unsubscribe();
  }, []);
  

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessageItem = {
        id: uuid.v4(),
        text: newMessage,
        sender: 'me',
        sentBy: currentUserId,
        sentTo: data?.userId,
        createdAt: new Date().toISOString(),
      };
      setMessages([...messages, newMessageItem]);
      firestore()
        .collection('Chats')
        .doc('' + currentUserId + data?.userId)
        .collection('messages')
        .add(newMessageItem);
      firestore()
        .collection('Chats')
        .doc('' + data?.userId + currentUserId)
        .collection('messages')
        .add(newMessageItem);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
       <Header headerName={'Chat Screen'} onPress={()=>navigation.goBack()} />
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatContainer: {
    padding: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8E8E8',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 14,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  messageTimestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    textAlign: 'right',
  },
});
