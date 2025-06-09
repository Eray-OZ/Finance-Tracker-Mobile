import { StyleSheet } from "react-native";
import { COLORS } from "../constants/color.js";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
    },

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

    // headerHome: {
    //     color: COLORS.primary,
    //     marginBottom: 50,
    //     fontSize: 18,
    //     fontFamily: "monospace"
    // },

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
        margin: 10,
        height: 50,
        backgroundColor: COLORS.textLight,
        color: "white"
    },

    picker: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        width: 200,
        height: 55,
        backgroundColor: COLORS.textLight,
        overflow: 'hidden',
    },

    button: {
        marginBottom: 175,
        borderColor: COLORS.primary,
        borderWidth: 2,
        backgroundColor: COLORS.white,
    },

    buttonGroup: {
        marginBottom: 125,
        alignItems: "center"
    },

    linkButton: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.primary,
        borderWidth: 2,

    },

    pie: {

        marginTop: 100
    },

    inputArea: {
        marginBottom: 50,
        marginTop: 25,
    },

    expenses: {
        alignItems: "center",
        flexDirection: "row"
    },

    headerSec: {
        alignItems: "center",
        flexDirection: "row",
    },

    headerA: {
        margin: 5,
        padding: 5,
        borderWidth: 3,
        width: 75,
        backgroundColor: COLORS.primary,
        color: "white",
        borderColor: COLORS.text,
        fontFamily: "sans-serif-medium"
    },

    headerB: {
        margin: 5,
        padding: 5,
        borderWidth: 3,
        width: 125,
        backgroundColor: COLORS.primary,
        color: "white",
        borderColor: COLORS.text,
        fontFamily: "sans-serif-medium"
    },

    category: {
        margin: 5,
        padding: 5,
        borderWidth: 2,
        width: 75,
        backgroundColor: COLORS.textLight,
    },

    description: {
        margin: 5,
        padding: 5,
        borderWidth: 2,
        width: 125,
        backgroundColor: COLORS.textLight,
    },

    amount: {
        margin: 5,
        padding: 5,
        borderWidth: 2,
        width: 75,
        backgroundColor: COLORS.textLight,
    },

    analysis: {
        padding: 12,
        borderWidth: 5,
        borderRadius: 25,
        borderColor: COLORS.border,
        backgroundColor: COLORS.card
    }

})