import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Mist: {
    iconName: "weather-hail",
    gradient: ["#79CBCA", "#79CBCA", "#E684AE"],
    title: "Mist",
    subtitle: "It's better not to go outside",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#16222A", "#3A6073"],
    title: "Thunderstorm",
    subtitle: "Just stay at home",
  },
  Drizzle: {
    iconName: "weather-pouring",
    gradient: ["#283E51", "#4B79A1"],
    title: "Drizzle",
    subtitle: "See outside through the windows",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#1A2980", "#26D0CE"],
    title: "Rain",
    subtitle: "Just stay at home and study hard",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    title: "Snow",
    subtitle: "See beautiful snow at home with coding",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF512F", "#F09819"],
    title: "Clear",
    subtitle: "Weather is good to study at home",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#BE93C5", "#7BC6CC"],
    title: "Clouds",
    subtitle: "Listening your favorite song at home",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#009FFF", "#009FFF"],
    title: "Haze",
    subtitle: "Just eat ramen at home. It makes you feel good.",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#6D6027", "#D3CBB8"],
    title: "Dust",
    subtitle: "If you don't have mask, just stay at home",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={100}
          color="#eee"
          name={weatherOptions[condition].iconName}
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Haze",
    "Dust",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 36,
    color: "#eee",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 40,
    color: "#eee",
  },
  subtitle: {
    fontWeight: "300",
    color: "#eee",
    fontSize: 25,
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 25,
  },
});
