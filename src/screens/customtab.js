import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  filter
} from "react-native";
import React, { useState } from "react";

const listTab = [
  {
    status: "All",
  },
  {
    status: "Purple",
  },
  {
    status: "Green",
  },
];
const data = [
  {
    name: "ronaldo",
    status: "Green",
  },
  {
    name: "ronaldo1",
    status: "purple",
  },
  {
    name: "ronaldo2",
    status: "Green",
  },
  {
    name: "ronaldo3",
    status: "Green",
  },
  {
    name: "ronaldo4",
    status: "purple",
  },
];

export default function Customtab() {
  const [status, setStatus] = useState("All");
  const [datalist,setDataList ] = useState(data)
  const setStatusFilter = (status) => {
    if (status !== 'All'){
        setDataList([...data.filter(e=>e.status === status)])

    }
    else{
        setDataList(data)
    }
    setStatus(status);
  };
  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          <Image
            style={styles.itemImage}
            source={require("../../assets/user.png")}
          />
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <View style={[styles.itemStatus,
        {backgroundColor:item.status === "purple" ? '#e5848e' : '#69c080'}
        
        ]}>
          <Text style={styles.itemName}>{item.status}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((e) => (
          <TouchableOpacity
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text
              style={[
                styles.textTab,
                status === e.status && styles.textTabActive,
              ]}
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorixontal: 10,
    justifyContent: "center",
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#EBEBEB",
    padding: 10,
    justifyContent: "center",
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: "#E6838D",
  },
  textTabActive: {
    color: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  itemLogo: {
    padding: 15,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemStatus: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    justifyContent: "center",
    right: 12,
  },
});
