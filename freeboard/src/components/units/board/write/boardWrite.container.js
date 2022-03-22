import {useRouter} from 'next/router'
import{useState} from "react"
import { useMutation, } from '@apollo/client';
import NewBoardUI from './boardWrite.presenter';
import { CREATE_BOARD } from './boardWrite.queries';



 export default function NewBoard(){
    // 여기는 자바스크립트 쓰는곳!
    const [isActive,setIsActive] = useState(false)
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [address, setAddress] = useState("");

    const [nameErr, setNameErr] = useState("");
    const [passErr, setPassErr] = useState("");
    const [titleErr, setTitleErr] = useState("");
    const [textErr, setTextErr] = useState("");
    const [addressErr, setAddressErr] = useState("");


    const[createBoard]=useMutation(CREATE_BOARD)
    const router =useRouter()



    const onChangeName = (event) => {
        setName(event.target.value);
        if(event.target.value !== "" && pass !== "" && title !== "" && text !=="" && address !== ""){
          setIsActive(true)
        }else{setIsActive(false)}
        if (event.target.value !== "") {
          setNameErr("");
        }
      };
    const onChangePass = (event) => {
        setPass(event.target.value);
        if(name !=='' && event.target.value !=='' && title !== '' && text !==''&& address !== ""){
          setIsActive(true)
        }else{setIsActive(false)}
        if (event.target.value !== "") {
          setPassErr("");
        }
      };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if(name !=='' && pass !=='' && event.target.value !== '' && text !==''&& address !== ""){
          setIsActive(true)
        }else{setIsActive(false)}
        if (event.target.value !== "") {
          setTitleErr("");
        }
      };

    const onChangeText = (event) => {
        setText(event.target.value);
        if(name !=='' && pass !=='' && title !== '' && event.target.value !==''&& address !== ""){
          setIsActive(true)
        }else{setIsActive(false)}
        if (event.target.value !== "") {
          setTextErr("");
        }
      };

    const onChangeAddress = (event) => {
        setAddress(event.target.value);
        if(name !=='' && pass !=='' &&title !== '' && text !==''&& event.target.value !== ""){
          setIsActive("true")
        }else{setIsActive(false)}
        if (event.target.value !== "") {
          setAddressErr("");
        }
      };

    const PutOk = async () => {    
      if (name === "") {
        setNameErr("이름을 입력하세요");
      }
      if (pass === "") {
        setPassErr("비밀번호를 입력하세요.");
      }
      if (title === "") {
        setTitleErr("내용를 입력하세요.");
      }

      if (text === "") {
        setTextErr("내용을 입력하세요.");
      }

      if (address === "") {
        setAddressErr("주소를 입력하세요.");
      }
      if (
        name !== "" &&
        pass !== "" &&
        title !== "" &&
        text !== "" &&
        address !== ""
      )  { try {
        const result = await createBoard({
          variables : {createBoardInput: {writer: name, password: pass ,title: title ,contents: text}}
        })
        console.log(result.data.createBoard._id);
        alert("게시물등록완료")
        let IDpass = result.data.createBoard._id
        router.push(`/boards/${result.data.createBoard._id}`)



      } catch (error) {
        console.log(error.message)
      }
    }}

    return (
        <NewBoardUI 
        onChangeName ={onChangeName}
        nameErr ={nameErr}
        onChangePass ={onChangePass}
        passErr = {passErr}
        onChangeTitle ={onChangeTitle}
        titleErr ={titleErr}
        onChangeText ={onChangeText}
        textErr ={textErr}
        onChangeAddress ={onChangeAddress}
        addressErr ={addressErr}
        PutOk = {PutOk}
        isActive = {isActive}
        />

    );
  }

