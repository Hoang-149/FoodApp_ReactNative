import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import About from "../components/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/MenuItems";
import ViewCart from "../components/ViewCart";

const foods = [
  {
    title: "Banh My",
    description:
      "​Can i get any git repo of all clone series. should i have to purchase or its free?",
    price: "15000vnđ",
    image:
      "https://diadiemhoian.vn/wp-content/uploads/2020/07/banh-my-phuong-hoi-an-7.jpg",
  },
  {
    title: "Canh Chua",
    description: "What the heck are you using to drag them???",
    price: "45000vnđ",
    image:
      "http://cdn.tgdd.vn/Files/2020/06/13/1262703/cach-nau-canh-chua-ca-chep-thom-ngon-bo-duong-khong-bi-tanh-cho-ba-bau-202006131050180899.jpg",
  },
  {
    title: "Banh Dam",
    description:
      "​Can i get any git repo of all clone series. should i have to purchase or its free?",
    price: "18000vnđ",
    image:
      "https://diadiemhoian.vn/wp-content/uploads/2020/07/banh-my-phuong-hoi-an-7.jpg",
  },
  {
    title: "Canh Ca",
    description: "What the heck are you using to drag them???",
    price: "20000vnđ",
    image:
      "http://cdn.tgdd.vn/Files/2020/06/13/1262703/cach-nau-canh-chua-ca-chep-thom-ngon-bo-duong-khong-bi-tanh-cho-ba-bau-202006131050180899.jpg",
  },
  {
    title: "Banh Duong",
    description:
      "​Can i get any git repo of all clone series. should i have to purchase or its free?",
    price: "23000vnđ",
    image:
      "https://diadiemhoian.vn/wp-content/uploads/2020/07/banh-my-phuong-hoi-an-7.jpg",
  },
  {
    title: "Canh Mang",
    description: "What the heck are you using to drag them???",
    price: "32000vnđ",
    image:
      "http://cdn.tgdd.vn/Files/2020/06/13/1262703/cach-nau-canh-chua-ca-chep-thom-ngon-bo-duong-khong-bi-tanh-cho-ba-bau-202006131050180899.jpg",
  },
  {
    title: "Canh Bun",
    description: "What the heck are you using to drag them???",
    price: "11000vnđ",
    image:
      "http://cdn.tgdd.vn/Files/2020/06/13/1262703/cach-nau-canh-chua-ca-chep-thom-ngon-bo-duong-khong-bi-tanh-cho-ba-bau-202006131050180899.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 10 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
