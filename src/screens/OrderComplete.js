import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/MenuItems";
import { db } from "../config/firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

const OrderComplete = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Canh Mang",
        description: "What the heck are you using to drag them???",
        price: "32000vnđ",
        image:
          "http://cdn.tgdd.vn/Files/2020/06/13/1262703/cach-nau-canh-chua-ca-chep-thom-ngon-bo-duong-khong-bi-tanh-cho-ba-bau-202006131050180899.jpg",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("vnđ", "")))
    .reduce((prev, current) => prev + current, 0);

  const totalVND = total
    .toString()
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ",") + prev;
    })
    .concat("vnđ");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "orders"), orderBy("createAt", "desc"), limit(1)),
      (querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, marginTop: 30 }}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          autoPlay
          speed={0.5}
          loop={false}
          style={{ height: 100, alignSelf: "center" }}
          source={require("../../assets/animations/check-mark.json")}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalVND}
        </Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            autoPlay
            speed={0.5}
            style={{ height: 200, alignSelf: "center" }}
            source={require("../../assets/animations/cooking.json")}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderComplete;
