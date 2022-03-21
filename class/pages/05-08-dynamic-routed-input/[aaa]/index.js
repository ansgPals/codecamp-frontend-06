
import { useQuery, gql } from "@apollo/client"
import { Router, useRouter } from "next/router"
import { useReducer } from "react"


const FETCH_BOARD = gql`

    query fetchBoard($number : Int ){
        fetchBoard(number : $number ){
            number
            writer
            title
            contents
      }
    }
    
    

`



export default function StaticRoutedPage(){
    const router = useRouter()
        console.log(router)
  
    const {data} = useQuery(FETCH_BOARD, { 
        variables: {number :  Number(router.query.aaa)}
    })

    console.log(data)

    return(<>
    <div>{data?.fetchBoard.number}번게시글로오신것을 환영합니다!!</div>
    <div>작성자: {data?.fetchBoard.writer}</div>
    {/* data&&data = data?   optional-Chaining */}
    <div> 제목 : {data && data.fetchBoard.title}</div>
    <div>내용 : {data && data.fetchBoard.contents}</div>


    
    
    
    
    </>
    )



}
