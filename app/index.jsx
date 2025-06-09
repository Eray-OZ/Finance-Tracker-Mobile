import { Link } from "expo-router";
import { Image, View, ScrollView } from "react-native";
import { Button } from 'react-native-paper';
import { styles } from "../styles/style.js";
import Title from "./components/Title.jsx";
import BarGraph from "./components/BarGraph.jsx";


export default function Index() {



  return (
    <View style={styles.container}>

      <Title>Finance Tracker</Title>


      {/* <Image source={require('../assets/images/2.png')} style={styles.image}></Image> */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <BarGraph />
      </ScrollView>

      <View style={styles.buttonGroup}>

        <View style={{ flexDirection: "row" }}>
          <Link href="ExpenseCard" style={styles.link}><Button icon="notebook" mode="contained" style={styles.linkButton} textColor="black">
            Your Expenses</Button></Link>

          <Link href="AddExpense" style={styles.link}><Button icon="wallet-plus" mode="contained" style={styles.linkButton} textColor="black">
            Add Expense</Button></Link>
        </View>

        <View style={{ flexDirection: "row" }}>

          <Link href="AnalysisScreen" style={styles.link}><Button icon="google-analytics" mode="contained" style={styles.linkButton} textColor="black">
            Analysis</Button></Link>
        </View>
      </View>

    </View>
  );
}


