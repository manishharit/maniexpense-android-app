import React from 'react'
import { useState,useEffect } from 'react';
import { Text, View, Image,Pressable,ImageBackground, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
const Dashboard =()=>{

    const [totalExpense, setTotalExpense] = useState(0);
  
    const fetchExpenses = async () => {
      try {
        const existingData = await AsyncStorage.getItem('expenses');
        const existingExpenses = existingData ? JSON.parse(existingData) : [];
        // Calculate total expense
        let total = 0;
        for (const expense of existingExpenses) {
          total += parseFloat(expense.amount);
        }
        setTotalExpense(total.toFixed(2));
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    useEffect(() => {
      fetchExpenses();
    }, []);

  return (
    <>
    
    <View className="flex-1">
    <ImageBackground source={require('./assets/homebg.png')}style={{ flex: 1, width: '100%' }}>
      {/* user image and name */}
    <View className="flex items-center pt-10">
            <Animatable.Image animation="slideInLeft"
                className='w-36 h-36 rounded-full border-2 bg-white'
                source={require('./assets/mypic.png')}
            />
            <Animatable.Text animation="flipInY" className="text-white font-bold text-xl pt-2">Manish Harit</Animatable.Text>
    </View>
    <View className="items-center pt-16 ">
        <Text className="text-white text-3xl mb-8  bg-slate-800  rounded-full pl-4 pr-4">Add Expense</Text>
        <Animatable.Text animation="tada" iterationCount={4} className="text-orange-500 text-5xl">{totalExpense} 💸</Animatable.Text>
    </View>

    <ScrollView className="mt-20">
    <View  className="bg-green-800 rounded-lg p-3 shadow-lg mb-4 flex-row w-full items-center justify-around">
      <Text className="text-3xl text-gray-300" onPress={()=>Alert.alert("My Net-Worth","Coming Soon...")}> Net-Worth</Text>
    </View>
    <View  className="bg-red-800 rounded-lg p-3 shadow-lg mb-4 flex-row w-full items-center justify-around">
      <Text className="text-3xl text-gray-300" onPress={()=>setShowExpenseMeter(true)}> expense meter</Text>
    </View>
    <View  className="bg-cyan-950 rounded-lg p-3 shadow-lg mb-4 flex-row w-full items-center justify-around">
      <Text className="text-3xl text-gray-300" onPress={()=>Alert.alert("Upcoming Features","please refer update dev notes of Mr.Harit")}> Upcoming..</Text>
    </View>       
    </ScrollView>        
        </ImageBackground>
    </View>
    </>
  )
}

export default Dashboard;
