import { useQuery,} from "@apollo/client"
import { router, useRouter } from "next/router"
import StaticRoutedUI from "./05-06-routed.presenter"
import { FETCH_BOARD } from "./05-06-routed.query"




export default function StaticRouted(){
    const router = useRouter()
        console.log(router)
  
    const {data} = useQuery(FETCH_BOARD, { 
        variables: {number :  Number(router.query.aaa)}
    })

    console.log(data)

    return(<>
   <StaticRoutedUI 
   data = {data}
   />
    
    
    </>
    )



}
