import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Color, Styles } from "@common";
import * as appActions from '@redux/actions'

const HomeScreen = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const increment = () => {
    // console.log(appActions.actions);
    dispatch(appActions.actions.increment())
  }
  const decrement = () => {
    dispatch(appActions.actions.decrement())
  }
  const incrementAsync = () => {
    dispatch(appActions.actions.incrementAsync())
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>{count}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={incrementAsync} style={styles.button}>
          <Text>async up</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default HomeScreen;
