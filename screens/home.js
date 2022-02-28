import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [ modalOpen, setModalOpen ] = useState(false)
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2'},
        { title: 'Not so Final Fantasy', rating: 3, body: 'lorem ipsum', key: '3'}
    ]);

    const addReview = (inc_review) => {
        let allReviews = [...reviews]
        let lastElement = allReviews.pop();
        let lastKey = parseInt(lastElement.key, 10);

        const newReviewsArray = [ ...reviews, { ...inc_review, "key": (lastKey + 1).toString() }]
        setReviews(newReviewsArray);
        setModalOpen(false);
    }

    return (
      <View style={globalStyles.container}>
          <Modal visible={modalOpen} animationType='slide'>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={styles.modalContent}>
                      <View style={styles.closeIconHolder}>
                          <TouchableOpacity onPressIn={() => setModalOpen(false)}>
                              <MaterialIcons
                                  name='close'
                                  size={24}
                                  style={styles.closeIcon}
                              />
                          </TouchableOpacity>
                      </View>
                      <ReviewForm handleSubmit={addReview} />
                  </View>
              </TouchableWithoutFeedback>
          </Modal>

          <View style={styles.modalToggleHolder}>
              <TouchableOpacity onPressIn={() => setModalOpen(true)}>
                  <MaterialIcons
                      name='add'
                      size={24}
                      style={styles.modalToggle}
                  />
              </TouchableOpacity>
          </View>

          <FlatList
              data={reviews}
              renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                      <Card>
                          <Text> {item.title} </Text>
                      </Card>
                  </TouchableOpacity>
              )}
          />
      </View>
    )
}

const styles = StyleSheet.create({
  modalContent: {
      paddingVertical: 30,
      paddingHorizontal:10,
      flex: 1
  },
  modalToggleHolder: {
      position: 'absolute',
      right: 25,
      bottom: 25,
      zIndex: 1,
  },
  modalToggle: {
      backgroundColor: '#FF1493',
      borderRadius: 50,
      color: '#fff',
      padding: 10,
  },
  closeIconHolder: {
      position:'absolute',
      right: 20,
      top: 20,
      zIndex: 1,
  },
  closeIcon: {
      color: '#000000'
  }
})
