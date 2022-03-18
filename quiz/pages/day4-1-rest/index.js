import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import styled from '@emotion/styled'

const Carrot = styled.div`
background-image: url('/quiz/ca.png');
width: 60px;
height: 60px;
background-size: cover;
margin-bottom: 5px;

`

const JustBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
height: 100%;
width: 250px;
background-color: yellowgreen;
`
const JustMiniBox = styled.div`
width: 200px;
height: 20px;
font-size: 15px;
background-color: white;
color: black;
`



export default function(){
    const[apiData,setApiData] = useState("")
    const[city,setCity] = useState("")

    const ButtonClick = async() => {
        const result = await axios.get("https://koreanjson.com/users/1")
        console.log(result)
        console.log(result.data.name)
        console.log(result.data.province)
        setApiData(result.data.name)
        setCity(result.data.province)
    }



    return(<>
    <JustBox>
        <Carrot></Carrot>
        <JustMiniBox> 이름 : {apiData}</JustMiniBox> 
        <JustMiniBox> 지역 : {city}</JustMiniBox>        
       
        <button onClick={ButtonClick}>REST API 요청하기</button>
    </JustBox>
    
    </>
    )
}