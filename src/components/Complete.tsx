import { Select } from "@chakra-ui/react";
import React from "react";
// interface AProps {
//   toDoListArray: { value: string; checked: boolean, id:number }[];
  
//   onCompleted: (id:number)=> void
// }




export const Complete: React.FC = () => {
  return (
    <>
    
    <Select placeholder="Select.." border="2px solid black">
            <option value="all">All</option>
            <option value="completed"  >Completed</option>
            <option value="uncomplited">Uncompleted</option>
    </Select>
    
    </>
)};
