/**
 * Created for storing common styles of the application
 *
 * @format
 */

import { Dimensions, Platform } from "react-native";
const { height, width } = Dimensions.get("window");
import Color from "./Color";
import Device from "./Device";
import Constants from "./Constants";

const Styles = {
  width: Dimensions.get("window").width,
  height: Platform.OS !== "ios" ? height : height - 20,
  navBarHeight: Platform !== "ios" ? height - width : 0,
  headerHeight: Platform.OS === "ios" ? 40 : 56,
  mainHeaderHeight: Platform.OS === "ios" ? 50 : 56,

  inputOuterWrapper:{
    // flexDirection:"row",
    marginTop:15,
  },
  inputTitleText:{
    // flex:0.3,
    fontSize: 17,
    color: Color.mainColor,
    fontFamily: Constants.bookFont,
    letterSpacing: 0.5,
    marginBottom:4,
    opacity:0.7,
  },
  inputStyle:{
    height:45,
    backgroundColor:Color.inputBoxBack,
    borderRadius:5,
    borderWidth:1,
    borderColor:Color.borderColor,
    paddingHorizontal:8,
    fontSize: 16,
    color: Color.mainColor,
    fontFamily: Constants.bookFont,
  },
  inputStyleError:{
    height:45,
    backgroundColor:Color.inputBoxBack,
    orderRadius:5,
    borderWidth:1,
    borderColor:Color.errorColor,
    paddingHorizontal:8,
    fontSize: 16,
    color: Color.mainColor,
    fontFamily: Constants.bookFont,
  },
  inputErrorMsgText: {
    color: Color.errorColor,
    fontFamily: Constants.lightFont,
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 4,
  },
  inputStatusWrapper:{
    flexDirection:"row",
    alignItems:'center',
    marginTop:15,
    // backgroundColor:'pink'
  },
  statusSwitchWrapper:{
    marginLeft:10,
  },
  btnContainer:{
    alignItems:"center",
    marginTop:20,
    marginBottom:30,
  },
  submitBtnContainer:{
    backgroundColor:Color.assetColor,
    width:250,
    height:45,
    borderRadius:15,
    alignItems:"center",
    justifyContent:'center',
  },
  submitBtnText:{
    color: Color.white,
    fontFamily: Constants.mediumFont,
    fontSize: 16,
    textTransform:"uppercase",
  },

  pickerWrapper:{
    // flex:1,
    flexDirection:"row",
    alignItems:'center',
  },
  pickerTitleText:{
    flex:0.3,
    fontSize: 17,
    color: Color.mainColor,
    fontFamily: Constants.bookFont,
    letterSpacing: 0.5,
    opacity:0.7,
  },
  pickerContainerStyle:{
    // flex:1,
    height:45,
    // backgroundColor:Color.inputBoxBack,
    // borderWidth:1,
    // borderColor:Color.borderColor,
  },
  pickerStyle:{
    backgroundColor:Color.inputBoxBack,
    // borderWidth:1,
    borderColor:Color.borderColor,
    fontSize: 16,
    color: Color.mainColor,
    fontFamily: Constants.bookFont,
  },
  pickerItemStyle:{
    justifyContent: 'flex-start',
    fontSize: 16,
    color: Color.mainColor,
    fontFamily: Constants.bookFont,
  },
  pickerDropDownStyle:{
    backgroundColor: Color.inputBoxBack,
    fontSize: 16,
    color: Color.mainColor,
    fontFamily: Constants.bookFont,
  },























  topSafeAreaView: {
    flex: 0,
    backgroundColor: 'red'
  },
  bottomSafeAreaView: {
    flex: 1,
    backgroundColor: 'gray'
  },

  authHeaderContainer: {
    marginTop: 0,
  },
  authHeaderBackImageContainer: {
    marginTop: 0,
  },
  authHeaderBackImage: {
    width: null,
    height: 180,
  },
  authHeaderLogoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 25,
    alignItems: 'center'
  },
  authHeaderLogo: {
    marginTop: 0,
  },
  authHeaderTextContainer: {
    marginHorizontal: 30,
    marginTop: 30
  },
  authHeaderTitle: {
    margin: 0,
  },
  authHeaderTitleText: {
    fontSize: 28,
    color: Color.mainColor,
    fontFamily: Constants.boldFont,
    lineHeight: 36,
    letterSpacing: 0.5,
  },
  authHeaderDesc: {
    margin: 0,
  },
  authHeaderDescText: {
    fontSize: 14,
    color: Color.mainColor,
    fontFamily: Constants.bookFont,
    lineHeight: 18,
    letterSpacing: 1,
    opacity: 0.6
  },
  authFormContainer: {
    marginHorizontal: 30
  },
  authInputLabel: {
    marginBottom: 10
  },
  authInputLabelText: {
    color: Color.mainColor,
    fontFamily: Constants.boldFont,
    fontSize: 11,
    letterSpacing: 1,
    lineHeight: 14,
  },
  authInputLabelErrorText: {
    color: '#E2401B',
    fontFamily: Constants.boldFont,
    fontSize: 11,
    letterSpacing: 1,
    lineHeight: 14,
  },
  authInputWrapShort: {
    height: 47,
    backgroundColor: '#F2F1F6',
    borderWidth: 0.5,
    borderRadius: 14,
    borderColor: "transparent",
    width: width * 0.4,
  },
  authInputWrapShortError: {
    borderColor: "#E2401B",
    height: 47,
    backgroundColor: '#F2F1F6',
    borderWidth: 0.5,
    borderRadius: 14,
    width: width * 0.4,
  },
  authInputWrapLong: {
    height: 47,
    backgroundColor: '#F2F1F6',
    borderWidth: 0.5,
    borderRadius: 14,
    borderColor: "transparent",
  },
  authInputWrapLongError: {
    height: 47,
    backgroundColor: '#F2F1F6',
    borderWidth: 0.5,
    borderRadius: 14,
    borderColor: "#E2401B",
  },
  authInput: {
    flex: 1,
    color: Color.mainColor,
    marginTop: 10,
    paddingBottom: 8,
    fontSize: 14,
    opacity: 0.9,
    paddingHorizontal: 15,
    letterSpacing: 0.5,
    fontFamily: Constants.mediumFont,
  },
  authPwdContainer: {
    flexDirection: 'row'
  },
  authShowPwdContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 6,
    marginRight: 9,
  },
  authShowPwd: {
    width: 16,
    height: 16
  },
  authErrorMsgText: {
    color: '#E2401B',
    fontFamily: Constants.lightFont,
    fontSize: 11,
    letterSpacing: 1,
    lineHeight: 14,
    marginTop: 4,
  },

  authBottomContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30
  },
  authBottomBtnContainer: {
    backgroundColor: Color.assetColor,
    height: 47,
    borderRadius: 14,
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Color.assetColor,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  authBottomBtnText: {
    color: Color.mainColor,
    fontFamily: Constants.boldFont,
    fontSize: 13,
    lineHeight: 17,
    textTransform: 'uppercase',
  },
  authBottomTextContainer: {
    flexDirection: 'row',
    marginTop: 15
  },
  authBottomText: {
    color: Color.mainColor,
    fontFamily: Constants.bookFont,
    fontSize: 12,
    lineHeight: 16,
    opacity: 0.5,
    letterSpacing: 0.4
  },
  authBottomClickableText: {
    color: Color.assetColor,
    fontFamily: Constants.boldFont,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    marginLeft: 4
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Device.isIphoneX ? 38 : 20,
    height: Device.isIphoneX ? 95 : 65,
    borderBottomWidth: 0.5,
    borderColor: '#F2F1F6'
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: Color.mainColor,
    fontFamily: Constants.boldFont,
    lineHeight: 23,
    letterSpacing: 0.2,
  },
  singleBottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  singleBottomEnabledBtnContainer: {
    width: '80%',
    height: 45,
    backgroundColor: '#FDC10F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    marginTop: 16,
    shadowColor: Color.assetColor,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  singleBottomBtnContainer: {
    width: '80%',
    height: 45,
    backgroundColor: '#BDBDC7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    marginTop: 16,
  },
  singleBottomBtnText: {
    fontSize: 13,
    color: Color.mainColor,
    fontFamily: Constants.boldFont,
    lineHeight: 17,
    textTransform: 'uppercase',
  },

  bottomDoubleBtnContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingHorizontal: 25,
  },
  bottomDoubleBtnWhiteContainer: {
    backgroundColor: '#FFFFFF',
    height: 47,
    borderRadius: 14,
    borderColor: Color.mainColor,
    borderWidth: 1,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomDoubleBtnYellowContainer: {
    width: '45%',
    height: 47,
    backgroundColor: '#FDC10F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    shadowColor: Color.assetColor,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  noDataFoundContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 150,
    paddingHorizontal:25,
  },
  noDataFoundText: {
    fontSize: 15,
    color: Color.mainColor,
    fontFamily: Constants.boldFont,
    lineHeight: 17,
    textTransform: 'uppercase',
    textAlign:'center',
  },

  lodarMainView:{
    flex:1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center",
    zIndex:20,
  },
  loader:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Styles;
