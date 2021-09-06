import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Color, Styles } from "@common";

export const Spinner = () => {
  return (
    <View style={Styles.lodarMainView}>
      <ActivityIndicator animating={true} size="large" style={Styles.loader} color={'black'} />
    </View>
  );
}
