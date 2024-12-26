import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useStore } from "../store";

const ProductCard = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <View className="flex w-[200px] p-3 rounded-xl bg-white">
      <Image
        source={{
          uri: product.images[0]
            ? product.images[0].src
            : "https://stockholmykt.ru/wp-content/uploads/2024/03/placeholder-e1714032640700.jpg",
          url: require("../../assets/placeholder.jpg"),
        }}
        style={{
          height: 150,
          resizeMode: "contain",
          marginBottom: 8,
        }}
      />
      <Text className="text-base/snug font-semibold mb-2">{product.name}</Text>
      <Text className="flex-row items-center justify-between mt-auto">{product.price} ₽</Text>
      <Button title="Добавить в корзину" onPress={() => addToCart(product)} />
    </View>
  );
};

export default ProductCard;
