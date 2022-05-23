import { View, Text, Image } from "react-native";
import React from "react";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formatterCategories = categories.map((cate) => cate.title).join(" · ");

  const description = `${formatterCategories} ${
    price ? " · " + price : ""
  } · 🎫 · ${rating}  ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDesc desc={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      //   marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDesc = (props) => (
  <Text
    style={{
      marginHorizontal: 15,
    }}
  >
    {props.desc}
  </Text>
);
