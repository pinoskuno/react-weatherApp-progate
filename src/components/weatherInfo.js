import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const WeatherInfo = ({ weatherData }) => {
  const {
    name, // Nama kota
    main: { temp }, // Suhu dalam derajat Celsius
    weather, // Informasi cuaca
    visibility, // Visibilitas dalam kilometer
    wind: { speed }, // Kecepatan angin dalam meter per detik
  } = weatherData;

  // weather adalah array, kita ambil elemen pertama
  const weatherCondition = weather[0];
  return (
    <View style={styles.marginTop20}>
      <Text style={styles.text}>The weather of {name}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>{temp} C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{ uri: 'https://openweathermap.org/img/w/${weatherCondition.icon}.png' }}
          style={styles.weatherIcon}
        />
        {/* Menampilkan deskripsi singkat cuaca */}
        <Text style={[styles.text, styles.bold]}>{weatherCondition.main}</Text>
      </View>
      {/* Menampilkan deskripsi lengkap cuaca */}
      <Text style={styles.text}>{weatherCondition.description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility :</Text>
        {/* Menampilkan visibilitas dalam kilometer */}
        <Text style={[styles.text, styles.marginLeft15]}>{visibility} km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        {/* Menampilkan kecepatan angin dalam meter per detik */}
        <Text style={[styles.text, styles.marginLeft15]}>{speed} m/s</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 80,
    textAlign: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
})

export default WeatherInfo
