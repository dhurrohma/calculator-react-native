import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
    buttonTop: {
        width: 144,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    buttonBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    buttonDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.buttonDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    buttonLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    buttonGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.buttonGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black
    },
    row: {
        maxWidth: '100%',
        flexDirection: "row"
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50
    },
    screenFirstNumber: {
        fontSize: 96,
        color:myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end"
    },
    screenSecondNumber: {
        fontSize: 40,
        color:myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end"
    }
});