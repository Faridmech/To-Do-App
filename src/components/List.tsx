import { Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { MdDoneAll, MdOutlineDeleteOutline } from "react-icons/md";




interface AProps {
  toDoListArray: { value: string; checked: boolean, id:number }[];
  onSetCheckHandler: (id:number)=> void
  onDelete: (id:number)=> void
  completeState: string
}



export const List: React.FC<AProps> = ({ toDoListArray, onSetCheckHandler, onDelete, completeState }) => {
  return (
    <>

    

      {toDoListArray.map((todo, index) => {
      if(completeState === "all"){
        return (
          <Box display="flex" flexDirection="row">
            <Box
              border="2px solid"
              width="40.5rem"
              height="2rem"
              marginLeft="19rem"
              marginTop="1rem"
              borderRadius="0.5rem"
              borderColor={todo.checked ? 'green':'red'}
            >
              <Text key={index}>{todo.value}</Text>
            </Box>
            <Box marginTop="0.7rem">
              <IconButton
                marginLeft="10px"
                aria-label="add-todo"
                isRound
                icon={<MdDoneAll />}
                type="submit"
                onClick={()=> onSetCheckHandler(todo.id)  }
              />
              <IconButton
                marginLeft="10px"
                aria-label="add-todo"
                isRound
                icon={<MdOutlineDeleteOutline />}
                type="submit"
                onClick={()=> onDelete(todo.id)}
              />
            </Box>
          </Box>
        );
      }
  
      })}
    </>
  );
};
