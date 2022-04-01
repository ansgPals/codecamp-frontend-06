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

const FECTCHAAA = gql`

 query 
`





export default function(){

        // const[sellerName,setSellerName] = useState("")
        // const[itemName,setItemName] = useState("")
        // const[itemDetail,setItemDetail] = useState("")
        // const[itemPrice,setItemPrice] = useState("")

        // const[callApi] = useMutation(CREATE_MOUSE)

        // const PutSellerName = (event)=>{
        //     setSellerName(event.target.value)
        // }
        // const PutItemName = (event) =>{
        //     setItemName(event.target.value)

        // }
        // const PutItemDetail = (event) =>{
        //     setItemDetail(event.target.value)

        // }
        // const PutItemPrice = (event) =>{
        //     setItemPrice(Number(event.target.value))

        // }

        const ButtonClick = async() => {
            const result = await callApi ({
               variables : {productId :"77fe2e85-83ac-49b5-8e07-5a44c7d9ca8a"){
                seller,name,detail,price}  

        }







    return(<>
    <JustBox>
        <Carrot></Carrot>
        <JustMiniBox> 이름 : {apiData}</JustMiniBox> 
        <JustMiniBox> 지역 : {city}</JustMiniBox>        
        <button onClick={ButtonClick}>누르세용</button>
    </JustBox>
    
    </>
    )
}