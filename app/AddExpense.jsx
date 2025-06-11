import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

import { db } from "../configs/firebase.js";
import { styles } from '../styles/style.js';

import Title from "./components/Title.jsx";




const AddExpense = () => {

    const navigation = useNavigation();

    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);




    const addExpense = async () => {


        await addDoc(collection(db, 'expenseList'), {
            category: category,
            description: description,
            amount: parseFloat(amount),
            date: Timestamp.now()
        });


        setCategory("");
        setDescription("");
        setAmount("");

        navigation.navigate("ExpenseCard");
    }



    return (
        <View style={styles.form}>

            <Title>Add Expense</Title>

            <View style={styles.inputArea}>

                <View style={styles.picker}>
                    <Picker
                        selectedValue={category}
                        onValueChange={(itemValue) => setCategory(itemValue)}>
                        <Picker.Item label="Food" value="food" />
                        <Picker.Item label="Transport" value="transport" />
                        <Picker.Item label="Shopping" value="shopping" />
                        <Picker.Item label="Bill" value="bill" />
                        <Picker.Item label="Rent" value="rent" />
                        <Picker.Item label="Entertainment" value="ent." />
                        <Picker.Item label="Other" value="other" />
                    </Picker>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder='Description'
                    value={description}
                    onChangeText={setDescription} />

                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder='Amount'
                    value={amount}
                    onChangeText={setAmount} />

            </View>

            <Button icon="plus" mode='contained' style={styles.button} onPress={addExpense} textColor='black'>Submit</Button>

        </View>
    )


}


export default AddExpense