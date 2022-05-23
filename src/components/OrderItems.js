import { View, Text } from "react-native";
import React from "react";

const OrderItems = ({ item }) => {
  const { title, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{title}</Text>
      <Text style={{ fontSize: 16, opacity: 0.6 }}>{price}</Text>
    </View>
  );
};

export default OrderItems;
