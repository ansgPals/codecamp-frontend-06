// 여기는 컨테이너 컴포넌트
import{useState} from "react"
import {useMutation,} from '@apollo/client'
import BoardWriteUI from "./boardWrite.presenter"
import { CRATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries"
import {useRouter} from 'next/router'



export default function BoardWrite(props){
    const router = useRouter()

    const [isActive,setIsActive] = useState("false")
    const [myWriter,setMyWriter] = useState("")
    const [myTitle,setMyTitle] = useState("")
    const [myContents,setMyContents] = useState("")


    const[data,setData] = useState("")
    const[callApi] = useMutation(CRATE_BOARD)
    const[updateBoard] = useMutation(UPDATE_BOARD)
    const onClickUpdate = async() =>{
      await updateBoard({
          variables : { number: Number(router.query.myNumber) , writer : myWriter, title : myTitle, contents : myContents }
        })
        alert("게시글수정에 성공하였습니다.")
        router.push(`/08-05-boards/${router.query.myNumber}`)
    
    }


    const CallGraphqlApi =  async() => {
     
    // const result = await axios.get("https://koreanjson.com/posts/1")
    //restql  방식

    const result = await callApi({
      variables : {writer : myWriter, title : myTitle, contents : myContents }
    })
    //graphql  방식
    // console.log(result)
    // console.log(result.data.createBoard.message)
    // setData(result.data.createBoard.message)
    // console.log(result.data.title)
    // setData(result.data.title)

    alert("게시글등록에 성공하였습니다.")
    router.push(`/08-05-boards/${result.data.createBoard.number}`)
    }
    const onChangeWriter = (event) =>{
    setMyWriter(event.target.value)
    if(event.target.value !== "" && myTitle !=="" && myContents !== ""){
      setIsActive(true)
    }else{setIsActive(false)}
  }
    const onChangeTitle = (event) =>{
    setMyTitle(event.target.value)
    if(myWriter !== "" && event.target.value !=="" && myContents !== ""){
      setIsActive(true)

    }else{setIsActive(false)}
  }

    const onChangeContents = (event) =>{
    setMyContents(event.target.value)
    if(myWriter !== "" && myTitle !=="" && event.target.value !== ""){
      setIsActive(true)
    }else{setIsActive(false)}
    }



    return(
        <BoardWriteUI 
        onChangeWriter = {onChangeWriter} 
        onChangeTitle = {onChangeTitle} 
        onChangeContents = {onChangeContents}
        CallGraphqlApi = {CallGraphqlApi}
        isActive = {isActive}
        isEdit = {props.isEdit}
        onClickUpdate = {onClickUpdate}
        />
        
    )
    }    
    
    
    
    
