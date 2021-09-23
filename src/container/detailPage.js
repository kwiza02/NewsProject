//detailPage

import React,{Component} from "react";

import { Text,View,Image,StyleSheet,Dimensions, ScrollView} from "react-native";

import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import {moderateScale} from "../helpers/responsive";
import Colors from "../resources/colors";
import TextUtils from "../resources/textUtils";

const screenWidth=Math.round(Dimensions.get("window").width);
const screenHeight=Math.round(Dimensions.get("window").height);

export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            itemDetails:this.props.route.params.selectedItem,
        };
    }

    render(){
        return(
            <ScrollView>
                 <View style={styles.headerView}>
                     <MaterialIcon name="arrow-left" 
                     color={Colors.black} size={24} 
                     style={{alignSelf:"center"}}
                     onPress={()=>{this.props.navigation.navigate("Dashboard")}}></MaterialIcon>
                    <Text style={styles.headerText}>News Details</Text>
                </View>
                <Image source={{uri:this.state.itemDetails.urlToImage}} style={styles.imageView}></Image>
                <Text style={styles.titleText}>{this.state.itemDetails.title}</Text>
                <Text style={styles.subContentText}>Author: {this.state.itemDetails.author}</Text>
                <Text style={styles.subContentText}>{this.state.itemDetails.content}</Text>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    headerView:{
        height:moderateScale(50),
        width:"100%",
        flexDirection:"row",
        backgroundColor:"#8fbc8f",
    },
    headerText:{
        alignSelf:"center",
        color:Colors.black,
        marginLeft:moderateScale(10),
        fontSize:TextUtils.xxmedium,
    },
    imageView:{
        height:moderateScale(300),
        width:"100%",
    },
    titleText:{
        color:Colors.darkGrey,
        fontSize:TextUtils.big,
        fontWeight:"bold",
        marginTop:moderateScale(20),
    },
    subContentText:{
        marginTop:moderateScale(20),
        fontSize:TextUtils.medium,
        color:Colors.darkGrey,
    },
})