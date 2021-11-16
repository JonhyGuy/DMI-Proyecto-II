
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
      alert('Insgrese tarea')
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
    <View style={{ position: "absolute", flex: 1, justifyContent: "flex-start", height: "100%", width: "100%", top: 0 }}>
      <ScrollView
        automaticallyAdjustContentInsets={false} // All of those are props
        contentInSet={{ bottom: 49 }}
        horizontal={false}
        alwaysBounceHorizontal={false}
        bounces={true}
        style={{ padding: 0, margin: 0 }}
        decelerationRate="normal"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        pagingEnabled={true}>
        {(check) ? <Text>No hay tareas</Text> : null}
        {Object.values(arrTask).map((e, index) =>


          <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", padding: 20, borderBottomWidth: 3 }}>
            <BouncyCheckbox
              size={25}
              fillColor="red"
              unfillColor="#FFFFFF"
              text={e.name}
              iconStyle={{ borderColor: "red" }}
              isChecked={e.status}
              onPress={(isChecked) => {changeStatus(isChecked,e.name)}}
            />
            <Button title="Borrar" color="red" onPress={() => { deleteTask(e.name) }} />
          </View>
        )}
      </ScrollView>
      <TextInput value={task} placeholder="Ingrese Tarea" onChangeText={settask} style={{ height: 40, borderWidth: 2, padding: 10 }}></TextInput>
      <Button title="Registrar" color="#1E6738" style={{ backgroundColor: "red" }} onPress={addTask} />
    </View>

  );
}
const styles = StyleSheet.create({

  container: {

    flex: 1,

    // alignItems: "center",

    justifyContent: "center",

  },

  button: {

    backgroundColor: "#0782F9",

    width: "60%",

    padding: 15,

    borderRadius: 10,

    alignItems: "center",

    marginTop: 40,

  },

  buttonText: {

    color: "white",

    fontWeight: "700",

    fontSize: 16,

  },

  buttonOutlineText: {

    color: "#0782F9",

    fontWeight: "700",

    fontSize: 16,

  },

  buttonOutline: {

    backgroundColor: "white",

    marginTop: 5,

    borderColor: "#0782F9",

    borderWidth: 2,

  },





});
