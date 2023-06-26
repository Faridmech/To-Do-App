import React from "react";
import { Box, Text, IconButton } from "@chakra-ui/react";
import { MdDoneAll, MdOutlineDeleteOutline } from "react-icons/md";

interface AProps {
  toDoListArray: string[];
}
export const List: React.FC<AProps> = ({ toDoListArray }) => {
  console.log("Listrr", toDoListArray);
  return (
    <>
      <div>
        {toDoListArray.map((element) => {
          return (
            <Box display='flex' flexDirection='row'>
              <Box
                border="2px solid red"
                width="40.5rem"
                height="2rem"
                marginLeft="19rem"
                marginTop="1rem"
                borderRadius="0.5rem"
              >
                <Text key={element}>{element}</Text>
              </Box>
              <Box marginTop='0.7rem'>
                <IconButton
                  marginLeft="10px"
                  aria-label="add-todo"
                  isRound
                  icon={<MdDoneAll />}
                  type="submit"
                />
                 <IconButton
                  marginLeft="10px"
                  aria-label="add-todo"
                  isRound
                  icon={<MdOutlineDeleteOutline />}
                  type="submit"
                />
              </Box>
            </Box>
          );
        })}
      </div>
    </>
  );
};
