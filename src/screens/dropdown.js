import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
  { label: 'Others', value: '3' },

];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

//   const renderLabel = () => {
//     if (value || isFocus) {
//       return (
//         <Text style={[styles.label, isFocus && { color: 'blue' }]}>
//           Dropdown label
//         </Text>
//       );
//     }
//     return null;
//   };

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor:'#FB9400' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? 'blue' : 'black'}
        //     name="Safety"
        //     size={20}
        //   />
        // )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    width: 380,
    height: 55,
    backgroundColor: "FFFFFF",
    justifyContent: "center",
    borderColor: "grey",
    marginBottom: 15,
    marginTop:-15,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft:7
  },
  icon: {
    // marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    // paddingHorizontal: 8,
    // fontSize: 24,
  },
  placeholderStyle: {
    fontSize: 15,
    color:'grey',
    paddingHorizontal:20,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "grey",
    paddingHorizontal:15,

  },
  iconStyle: {
    width: 20,
    height: 20,
    marginLeft:20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});