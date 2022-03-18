import { useState } from "react";
import {gql, useMutation} from "@apollo/client"

const MyApi = gql`
 mutation 
`








const MyPage = () => {

const CallAPI = () => async {

    const result = await CallAPI({
        variables : ( 
          
    )
}

  const nameValue = () =>{


  }
  const titleValue = () => {


  }




    return(
        <>
        
       이름 <input type= {"text"} onChange= {nameValue}/>
        제목<input type= {"text"} onChange= {titleValue}/>
        
        
    
        </>

    )

}

export default{MyPage}