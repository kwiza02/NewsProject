import React,{ Component } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";

import MainNavigator from "./src/router/mainNavigator";
import { store } from "./src/redux/store/store";
import modalProgressComponent from "./src/components/ModalProgressComponent";
import ModalProgressComponent from "./src/components/ModalProgressComponent";

const App=()=>{
  return(
   <Provider store={store}>
      <ModalProgressComponent></ModalProgressComponent>
      <NavigationContainer>
        <MainNavigator></MainNavigator>
      </NavigationContainer>
   </Provider>
  )
}

export default App