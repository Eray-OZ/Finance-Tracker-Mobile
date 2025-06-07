import { Link } from "expo-router";
import { Image, View } from "react-native";
import { Button } from 'react-native-paper';
import { styles } from "../styles/style.js";
import Title from "./Title.jsx";


export default function Index() {



  return (
    <View style={styles.container}>

      <Title>Finance Tracker</Title>

      <Image source={require('../assets/images/2.png')} style={styles.image}></Image>


      <View style={{ flexDirection: "row" }}>
        <Link href="ExpenseCard" style={styles.link}><Button icon="notebook" mode="contained">
          Your Expenses</Button></Link>

        <Link href="AddExpense" style={styles.link}><Button icon="wallet-plus" mode="contained">
          Add Expense</Button></Link>

      </View>


    </View>
  );
}


