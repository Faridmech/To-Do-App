import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import { Input } from "../Input";


export const Home: React.FC = () => {
  return (
    <>
      <Center>
        <Box marginTop='4rem' >
          <Text fontSize='40px' width='500px' bg='aqua' textAlign='center' color='red.600' border='2px solid black' borderRadius='10px'>Farid's To Do List</Text>
        </Box>
      </Center>

      <Center>
        <Input/>
      </Center>
    </>
  );
};
