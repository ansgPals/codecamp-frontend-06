// import axios from 'axios'
import{useState} from "react"
import {useMutation,gql} from '@apollo/client'

const CRATE_BOARD = gql`
        mutation{
            createBoard(writer : "문문", title : "제목", contents : "콘텐츠")
            {
              _id
            number
            message
            }
          }
`

export default function GraphqlMutationPage(){

    const[data,setData] = useState("")
    const[callApi] = useMutation(CRATE_BOARD)

 const CallGraphqlApi =  async() => {
     
        // const result = await axios.get("https://koreanjson.com/posts/1")
        //restql  방식

        const result = await callApi()
        //graphql  방식
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
        // console.log(result.data.title)
        // setData(result.data.title)

 }

    return(<>
        <div>{data}</div>
      
        <button onClick={CallGraphqlApi}> Graphql API 요청하기</button>

       

    </>
    )
}