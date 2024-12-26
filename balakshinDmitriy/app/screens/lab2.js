import React, { useEffect, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useStore } from '../store';
import "../../global.css";

import ProductCard from '../components/productCard';

const Lab2Screen = () => {
  const products = useStore((state) => state.products);
  const fetchProducts = useStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts([49950, 49938, 49924]); // Пример идентификаторов продуктов
  }, []);

  const memoProducts = useMemo(() => products, [products]);

  return (
    <ScrollView className="flex flex-row h-auto overflow-visible p-4" horizontal={true} showsHorizontalScrollIndicator={false}>
      {memoProducts.map((product) => {
        return (
          <View className="mr-3" key={product.id} >
            <ProductCard product={product}/>
          </View>
        )
      })}
    </ScrollView>
  );
};

export default Lab2Screen;
