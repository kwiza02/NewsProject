//ModalProgressComponent

import React,{Component} from "react";

import { Text,View,Modal, ActivityIndicator ,StyleSheet} from "react-native";

import { connect } from "react-redux";

import Colors from "../resources/colors";

class ModalProgressComponent extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <Modal
            visible={this.props.isLoading}
            transparent={true}
            animationType="fade">
                <View style={styles.mainContainer}>
                    <ActivityIndicator size="large" color={Colors.black}/>
                </View>
            </Modal>
        )
    }
}

const mapStateToProps=(state)=>{
    const {isLoading}=state.loader;
    return {isLoading};
}

export default connect(mapStateToProps,{})(ModalProgressComponent);

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.5)",
        alignItems:"center",
        justifyContent:"center"
    }
})