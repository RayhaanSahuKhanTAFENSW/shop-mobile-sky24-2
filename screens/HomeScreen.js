import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { fetchCategories, fetchProducts } from '../utils/api';

export default function HomeScreen(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    }

    fetchData();
  }, []);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategories();
      setCategories(data);
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Home Screen</Text>
      {
        products.map((product) => (
          <Text key={product.id}>{product.name}</Text>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});