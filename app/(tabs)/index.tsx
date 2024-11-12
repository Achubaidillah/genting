import React from 'react';
import { Text, View, Button, StyleSheet, Image, Alert } from 'react-native';


export default function App() {
  // Fungsi untuk menangani aksi saat tombol ditekan
  const handleButtonPress = () => {
    console.log("Tombol Ditekan");
    // Di sini Anda bisa menavigasi ke layar lain jika menggunakan React Navigation
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../(tabs)/ubed.jpg')} // Mengambil gambar dari folder assets
        style={styles.image}
      />

      <Text style={styles.title}>Selamat Datang di Aplikasi Genting pridee!</Text>
      <Text style={styles.description}>
        Aplikasi ini menyediakan berbagai fitur yang akan mempermudah hidup Anda.
        Jelajahi lebih banyak dengan menekan tombol di bawah.
      </Text>

      <Button
        title="Mulai"
        onPress={handleButtonPress}
        color="#1e90ff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
});
