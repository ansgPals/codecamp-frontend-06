import{useState} from 'react'


export default function SignupStatePage() {
     const [email,setEmail] = useState("")
     const [emailErr,setEmailErr] = useState("")

     const [password,setPassword] = useState("")
     function onChangeEmail(event){
        // event.target       => 태그전체<input type.....
        // event.target.value => 우리가 입력한 값
        setEmail(event.target.value)
     }
     function onChangePassword(event){
        setPassword(event.target.value)
    }


     function onClickSignup(){
        //  진짜 포장이 잘됐는지 확인
         console.log(email)
         console.log(password)
         if((email.includes("@")) === false){
            //  alert("이메일이 올바르지 않습니다.")
            setEmailErr("이메일틀림")
         } else {
             alert("회원가입을 축하합니다.")
         }
        }
         


    

    return(
        <div>
            이메일 : <input type="text" onChange={onChangeEmail}/><br />
            <div>{emailErr}</div>
            비밀번호 : <input type="text" onChange={onChangePassword}/><br />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}