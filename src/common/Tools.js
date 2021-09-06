/**
 * Created for storing common functions of the application
 *
 * @format
 */

import { PixelRatio, Linking } from "react-native";
import _EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";
export const EventEmitter = new _EventEmitter();
import Constants from "./Constants";

export function toast(msg, duration = 3000){
  EventEmitter.emit('toast', msg, duration) ;
}

export function log(message) {
  console.log(message);
}

export const countPiece = (selectedRange) => {
  let count = 0;
  for (var i = selectedRange[0]; i <= selectedRange[1]; i++){
    if ((i % 2) === 0){
      count++;
    }
  }
  return count;
}

export const isEmailValid = (email) => {
  let isValid = true;
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  if (!pattern.test(email)) {
      isValid = false;
  }
  return isValid;
}

export const isPwdValid = (pwd) => {
    if (pwd.length < 8) {
        return "Your password must be at least 8 characters";
    }
    if (pwd.search(/[a-z]/i) < 0) {
        return "Your password must contain at least one letter.";
    }
    if (pwd.search(/[0-9]/) < 0) {
        return "Your password must contain at least one digit.";
    }
    return "";
}

export const getDate = (date) => {
  const myDate = new Date(date);
  const dateVal = myDate.getDate();
  let ordinal = 'th ';
  if (dateVal === 1) {
    ordinal = 'st ';
  } else if (dateVal === 2) {
    ordinal = 'nd ';
  } else if (dateVal === 3) {
    ordinal = 'rd ';
  }
  return dateVal + ordinal + Constants.monthNames[myDate.getMonth()] + ' ' + myDate.getFullYear();
}
