import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "eb51dace332d7014831ef1553c9953ac";

export default class extends React.Component {

  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const { data } = await axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      console.log(data);
  }
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { 
        coords: {latitude, longitude} 
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
      //Send To API and get weather!
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {isLoading} = this.state;
    return isLoading ? <Loading /> : null;
  }
}