import { Input, Box, Center, Text, IconButton } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
//import { ChangeEvent } from "react";
import { List } from "./List";
import { Complete } from "./Complete";

interface IProps {}

export const Inputed: React.FC<IProps> = () => {

  const [inputText, setInputText] = useState<string>("");

  const [toDoListArray, setToDoListArray] = useState<{value:string; checked:boolean, id:number}[]>([]);

  const listHandeler = () => {
    if (inputText.trim()) {
      setToDoListArray((prev) => [...prev, {value:inputText, checked:false, id:prev.length ? (prev.at(-1)?.id ?? 0) +1 : 0}]);
    }
  };

  const onSetCheckHandler = useCallback((id:number) =>{
    setToDoListArray(prev=>{
      return prev.map((todo)=>{
        if(todo.id === id){
          return {
            ...todo,
            checked: !todo.checked
          }
        }
        return todo
      })
    })
  },[])


  const onDelete = useCallback((id:number) =>{
    setToDoListArray(prev => {
      return prev.filter(todo=>todo.id !== id)
     
    })
  },[])

  // const onCompleted = useCallback((id:number) =>{
  //   setToDoListArray(prev => {
  //   return prev.filter(todo=>{ 
  //     if(todo.id === id){
  //     return {
        
  //       checked: todo.checked
  //     }
  //   }
  //   return todo})
     
  //   })
  // },[])

  return (
    <>
      <Center>
        <Text fontSize="2rem" paddingTop="1rem" color="GrayText">
          Write your do list and keep tracking
        </Text>
      </Center>
      <Center marginBottom='5rem'>
        <Box
          marginTop="2rem"
          width="700px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Input
            border="2px solid black"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <IconButton
            marginLeft='10px'
            aria-label="add-todo"
            isRound
            icon={<BsFillPlusCircleFill />}
            type="submit"
            onClick={listHandeler}
          />
        </Box>
        <Box
          marginTop="2rem"
          marginLeft="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Complete/>
        </Box>
      </Center>

      <List toDoListArray={toDoListArray} onSetCheckHandler={onSetCheckHandler} onDelete={onDelete}/>
    </>
  );
};
