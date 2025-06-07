import { StyleSheet } from "react-native";
import { COLORS } from "../constants/color.js";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background
    },

    // flatList: {
    //     borderWidth: 5,
    //     borderRadius: 20,
    //     borderColor: COLORS.border,
    //     backgroundColor: COLORS.background,
    //     padding: 10,

    // },

    link: {
        margin: 6,
    },

    image: {
        width: 200,
        height: 300,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.border,
        marginBottom: 50,
        borderWidth: 4
    },


    headerHome: {
        color: COLORS.primary,
        marginBottom: 50,
        fontSize: 18,
        fontFamily: "monospace"
    },


    table: {
        backgroundColor: COLORS.primary,
        margin: 5,
        borderRadius: 20,
        borderColor: COLORS.border,
    },

    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: 200,
        textAlign: "center",
        margin: 10
    },

    picker: {
        borderWidth: 1,
        borderRadius: 10,
        width: 200,
        margin: 10,
        backgroundColor: COLORS.textLight
    }

})