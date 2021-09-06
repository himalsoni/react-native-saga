import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Color, Styles } from "@common";
import * as appActions from '@redux/actions'

const HomeScreen = () => {
  const apiMsg = useSelector(state => state.apiTester.apiMsg)
  const dispatch = useDispatch()

  const apiRequest = (obj) => {
    // console.log(appActions.actions);
    dispatch(appActions.actions.apiRequest(obj))
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => apiRequest({section_id: 1})} style={styles.button}>
          <Text style={{size:20}}>Api Request</Text>
        </TouchableOpacity>
        <Text>{apiMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default HomeScreen;
