import { Input, Box, Center, Text, Select, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
//import { ChangeEvent } from "react";
import { List } from "./List";

interface IProps {}

export const Inputed: React.FC<IProps> = () => {
  const [inputText, setInputText] = useState<string>("");

  const [toDoListArray, setToDoListArray] = useState<string[]>([]);

  const listHandeler = () => {
    if (inputText.trim()) {
      setToDoListArray((prev) => [...prev, inputText]);
    }
  };

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
          <Select placeholder="Select.." border="2px solid black">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncomplited">Uncompleted</option>
          </Select>
        </Box>
      </Center>

      <List toDoListArray={toDoListArray} />
    </>
  );
};
