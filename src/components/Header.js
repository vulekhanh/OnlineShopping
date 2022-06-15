import React, { Component } from "react";
import menu from "../../assets/icons/menu.png";
import search from "../../assets/icons/search.png";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from "react-native";
const { height, width } = Dimensions.get("window");

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.header}>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.openDrawer();
                        }}
                    >
                        <Image source={menu} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }} >HOME</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('SearchScreen');
                    }}>
                        <Image source={search} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#0099FF",
        height: 40,
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        paddingTop: "2%",
    },
});

