
import React,{useState, useEffect} from "react";
import { View, Text ,ScrollView,TextInput,Button} from "react-native";
import firebase from "../../firebase";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function TareasScreen(){

      const [task, settask] = useState("");
      const [arrTask,setarrtask] = React.useState({});
      const [check,setCheck] = React.useState(false);
      const [check2, setchec2] = React.useState(false);

      useEffect(() => {
        getTask();
        console.log(task);
      }, [])
    
      function addTask(){
          if(task===''){
              alert('Insgrese tarea')
          }else{
            firebase.db.ref(task).set({name:task}).then((res)=>{
                  console.log(res)
                  settask('');
                  getTask();
              }).catch(err=>{
                console.log(err)
              })
  
          }
         
      }
      const getTask =()=>{
        firebase.db.ref().get().then((res)=>{
          let objItem =  res.val();
          if(objItem === null){
              setCheck(true);
              setarrtask({});
          }else{
              setCheck(false)
              setarrtask(objItem);
          }
      }).catch((err)=>{
        console.log(err);

      });
      }

      const deleteTask=  (id)=>{
        
        firebase.db.ref(id).remove().then((res)=>{
          getTask();
          console.log(res)
        }).catch((err)=>{

        })
       
        
      }
      return(
          <View style={{position:"absolute",flex:1,justifyContent:"flex-start",height:"100%",width:"100%",top:0}}>
              <ScrollView 
              automaticallyAdjustContentInsets={false} // All of those are props
              contentInSet={{ bottom: 49 }}
              horizontal={false}
              alwaysBounceHorizontal={false}
              bounces={true}
              style={{padding:0,margin:0}}
              decelerationRate="normal"
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={200}
              pagingEnabled={true}>
                  {(check)?<Text>No hay tareas</Text>:null}
                  {Object.values(arrTask).map((e,index) => 


                        <View key={index} style={{flexDirection:"row",justifyContent:"space-between",padding:20,borderBottomWidth:3}}>
                            <BouncyCheckbox
                            size={25}
                            fillColor="red"
                            unfillColor="#FFFFFF"
                            text={e.name}
                            iconStyle={{ borderColor: "red" }}
                            />
                            <Button title="Borrar" color="red" onPress={()=>{deleteTask(e.name)}}/>
                            </View>
                )}
                </ScrollView>
                <TextInput value={task} placeholder="Ingrese Tarea" onChangeText={settask} style={{height:40,borderWidth:2,padding:10}}></TextInput>
                <Button title="Registrar"color="#1E6738" style={{backgroundColor:"red"}} onPress={addTask}/>
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
