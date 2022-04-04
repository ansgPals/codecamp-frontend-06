import { useMutation, useQuery } from '@apollo/client'
import FetchProductsUI from './day08.presenter'
import { DELETE_PRODUCT, FETCH_PRODUCTS } from './day08.queries'
import {useRouter} from 'next/router'

export default function FetchProducts(){
    const {data} = useQuery(FETCH_PRODUCTS)
    const [deleteProduct]=useMutation(DELETE_PRODUCT)
    const router = useRouter()

    const ClickDelete=(event)=>{
        deleteProduct({
            variables : {productId:event.target.id},
            refetchQueries : [{query : FETCH_PRODUCTS}]
        })
     
    }
    const ClickBoard=()=>{
        router.push(`/day8-product/new`)
    }

    return(<FetchProductsUI 
        data = {data}
        ClickDelete = {ClickDelete}
        ClickBoard ={ClickBoard}
    />
    )
}