//dashboardPage

import React,{Component} from "react";

import { Text,View,FlatList,TouchableOpacity,ImageBackground,StyleSheet, Dimensions,ActivityIndicator} from "react-native";

import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

import {moderateScale} from "../helpers/responsive";
import Colors from "../resources/colors";
import TextUtils from "../resources/textUtils";
import Utils from "../helpers/utils";
import { setLoading } from "../redux/action/loaderAction";

const screenWidth=Math.round(Dimensions.get("window").width);
const screenHeight=Math.round(Dimensions.get("window").height);

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            isMoreData:false,
            totalPage:0,
            currentPage:1,
        };
    }

    /**
     * @method componentDidMount
     * @description to load api data initially when we entered in this screen
     */
    componentDidMount=async()=>{
      this.loadNews();
    }

    /**
     * @method loadNews
     * @description to load the news of given page number and taking this query params
     */
    loadNews=async()=>{
        const isConnected=await Utils.isNetworkAvailable();
        if (isConnected===true) {
            setLoading(true)
         let response=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&page=${this.state.currentPage}&pageSize=10&apiKey=0fc65fdd58ba428fac634b15a62b04b3`);
        //  console.log(response.data);
         if (response.data!==null && response.data.articles!==null) {
             setLoading(false);
             this.setState({data:response.data.articles,totalPage:response.data.totalResults});
         } else {
            setLoading(false);
             Utils.showToast("Please check your api calling.");
         }
        } else {
            setLoading(false);
            Utils.showToast("Please check your network availability.");
        }
    }

    /**
     * @method renderItem
     * @description this will define the layout of one item of list
     */

    renderItem=({item,index})=>{
        return(
            <TouchableOpacity key={index} onPress={()=>{this.props.navigation.navigate("Detail",{selectedItem:item})}}>
                <ImageBackground source={{uri:item.urlToImage}} style={styles.imageBackground}>
                    <Text style={styles.imageTitleText}>{item.title.length>35?item.title.substring(0,32)+"...":item.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    handleMoreData=async()=>{
        if (this.state.totalPage>this.state.currentPage) {
            this.setState({currentPage:this.state.currentPage+1});
            this.loadNews();
        } else {
            
        }
    }

    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>Top Headlines</Text>
                    <View style={styles.iconsView}>
                        <MaterialIcon name="magnify" color={Colors.black} size={24} style={{ paddingRight:moderateScale(10),}}></MaterialIcon>
                        <MaterialIcon name="microsoft-xbox-controller-menu" color={Colors.black} size={24}></MaterialIcon>
                    </View>
                </View>
                <FlatList
                style={styles.itemContainerView}
                data={this.state.data}
                keyExtractor={({ id }, index) => id}
                renderItem={this.renderItem}
                numColumns={2}
                onEndReached={this.handleMoreData}></FlatList>
            </View>
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
        justifyContent:"space-between",
        flexDirection:"row",
        borderBottomWidth:moderateScale(2),
        borderColor:Colors.grey
    },
    headerText:{
        alignSelf:"center",
        color:Colors.black,
        fontSize:TextUtils.xxmedium,
    },
    iconsView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
    },
    itemContainerView:{
        padding:moderateScale(5),
    },
    imageBackground:{
        height:moderateScale(250),
        width:moderateScale(180),
        marginRight:moderateScale(10),
        marginBottom:moderateScale(10)
    },
    imageTitleText:{
        fontSize:TextUtils.medium,
        color:Colors.white,
        bottom:0,
        padding:moderateScale(10),
        position:"absolute"
    },
})