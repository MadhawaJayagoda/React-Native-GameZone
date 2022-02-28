import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from 'yup';
import ReviewSchema from "../schemas/ReviewSchema";
import FlatButton from "../shared/button";

export default function ReviewForm({handleSubmit}) {
  const fields = {
    title: "",
    body: "",
    rating: "",
  };

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={fields}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          handleSubmit(values);
        }}
      >
        {(props) => (
          <View>
            <View style={{marginBottom: 10}}>
                <Text> Please fill the form below </Text>
            </View>
            <TextInput
              style={globalStyles.inputField}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>
            {
                props.touched.title && props.errors.title
            }
            </Text>

            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.inputField}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}> { props.touched.body && props.errors.body } </Text>

            <TextInput
              style={globalStyles.inputField}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              onBlur={props.handleBlur('rating')}
              keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}> { props.touched.rating && props.errors.rating } </Text>

            <View style={{marginTop: 15}}>
              <FlatButton text='submit' onPressHandler={props.handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
