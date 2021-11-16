
import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Button
} from "react-native";
import { StyledViewTareas, StyledScrollView, StyledTitleContainer,StyledTextButton,StyledDeleteButton, StyledTitleText, StyledElementList, StyledInput, StyledButtons, StyledButtonAdd } from "../../styles/styledComponets";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function TareasScreen() {

  const [task, settask] = useState("");
  const [arrTask, setarrtask] = React.useState({});
  const [check, setCheck] = React.useState(false);
  const [check2, setchec2] = React.useState(false);
  const navigation = useNavigation();

  const user = auth.currentUser.uid;

  useEffect(() => {
    getTask();
  }, [])

  function addTask() {
    if (task === '') {
      alert('Ingrese una tarea')
    } else {
      db.ref(user).child(task).set({ name: task,status:false }).then((res) => {
        console.log(res)
        settask('');
        getTask();
      }).catch(err => {
        console.log(err)
      })

    }

  }
  const getTask = () => {
    db.ref(user).get().then((res) => {
      let objItem = res.val();
      if (objItem === null) {
        setCheck(true);
        setarrtask({});
      } else {
        setCheck(false)
        setarrtask(objItem);
      }
    }).catch((err) => {
      console.log(err);

    });
  }

  const deleteTask = (id) => {

    db.ref(user).child(id).remove().then((res) => {
      getTask();
      console.log(res)
    }).catch((err) => {

    })
  }
  const changeStatus = (status, id)=>{
    db.ref(user).child(id).set({name:id,status:status}).then(res=>{
      getTask();
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <StyledViewTareas>
      <StyledScrollView
        automaticallyAdjustContentInsets={false} // All of those are props
        contentInSet={{ bottom: 49 }}
        horizontal={false}
        alwaysBounceHorizontal={false}
        bounces={true}
        decelerationRate="normal"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        pagingEnabled={true}>
        {(check) ? <StyledTitleContainer><StyledTitleText>No hay tareas</StyledTitleText></StyledTitleContainer> : null}
        {Object.values(arrTask).map((e, index) =>

          <StyledElementList key={index}>
            <BouncyCheckbox
              size={25}
              fillColor="#cc74ec"
              unfillColor="#FFFFFF"
              text={e.name}
              iconStyle={{ borderColor: "#cc74ec" }}
              isChecked={e.status}
              onPress={(isChecked) => {changeStatus(isChecked,e.name)}}
            />

            <StyledDeleteButton onPress={() => {deleteTask(e.name)}}>
              <Ionicons name={'ios-trash'} size= {20} color= {'white'} />
            </StyledDeleteButton>
            
          </StyledElementList>
        )}
      </StyledScrollView>
      <StyledInput value={task} placeholder="Ingrese tarea" onChangeText={settask}></StyledInput>
      <StyledButtonAdd onPress = {addTask}><StyledTextButton>Agregar</StyledTextButton></StyledButtonAdd>
    </StyledViewTareas>

  );
}