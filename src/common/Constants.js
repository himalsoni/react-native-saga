/**
 * Created for storing constant of the application
 *
 * @format
 */

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const Constants = {
  Language: "en", // ar, en. Default to set redux. Only use first time
  boldFont: 'AirbnbCerealApp-Bold',
  bookFont: 'AirbnbCerealApp-Book',
  mediumFont: 'AirbnbCerealApp-Medium',
  lightFont: 'AirbnbCerealApp-Light',
  blackFont: 'AirbnbCerealApp-Black',
  active: 'active',
  historical: 'historical',
  userBuyer: 'buyer',
  userSeller: 'seller',
  productForOffer: 'offer',
  productForRent: 'rent',
  productForSell: 'sell',
  monthNames : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export default Constants;
