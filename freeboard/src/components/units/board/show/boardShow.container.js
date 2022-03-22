import{useQuery} from "@apollo/client"
import { useRouter } from "next/router"
import BoardRoadUI from "./boardShow.presenter"
import { FETCH_BOARD } from "./boardShow.queries"




export default function BoardRoad() {
    const router = useRouter()
     console.log(router)
     const{data} = useQuery(FETCH_BOARD,{
         variables: {boardId : router.query.boardId}
     })
     console.log(data)

    return(<BoardRoadUI 
     data = {data}
    />)
}