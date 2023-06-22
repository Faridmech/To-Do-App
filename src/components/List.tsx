import React from "react";


 interface  AProps {
  toDoListArray: string[] 
 }
export const List:React.FC<AProps> =({toDoListArray})=>{


  console.log("Listrr", toDoListArray)
  return(
    <>
    

    <div>
     {
      toDoListArray.map((element)=>{
        return (
          <h2 key={element}>{element}</h2>
        )
      })
     }
    </div>


    
    
    </>
  )
}