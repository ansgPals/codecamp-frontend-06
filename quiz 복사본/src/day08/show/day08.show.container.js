import {useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import ShowProductUI from './day08.show.presenter'
import { FETCH_PRODUCT } from './day08.show.queries'


export default function ShowProduct(){

    const router = useRouter()
    console.log(router)

    const {data} = useQuery(FETCH_PRODUCT,{
        variables: { productId : router.query.ID}
    })
    console.log(data)

    const ClickEdit=(event)=>{
        router.push(`/day8-product/${event.target._id}/edit`)
    }
    const ClickList=()=>{
        router.push(`/day8-product/list`)
    }

    
    return<ShowProductUI 
    data = {data}
    ClickEdit ={ClickEdit}
    ClickList={ClickList}
    />

}