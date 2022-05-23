import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }) {
  const [city, setCity] = useState("");

  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
        borderRadius: 50,
        alignItems: "center",
        backgroundColor: "#eee",
        height: 50,
      }}
    >
      <View style={{ marginLeft: 10 }}>
        <Ionicons name="location-sharp" size={24} />
      </View>
      <TextInput
        value={city}
        onChangeText={(text) => setCity(text)}
        style={{
          backgroundColor: "#eee",
          fontWeight: "700",
          flex: 1,
          height: 40,
          borderRadius: 20,
        }}
      />
      <TouchableOpacity
        onPress={() => cityHandler(city)}
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          marginRight: 8,
          padding: 9,
          borderRadius: 30,
          alignItems: "center",
        }}
      >
        <AntDesign
          name="clockcircle"
          size={11}
          style={{
            marginRight: 6,
          }}
        />
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
