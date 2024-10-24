import { Button, SafeAreaView, Text, View } from "react-native";
import { useBearStore } from "../store/zustand";

const Lab4_1 = () => {
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increasePopulation);
  return (
    <SafeAreaView>
      <Text>{bears}</Text>
      <Button title={"inc"} onPress={increase} />
    </SafeAreaView>
  );
};
export default Lab4_1;
