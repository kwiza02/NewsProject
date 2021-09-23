//utils

import { ToastAndroid,Platform,AlertIOS } from "react-native";

import NetInfo from "@react-native-community/netinfo";

export default class Utils{

    /**
     * @method showToast
     * @description To show the toast message in android device
     */
    static showToast=(message)=>{
        if(Platform.OS==="android"){
            ToastAndroid.show(message,ToastAndroid.SHORT);
        }else{
            AlertIOS.alert(message);
        }
    }
    
      /**
     * @method isNetworkAvailable
     * @description check whether the internet is available or not in device
     */

    static  isNetworkAvailable=async()=>{
         const response=await NetInfo.fetch();
        return response.isConnected;
    }
}