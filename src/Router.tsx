import React, { PureComponent } from "react";
import { View } from "react-native";
import Navigation from "@navigation";
import NetInfo from "@react-native-community/netinfo";

const Router = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navigation refs={comp => (this.navigator = comp)} />
    </View>
  );
}
export default Router;
