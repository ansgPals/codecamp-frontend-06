// import axios from 'axios'
import{useState} from "react"
import {useMutation,gql} from '@apollo/client'
import { useRouter } from "next/router"

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
    const router = useRouter()

 const CallGraphqlApi =  async() => {
        try{ const result = await callApi({
          variables : {writer : myWriter, title : myTitle, contents : myContents }
        })
        
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
        alert("게시글 등록에 성공했어요!")
        alert("짠")
        router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)

        }catch(error){
          alert(error.message)
        }
        // finally{실패하는성공하든 작동되는것

        // }
     
       

        // const banana = 3
        // const apple = 2
        // "철수는 바나나를" +   banana + "개 가지고있고"
        // `철수는 바나나를${banana}개 가지고있고`
        // 템플릿 리터럴
    

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