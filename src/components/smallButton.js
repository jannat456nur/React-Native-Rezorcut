// import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import React from "react";

// export default function SmallButton({ title, onPress, customStyles }) {
//   return (
//     <View style={[styles.button, customStyles]}>
     

//       <Image
//           source={title}
//           resizeMode="contain"
//           style={{
//             width: 30,
//             height: 30,
//             alignSelf: "center",
//             borderRadius: 10,
   
//           }}
//         ></Image>
//               <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     width: 80,
//     height: 60,
//     backgroundColor: "FFFFFF",
//     display:'flex',
//     alignItems:'center',
//     justifyContent: "center",
//     borderColor: "grey",
//     marginTop: 50,
//     borderRadius: 10,
//     borderWidth: 1,
    
    
    

//   },
//   title: {
//     fontSize: 16,
//     color: "black",
//     fontSize: 20,
//     alignSelf: "center",
//     marginTop:-30,
    
    
//    },
   
// });
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function Smallutton({ title, onPress, customStyles }) {
  return (
    <View>
      <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 55,
    backgroundColor: "FFFFFF",
    justifyContent: "center",
    borderColor: "grey",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    color: "black",
    fontSize: 20,
    alignSelf: "center",
   },
});
