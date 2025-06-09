import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { db } from "../../configs/firebase.js";
import { styles } from "../../styles/style.js";
import { COLORS } from "../../constants/color.js";





const PieGraph = () => {


    const screenWidth = Dimensions.get('window').width;


    const defaultChartData = [
        {
            name: "food",
            amount: 0,
            color: "red",
            legendFontColor: COLORS.text,
            legendFontSize: 15
        },
        {
            name: "transport",
            amount: 0,
            color: "orange",
            legendFontColor: COLORS.text,
            legendFontSize: 15
        },
        {
            name: "shopping",
            amount: 0,
            color: "blue",
            legendFontColor: COLORS.text,
            legendFontSize: 15
        },
        {
            name: "bill",
            amount: 0,
            color: "yellow",
            legendFontColor: COLORS.text,
            legendFontSize: 15
        },
        {
            name: "rent",
            amount: 0,
            color: "pink",
            legendFontColor: COLORS.text,
            legendFontSize: 15
        },
        {
            name: "entertainment",
            amount: 0,
            color: "purple",
            legendFontColor: COLORS.text,
            legendFontSize: 15
        },
        {
            name: "other",
            amount: 0,
            color: "green",
            legendFontColor: COLORS.text,
            legendFontSize: 15
        }
    ]



    const [chartData, setChartData] = useState(defaultChartData)



    useEffect(() => {


        const q = query(
            collection(db, 'expenseList'),
            orderBy('date', 'desc')
        );

        const updatedChartData = defaultChartData.map(item => ({
            ...item,
            amount: 0
        }));




        const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.docs.map((doc) => {

                const data = doc.data();
                const index = updatedChartData.findIndex(item => item.name === data.category);
                if (index !== -1) {
                    updatedChartData[index].amount += data.amount;
                }
            });

            setChartData(updatedChartData);

        });




        return () => unsubscribe();
    }, []);




    return (

        <View style={styles.container}>


            <View style={styles.pie}>
                <PieChart
                    data={chartData.filter(item => item.amount > 0)}
                    width={screenWidth}
                    height={220}
                    chartConfig={{
                        color: () => `rgba(0, 0, 0, 1)`,
                    }}
                    accessor="amount"
                    backgroundColor="transparent"
                    paddingLeft="1"
                    absolute
                />
            </View>
        </View>

    )
}


export default PieGraph