import{useState} from "react"
import {useMutation,gql} from '@apollo/client'

const CRATE_BOARD = gql`
        mutation{
            createBoard(writer : "김당근", title : "제목이당", contents : "콘텐츠없지롱")
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
     
        const result = await callApi()
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)

 }

    return(<>
        <div>{data}</div>
        <button onClick={CallGraphqlApi}> Graphql API 요청하기</button>

    </>
    )
}