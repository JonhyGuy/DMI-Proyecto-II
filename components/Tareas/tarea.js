import React,{useState, useEffect} from "react";
import { View, Text ,ScrollView,TextInput,Button} from "react-native";
import firebase from '../../firebase';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function TareasScreen(){
      const [task, settask] = React.useState('');
      const [arrTask,setarrtask] = React.useState({});
      const [check,setCheck] = React.useState(false);
      const [check2, setchec2] = React.useState(false);

      useEffect(() => {
        firebase.db.ref('/user').get().then((res)=>{
            let objItem =  res.val();

            if(objItem === null){
                setCheck(true);
            }else{
                setCheck(false)
                setarrtask(objItem);
            }
        }).catch((err)=>{
          console.log(err);

        });
      }, [task])
    
      const addTask =()=>{
          console.log(task)
          if(task===''){
              alert('Insgrese tarea')
          }else{
            firebase.db.ref('/user').child('task').set({
                name: task 
              }).then((res)=>{
                  console.log(res)
                settask('');
              }).catch(err=>{
                console.log(err)
              })
              
          }
         
      }
      const deleteTask=(id)=>{
        firebase.db.ref().child("task").child(id).remove();
        settask('')
      }
      return(
          <View>
              <ScrollView >
                  {(check)?<Text>No hay tareas</Text>:null}
                  {Object.values(arrTask).map((e,index) => 


                        <View key={index} >
                            <BouncyCheckbox
                            size={25}
                            fillColor="red"
                            unfillColor="#FFFFFF"
                            text={e.name}
                            iconStyle={{ borderColor: "red" }}
                            />
                            <Button title="Borrar" onPress={()=>{deleteTask(e.name)}}/>
                            </View>
                )}
                </ScrollView>
                <TextInput value={task} onChange={(e)=>{settask(e.target.value)}} ></TextInput>
                <Button title="Registrar" onPress={addTask}/>
          </View>
    );
}