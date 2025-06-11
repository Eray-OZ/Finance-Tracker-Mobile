import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "../styles/style.js";
import { db } from "../configs/firebase.js"
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Title from "./components/Title.jsx"
import { COLORS } from "../constants/color.js";



const ExpenseCard = () => {




    const [items, setItems] = useState([]);


    useEffect(() => {


        const q = query(
            collection(db, 'incomeList'),
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


        return (
            <View>


                <View style={styles.expenses}>

                    <View style={styles.description}>
                        <Text style={{ color: "white" }}>{item.description}</Text>
                    </View>

                    <View style={styles.amount}>
                        <Text style={{ color: "white" }}>{item.amount}</Text>
                    </View>


                </View>

                <View style={{ borderTopWidth: 2, borderColor: COLORS.primary }}></View>

            </View>)
    }


    return (

        <View style={styles.container}>



            <View style={{ margin: 5 }}>





                <View stlye={{ marginBottom: 200 }}>

                    <Title>Your Income</Title>

                    <View style={{ borderTopWidth: 5, borderColor: COLORS.primary }}></View>


                    <View style={styles.headerSec}>
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