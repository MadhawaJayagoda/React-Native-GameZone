import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Card from "../shared/card.js";
import { globalStyles, ratings } from "../styles/global.js";

export default function ReviewDetails({ navigation }) {

  const ratingVal = parseInt(navigation.getParam("rating"), 10);

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text> ReviewDetails screen</Text>
        <Text> {navigation.getParam("title")} </Text>
        <Text> {navigation.getParam("body")} </Text>
        <View style={styles.ratingContainer}>
            <Text> GameZone rating: </Text>
            <Image source={ratings[ratingVal]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});
