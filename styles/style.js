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
        borderRadius: 10
    },

    description: {
        margin: 5,
        padding: 5,
        borderWidth: 2,
        width: 125,
        backgroundColor: COLORS.textLight,
        borderRadius: 10

    },

    amount: {
        margin: 5,
        padding: 5,
        borderWidth: 2,
        width: 75,
        backgroundColor: COLORS.textLight,
        borderRadius: 10

    },

    analysis: {
        margin: 25,
        padding: 12,
        borderWidth: 5,
        borderRadius: 25,
        borderColor: COLORS.border,
        backgroundColor: COLORS.card
    },

    bar: {
        margin: 5,
    },

    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
        margin: 25,
        padding: 45,
        borderWidth: 2,
        borderRadius: 25
    },

    balance: {
        borderWidth: 1,
        width: 330,
        height: 160,
        marginBottom: 30,
        marginTop: 30,
        borderRadius: 10,
        padding: 10,
        backgroundColor: COLORS.card,
        shadowColor: COLORS.shadow,
        elevation: 5
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60
    },

    income: {
        color: COLORS.income,
        fontSize: 15,
        marginLeft: 10
    },

    expense: {
        color: COLORS.expense,
        fontSize: 15,
        marginRight: 10
    },

    total: {
        marginTop: 10,
        fontSize: 25
    }
})