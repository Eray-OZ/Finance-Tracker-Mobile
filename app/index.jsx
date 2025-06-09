import { Link } from "expo-router";
import { View } from "react-native";
import { Button } from 'react-native-paper';
import { styles } from "../styles/style.js";
import Title from "./components/Title.jsx";


export default function Index() {



  return (
    <View style={styles.container}>

      <Title>Finance Tracker</Title>


      {/* <Image source={require('../assets/images/2.png')} style={styles.image}></Image> */}


      <View style={styles.buttonGroup}>

        <View style={{ flexDirection: "row" }}>
          <Link href="ExpenseCard" style={styles.link}><Button icon="notebook" mode="contained" style={styles.linkButton} textColor="black">
            Your Expenses</Button></Link>

          <Link href="AddExpense" style={styles.link}><Button icon="wallet-plus" mode="contained" style={styles.linkButton} textColor="black">
            Add Expense</Button></Link>
        </View>

        <View style={{ flexDirection: "row" }}>

          <Link href="BarGraph" style={styles.link}><Button icon="chart-box" mode="contained" style={styles.linkButton} textColor="black">
            Chart</Button></Link>

          <Link href="AnalysisScreen" style={styles.link}><Button icon="google-analytics" mode="contained" style={styles.linkButton} textColor="black">
            Analysis</Button></Link>
        </View>



        <View style={{ flexDirection: "row" }}>
          <Link href="IncomeCard" style={styles.link}><Button icon="notebook" mode="contained" style={styles.linkButton} textColor="black">
            Your Income</Button></Link>

          <Link href="AddIncome" style={styles.link}><Button icon="wallet-plus" mode="contained" style={styles.linkButton} textColor="black">
            Add Income</Button></Link>
        </View>
      </View>

    </View>
  );
}


