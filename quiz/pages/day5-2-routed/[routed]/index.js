
import {gql, useQuery} from '@apollo/client'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useState } from 'react'

const FETCH_PRODUCT = gql`

query fetchProduct($productId: ID){
    fetchProduct( productId: $productId){
        _id
        seller
        name
        detail
        price
}}
`



const Carrot = styled.div`
background-image: url('/quiz/ca.png');
width: 20px;
height: 20px;
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
const JustInput = styled.div`
height: 30px;
width: 200px;
`


export default function RoutedPage(){

    const [mySeller,setMySeller]=useState("")

    console.log(useRouter)

    const router = useRouter()
    console.log(router)

    const {data} = useQuery(FETCH_PRODUCT,{
        variables: { productId : router.query.routed}
    })
    console.log(data)

//     function Load(){
//         setMySeller("로딩중")
//     }
//     function Good(){
//         setMySeller(data&&data.fetchProduct.name)
//     }

//     if(data == undefined){
//     Load
// } else {
//     Good
// }
   

    
    return(<>
    <JustBox>
        <Carrot></Carrot>
        <JustInput>판매자 : {data ? data.fetchProduct.seller : "loading..."} </JustInput>
        <JustInput >제품명 : {data?.fetchProduct.name}</JustInput>
        <JustInput >제품설명 : {data?.fetchProduct.detail}</JustInput>
        <JustInput>가격 : {data?.fetchProduct.price}원</JustInput>
    </JustBox>
    </>
    )
}