import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import api from '../services/api';

const CATEGORIES = [
  { label: 'Todos', value: '' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Jewelery', value: 'jewelery' },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
];

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchProducts = async (category = '') => {
    setLoading(true);
    try {
      let url = category ? `/products/category/${category}` : '/products';
      const response = await api.get(url);
      setProducts(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os produtos.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const formatPrice = (price) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.name} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.price}>{formatPrice(item.price)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedCategory === item.value && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedCategory(item.value)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedCategory === item.value && styles.filterTextActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.filterList}
        />
      </View>

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#2f80ed" />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  filterContainer: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  filterList: {
    paddingHorizontal: 10,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  filterButtonActive: {
    backgroundColor: '#2f80ed',
  },
  filterText: {
    color: '#333',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f80ed',
  },
});

export default HomeScreen;
