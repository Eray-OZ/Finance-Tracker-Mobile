import { Link } from "expo-router";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { styles } from "../styles/style.js";
import Title from "./components/Title.jsx";
import { useState, useEffect } from "react"
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from "../configs/firebase.js";


export default function Index() {


  const [expense, setExpense] = useState(0)

  const [income, setIncome] = useState(0)

  const [balance, setBalance] = useState(0)


  useEffect(() => {

    let c = 0

    const q = query(
      collection(db, 'expenseList')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docs.map(doc => {
        const data = doc.data()
        c += data.amount
      })

      setExpense(c)
    })

    return () => unsubscribe();


  }, [expense])



  useEffect(() => {

    let c = 0

    const q = query(
      collection(db, 'incomeList'),
    )


    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docs.map(doc => {
        const data = doc.data()
        c += data.amount
      })

      setIncome(c)
    })

    return () => unsubscribe();

  }, [income])


  return (
    <View style={styles.container}>

      <Title>Finance Tracker</Title>



      <View style={styles.balance}>

        <Text style={styles.total}><Text style={{ fontSize: 20 }}>Total Balance: </Text>${income - expense}</Text>

        <View style={styles.bottom}>

          <Text style={styles.income}>Income: +${income}</Text>
          <Text style={styles.expense}>Expense: -${expense}</Text>
        </View>

      </View>



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


