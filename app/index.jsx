import { Link } from "expo-router";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { styles } from "../styles/style.js";
import Title from "./components/Title.jsx";
import { useState, useEffect } from "react"
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from "../configs/firebase.js";
import { COLORS } from "../constants/color.js";


export default function Index() {


  const [expense, setExpense] = useState(0)

  const [income, setIncome] = useState(0)

  const [balance, setBalance] = useState(0)

  const [positive, setPositive] = useState(COLORS.income)

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


  }, [])



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

  }, [])



  useEffect(() => {
    setBalance(income - expense)

    if (income < expense) setPositive(COLORS.expense)

  }, [income, expense])


  return (
    <View style={styles.container}>

      <Title>Finance Tracker</Title>



      <View style={styles.balance}>

        <Text style={{ marginTop: 10, fontSize: 25, color: positive }}><Text style={{ fontSize: 20 }}>Total Balance: </Text>${balance}</Text>

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


