import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItems from "./OrderItems";
import LottieView from "lottie-react-native";
import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const addOrderToFirebase = async () => {
    setLoading(true);
    try {
      const order = await addDoc(collection(db, "orders"), {
        item: items,
        restaurantName: restaurantName,
        createdAt: serverTimestamp(),
      }).then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("OrderComplete");
        }, 1000);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });

  // console.log(totalVND);
  const checkoutModalContext = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItems key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalVND}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 30,
                  width: 300,
                }}
                onPress={() => {
                  addOrderToFirebase();
                  setModalVisible(false);
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Checkout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContext()}
      </Modal>
      {total ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "black",
              bottom: 30,
              padding: 8,
              borderRadius: 30,
              width: 300,
              position: "absolute",
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              View Cart
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 13,
                position: "absolute",
                right: 10,
              }}
            >
              {totalVND}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            autoPlay
            speed={3}
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
