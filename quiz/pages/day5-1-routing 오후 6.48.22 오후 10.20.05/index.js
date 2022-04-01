import axios from 'axios'
import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
import styled from '@emotion/styled'
import {useRouter} from 'next/router'






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
const JustInput = styled.input`
width: 200px;
`

const CREATE_MOUSE = gql`
    mutation createProduct( $seller: String, $createProductInput: CreateProductInput!) 
{createProduct( seller: $seller, createProductInput: $createProductInput)
        {_id,number,message}
}
`



export default function(){

        const[sellerName,setSellerName] = useState("")
        const[itemName,setItemName] = useState("")
        const[itemDetail,setItemDetail] = useState("")
        const[itemPrice,setItemPrice] = useState("")

        const[callApi] = useMutation(CREATE_MOUSE)
        const router = useRouter()

        const PutSellerName = (event)=>{
            setSellerName(event.target.value)
        }
        const PutItemName = (event) =>{
            setItemName(event.target.value)

        }
        const PutItemDetail = (event) =>{
            setItemDetail(event.target.value)

        }
        const PutItemPrice = (event) =>{
            setItemPrice(Number(event.target.value))

        }

        const ButtonClick = async() => {
            try{
            const result = await callApi ({
                variables : {seller: sellerName, createProductInput: {
                    name: itemName ,detail: itemDetail ,price: itemPrice
                }}
            })


            console.log(result)

            router.push(`/day5-2-routed/${result.data.createProduct. _id}`)

        }catch(error){
            alert(error.message)
        }
    }







    return(<>
    <JustBox>
        <Carrot></Carrot>
        <JustInput type={"text"} onChange = {PutSellerName} placeholder='성함을 적어주세요'/>
        <JustInput type={"text"} onChange = {PutItemName} placeholder='판매하실 물건의 이름을 입력하세요'/>
        <JustInput type={"text"} onChange = {PutItemDetail} placeholder='판매하실 물건의 특징을 설명하세요'/>
        <JustInput type={"number"} onChange = {PutItemPrice} placeholder='판매하실 가격을 입력하세요'/>
        <button onClick={ButtonClick}>누르세용</button>
    </JustBox>
    
    </>
    )
}