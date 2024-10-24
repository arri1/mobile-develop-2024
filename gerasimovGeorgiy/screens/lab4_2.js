import { Button, SafeAreaView, Text, View } from "react-native";
import { useBearStore } from "../store/zustand";

const Lab4_2 = () => {
  const bears = useBearStore((state) => state.bears);
  const decrease = useBearStore((state) => state.removeAllBears);
  return (
    <SafeAreaView>
      <Text>{bears}</Text>
      <Button title={"dec"} onPress={decrease} />
    </SafeAreaView>
  );
};
export default Lab4_2;
