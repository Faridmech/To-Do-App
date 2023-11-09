import { Box, IconButton, Text } from "@chakra-ui/react"
import React from "react"
import { MdDoneAll, MdOutlineDeleteOutline } from "react-icons/md"

interface AProps {
  toDoListArray: { value: string; checked: boolean; id: number }[]
  onSetCheckHandler: (id: number) => void
  onDelete: (id: number) => void
  completeState: string
}

export const List: React.FC<AProps> = ({
  toDoListArray,
  onSetCheckHandler,
  onDelete,
  completeState,
}) => {
  return (
    <>
      {toDoListArray.map((todo) => {
        const isCompleted = todo.checked

        if (
          completeState === "all" ||
          (completeState === "completed" && isCompleted) ||
          (completeState === "uncompleted" && !isCompleted)
        ) {
          return (
            <Box
              key={todo.id}
              display="flex"
              flexDirection="row"
              marginTop="1rem">
              <Box
                border="2px solid"
                width="40.5rem"
                height="2rem"
                marginLeft="19rem"
                borderRadius="0.5rem"
                borderColor={isCompleted ? "green" : "red"}>
                <Text>{todo.value}</Text>
              </Box>
              <Box marginTop="-0.3rem">
                <IconButton
                  marginLeft="10px"
                  aria-label="add-todo"
                  isRound
                  icon={<MdDoneAll />}
                  type="submit"
                  onClick={() => onSetCheckHandler(todo.id)}
                />
                <IconButton
                  marginLeft="10px"
                  aria-label="add-todo"
                  isRound
                  icon={<MdOutlineDeleteOutline />}
                  type="submit"
                  onClick={() => onDelete(todo.id)}
                />
              </Box>
            </Box>
          )
        }

        return null // Return null for cases where the todo should be filtered out
      })}
    </>
  )
}
