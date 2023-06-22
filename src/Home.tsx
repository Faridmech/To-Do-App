import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import { Inputed } from "./components/Inputed";
import { List } from "./components/List";
import { useState } from "react";


//import { type } from "@testing-library/user-event/dist/type";


export const Home: React.FC = () => {
  
  const [, setInputText] = useState<string>("");

  return (
    <>
      <Center>
        <Box marginTop="4rem">
          <Text
            fontSize="40px"
            width="500px"
            bg="aqua"
            textAlign="center"
            color="red.600"
            border="2px solid black"
            borderRadius="10px"
          >
            Farid's To Do List
          </Text>
        </Box>
      </Center>

      <React.Fragment>

        <Inputed setInputText={setInputText} />

      </React.Fragment>

      <List />
    </>
  );
};
