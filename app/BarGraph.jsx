import { View, Dimensions, ScrollView, Text } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { db } from "../configs/firebase.js";
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { COLORS } from '../constants/color.js'
import { styles } from '../styles/style.js';
import Title from './components/Title.jsx';




const BarGraph = () => {

    const screenWidth = Dimensions.get('window').width;


    const data = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',],
        datasets: [
            {
                data: Array(12).fill(0),
            },
        ],
    }


    const [lineData, setLineData] = useState(data)



    useEffect(() => {

        const q = query(
            collection(db, 'expenseList'),
            orderBy('date', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {


            const updatedData = {
                labels: [...data.labels],
                datasets: [
                    {
                        data: Array(12).fill(0),
                    },
                ],
            };


            snapshot.docs.map((doc) => {
                const data = doc.data()

                const month = data.date.toDate().getMonth()

                updatedData.datasets[0].data[month] += data.amount
            });

            setLineData(updatedData)

        });


        return () => unsubscribe();
    }, []);



    return (



        <View style={styles.container}>







            <Title>Expenses by Month</Title>


            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bar}>

                <BarChart
                    data={lineData}
                    width={screenWidth + 200} // Ekran genişliğine göre ayarlanabilir
                    height={220}
                    yAxisLabel="₺"
                    barPercentage={0.2}
                    spacingInner={0.2}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: COLORS.primary,      // Başlangıç rengi
                        backgroundGradientTo: COLORS.primary,
                        decimalPlaces: 0, // Virgül sonrası basamak sayısı
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForBackgroundLines: {
                            strokeDasharray: '', // Arka çizgiler düz görünür
                        },
                    }}
                    style={{
                        marginVertical: 16,
                    }}
                    fromZero // Y ekseni sıfırdan başlasın
                    showValuesOnTopOfBars={true} // Her bar'ın üstünde değer yazsın
                />


            </ScrollView>

            <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.primary, marginBottom: 320 }}>Months</Text>



        </View>
    );
}



export default BarGraph
