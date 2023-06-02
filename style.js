import { StyleSheet } from "react-native";
import { Platform } from "react-native";
export default StyleSheet.create({
    container: { height: "90%", marginTop: Platform.OS === "android" ? 40 : 0 },
    largeViewStyle: { width: 200, height: 200, backgroundColor: "skyblue" },
    miniViewStyle: {
      width: 50,
      height: 50,
      backgroundColor: "rgb(0,0,255)",
      position: "absolute",
      bottom: 0,
    // margin:40
    // marginHorizontal:20
    // marginVertical:20
    },

    headerStyle:{fontSize:25,backgroundColor:"steelblue",color:"white",padding:15,marginBottom:8}
  ,btnTitleStyle:{
    backgroundColor:"skyblue",
    borderRadius:10,
    padding:15,
    margin:20
  },
  textStyle:{
    color:"black",
    fontSize:24
  }
  });