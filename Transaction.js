import { View, Text, Image, ScrollView, TextInput, Pressable, Platform,StatusBar } from 'react-native'
import { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SelectList } from 'react-native-dropdown-select-list'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Transaction({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const[date,setDate] =  useState(new Date())
  const[mode,setMode] =  useState('date')
  const[show,setShow] =  useState(false)
  const[text,setText] =  useState('')

  const onDateChange =(event,selectedDate)=>{
    const currentDate = selectedDate || date;
    setDate(currentDate)
    setShow(Platform.OS=='ios')
    let tempDate = new Date(currentDate)
    let fdate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
    let ftime = 'Hours: ' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
    setText(fdate + '\n' + ftime)

    console.log(fdate + '----' + ftime)
  }
  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)

  }

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    console.log('Checkbox clicked, isChecked:', !isChecked);
  };

  const [selected, setSelected] = useState("");
    const data = [
        {key:'1', value:'Rent', disabled:true},
        {key:'2', value:'Zomato'},
        {key:'3', value:'Swiggy'},
        {key:'4', value:'Travel'},
        {key:'5', value:'Recharge'},
        {key:'6', value:'Milk'},
        {key:'7', value:'SIP'},
        {key:'8', value:'Others'},
    ]
 
    useEffect(() => {
      navigation.setOptions({
        tabBarStyle: {
          display: 'none'
        }
      });
      
    }, [])
  return (
    <View>
      <StatusBar backgroundColor='rgb(239 68 68)' animated={true}/>
      <View className="bg-red-500 h-96 rounded-b-3xl">
       <View className="flex flex-row pt-20">    
       <Pressable className="ml-6 p-1 bg-red-400 rounded-xl" onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} /> 
       </Pressable>
        <Text className="pl-20 text-white text-2xl font-semibold">Add Expense</Text> 
       </View>
       <Text className="font-semibold text-gray-300 text-lg pl-6 pt-20">How much?</Text>
       <TextInput className="ml-6 text-5xl text-white font-bold"placeholder='₹0.00'placeholderTextColor="white" keyboardType='numeric'/>
      </View>

      <View className="bg-white rounded-3xl  -mt-20 h-screen p-5">
      <View>
      <View className="text-xl border-slate-400 font-semibold text-gray-400">
       <SelectList
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        onSelect={() => alert(selected)}
        placeholder='Category'
        search={false}
        boxStyles={{borderRadius:10}}
       />
       </View>
        <TextInput className="mt-4 text-xl border rounded-xl p-3 border-slate-400 font-medium" placeholder='Note'placeholderTextColor='gray' />
        {!isChecked? 
        <View className="flex-row border border-slate-400 rounded-xl mt-4">
          <Text className="text-lg pl-3 w-52 rounded-l-xl bg-slate-200" >{text}</Text>
          <Pressable onPress={()=>showMode('date')} >
            <Text className="text-xl font-bold bg-purple-400 w-40 rounded-r-xl p-3.5 pr-5 pl-16" >Date</Text>
          </Pressable>
          {/* <Pressable onPress={()=>showMode('time')} >
            <Text className="text-xl bg-purple-400  border-l-2 border-l-black-400 p-3.5 pr-5" >Time</Text>
          </Pressable> */}
        </View>
         :null}
      </View>

      {show && 
      <DateTimePicker
      testID='datetimepicker'
      value={date}
      mode={mode}
      is24Hour={true}
      display='default'
      onChange={onDateChange}
      />}

      {/* checkbox */}
      <View className={isChecked?"mt-40":"mt-20"}>
      <View className="flex-row border mt-3 rounded-md border-gray-400 ">
      <BouncyCheckbox className="p-1"
          size={28}
          isChecked={isChecked}
          fillColor="green"
          onPress={handleCheckboxClick}
        />
      <Text className="text-lg p-1  font-semibold text-gray-400">Use current date for entry ?</Text>        
      </View>
      <View className="flex-row border mt-3 rounded-md border-gray-400 ">
      <BouncyCheckbox className="p-1"
          size={28}
          isChecked={true}
          fillColor="green"
          onPress={() => {}}
        />
      <Text className="text-lg p-1  font-semibold text-gray-400">You did online payment ?</Text>        
      </View>
      </View>

      <Pressable>
        <Text className="mt-16 text-xl border rounded-2xl p-3 font-medium text-white pl-36 bg-purple-600">Submit</Text>
      </Pressable>

      



    </View>



    </View>
  )
}