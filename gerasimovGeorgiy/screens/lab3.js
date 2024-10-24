import React, { useEffect, useMemo, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Button,
  ScrollView,
} from "react-native";
import axios from "axios";

const Lab3 = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let images = [];
    const getData = async () => {
      for (let i = 0; i < 10; i++) {
        const { data } = await axios.get(
          `https://dog.ceo/api/breeds/image/random`,
        );
        images.push(data.message);
      }
      setImages(images);
    };
    getData();
  }, [count]);
  const memoImages = useMemo(() => {
    const getData = async () => {
      let images = [];

      for (let i = 0; i < 10; i++) {
        const { data } = await axios.get(
          `https://dog.ceo/api/breeds/image/random`,
        );
        images.push(data.message);
      }
      return images;
    };
    return getData();
  }, [count]);
  const getContent = () => {
    return <View></View>;
  };

  return (
    <SafeAreaView style={{ display: "flex", flex: 1 }}>
      <ScrollView>
        <Button title={"Count"} onPress={() => setCount(count + 1)} />
        {getContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lab3;
