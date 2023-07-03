import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
// interface AProps {
//   onCompleted: (id: number) => void;
// }

export const Complete: React.FC = () => {


  const [completeState, setCompleteState] = useState<string>("");

  return (
    <>
      <Select
        placeholder="Select.."
        border="2px solid black"
        onChange={(e) => {
          const selectedState = e.target.value;
          setCompleteState(selectedState);
          
        }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncomplited">Uncompleted</option>
      </Select>
      {completeState}
    </>
  );
};
