import {useState} from 'react'
import {useMutation} from '@apollo/client'
import ProductsWriteUI from './day08.write.presenter'
import { CREATE_MOUSE } from './day08.write.queries'
import {useRouter} from 'next/router'


export default function ProductsWrite(props){
        const router = useRouter()

        const[sellerName,setSellerName] = useState("")
        const[itemName,setItemName] = useState("")
        const[itemDetail,setItemDetail] = useState("")
        const[itemPrice,setItemPrice] = useState("")

        const[callApi] = useMutation(CREATE_MOUSE)

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
            const result = await callApi ({
                variables : {seller: sellerName, createProductInput: {
                    name: itemName ,detail: itemDetail ,price: Number(itemPrice)
                }}
            })
            console.log(result)
            alert(`상품이 ${props.isEdit?"수정하신대로 재등록":"작성하신대로등록"}되었어용!!!`)
            router.push(`/day8-product/${result.data.createProduct. _id}`)

        }


    return<ProductsWriteUI 
    isEdit ={props.isEdit}
    PutSellerName={PutSellerName}
    PutItemName={PutItemName}
    PutItemDetail={PutItemDetail}
    PutItemPrice={PutItemPrice}
    ButtonClick={ButtonClick}



    />
}