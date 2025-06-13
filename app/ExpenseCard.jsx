import { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/style.js";
import { db } from "../configs/firebase.js"
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Title from "./components/Title.jsx"
import PieGraph from "./components/PieGraph.jsx";
import { COLORS } from "../constants/color.js";
import { Link } from "expo-router";



const ExpenseCard = () => {




  const [items, setItems] = useState([]);


  useEffect(() => {


    const q = query(
      collection(db, 'expenseList'),
      orderBy('date', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(newItems);

    });

    return () => unsubscribe();
  }, []);




  const renderExpense = ({ item }) => {



    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    let category = capitalize(item.category)

    if (category === 'Entertainment') {
      category = category.slice(0, 6) + "."
    }

    return (
      <View>
        <Link href={`/expense/${item.id}`} asChild>
          <TouchableOpacity>
            <View style={styles.expenses}>
              <View style={styles.category}>
                <Text style={{ color: "white" }}>{category}</Text>
              </View>

              <View style={styles.description}>
                <Text style={{ color: "white" }}>{item.description}</Text>
              </View>

              <View style={styles.amount}>
                <Text style={{ color: "white" }}>{item.amount}</Text>
              </View>

            </View>
          </TouchableOpacity>
        </Link>

        <View style={{ borderTopWidth: 2, borderColor: COLORS.primary }}></View>

      </View>)
  }


  return (

    <View style={styles.container}>


      <PieGraph />




      <View style={{ margin: 125 }}>
        <View style={styles.flatList}>


          <Title>Your Expenses</Title>

          <View style={{ borderTopWidth: 5, borderColor: COLORS.primary }}></View>


          <View style={styles.headerSec}>
            <Text style={styles.headerA}>Category</Text>
            <Text style={styles.headerB}>Description</Text>
            <Text style={styles.headerA}>Amount</Text>
          </View>

          <View style={{ borderTopWidth: 5, borderColor: COLORS.primary }}></View>


          <FlatList
            data={items}
            renderItem={renderExpense}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false} />


        </View>
      </View>




    </View>
  );
}

export default ExpenseCard