import { useMutation, useQuery } from '@apollo/client'
import FetchProductsUI from './day07.presenter'
import { DELETE_PRODUCT, FETCH_PRODUCTS } from './day07.queries'


export default function FetchProducts(){
    const {data} = useQuery(FETCH_PRODUCTS)
    const [deleteProduct]=useMutation(DELETE_PRODUCT)

    const ClickDelete=(event)=>{
        deleteProduct({
            variables : {productId:event.target.id},
            refetchQueries : [{query : FETCH_PRODUCTS}]
        })
     
    }

    return(<FetchProductsUI 
        data = {data}
        ClickDelete = {ClickDelete}
    />
    )
}