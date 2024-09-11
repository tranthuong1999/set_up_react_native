import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppBar() {
    return (
        <View>
            <Text>Menu</Text>
        </View>
    )
}

const styles = StyleSheet.create({})




// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// const AppBar = () => {
//   const [hovered, setHovered] = useState(false);
//   const translateY = new Animated.Value(0); // Initial translateY value

//   const handlePressIn = () => {
//     setHovered(true);
//     Animated.timing(translateY, {
//       toValue: 100, // Move down by 100 units
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = () => {
//     setHovered(false);
//     Animated.timing(translateY, {
//       toValue: 0, // Return to original position
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <TouchableWithoutFeedback
//       onPressIn={handlePressIn}
//       onPressOut={handlePressOut}
//     >
//       <Animated.View
//         style={[
//           styles.box,
//           {
//             transform: [{ translateY }],
//             backgroundColor: hovered ? 'red' : 'blue', // Change color on "hover"
//           },
//         ]}
//       >
//         <Text style={styles.text}>Hover me!</Text>
//       </Animated.View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   box: {
//     width: 150,
//     height: 150,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'blue', // Default color
//   },
//   text: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default AppBar;


