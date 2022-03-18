// import axios from 'axios'
import{useState} from "react"
import {useMutation,gql} from '@apollo/client'

const CRATE_BOARD = gql`
        mutation createBoard($writer: String, $title: String, $contents: String){
            createBoard(writer : $writer , title : $title , contents : $contents)
            {
              _id
            number
            message
            }
          }
`

export default function GraphqlMutationPage(){

    const [myWriter,setMyWriter] = useState("")
    const [myTitle,setMyTitle] = useState("")
    const [myContents,setMyContents] = useState("")





    const[data,setData] = useState("")
    const[callApi] = useMutation(CRATE_BOARD)

 const CallGraphqlApi =  async() => {
     
        // const result = await axios.get("https://koreanjson.com/posts/1")
        //restql  방식

        const result = await callApi({
          variables : {writer : myWriter, title : myTitle, contents : myContents }
        })
        //graphql  방식
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
        // console.log(result.data.title)
        // setData(result.data.title)

 }
 const onChangeWriter = (event) =>{
    setMyWriter(event.target.value)
 }
 const onChangeTitle = (event) =>{
    setMyTitle(event.target.value)
    
 }

 const onChangeContents = (event) =>{
    setMyContents(event.target.value)
    
}



    return(<>
        {/* <div>{data}</div> */}
        작성자 :<input type={"text"} onChange ={onChangeWriter} /><br />
        제목 :<input type={"text"} onChange ={onChangeTitle} /><br />
        내용 :<input type={"text"} onChange ={onChangeContents} />

        <button onClick={CallGraphqlApi}> Graphql API 요청하기</button>

       

    </>
    )
}