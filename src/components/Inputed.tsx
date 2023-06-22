import { Input, Box, Center,Text, Select } from "@chakra-ui/react";
import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
interface IProps{
  setInputText: React.Dispatch<React.SetStateAction<string>>
}

export const Inputed: React.FC<IProps> = ({setInputText}) => {

  const inputTextHandler = (e)=>{
    console.log(e.target.value)
    setInputText(e.target.value)
  };



  return (
   
    <>
    <Center>
    <Text fontSize='2rem' paddingTop='1rem' color='GrayText'>
         Write your do list and keep tracking 
      </Text>
    </Center>
    <Center>
      
    <Box
        marginTop="2rem"
        width="700px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >

        <Input border="2px solid black"  onChange={inputTextHandler}/>
        <button type="submit">
          <Box fontSize="2rem" marginLeft="0.4rem">
          <BsFillPlusCircleFill />
        </Box>
        </button>
        

        
      </Box>
      <Box  
        marginTop="2rem"
        marginLeft='1rem'
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Select placeholder='Select..' border="2px solid black">
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncomplited'>Uncompleted</option>
        </Select>
      </Box>
    </Center>
     
    </>
  );
};
