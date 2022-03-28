// 여기는 프리젠터컴포넌트
import {SubmitButton, WriterInput}from './boardWrite.styles'

export default function BoardWriteUI(props){


    return(    <>
    
        {/* <div>{data}</div> */}
        <h1>{props.isEdit?"수정":"등록"}페이지</h1>
        작성자 :<WriterInput type={"text"} onChange ={props.onChangeWriter} /><br />
        제목 :<input type={"text"} onChange ={props.onChangeTitle} /><br />
        내용 :<input type={"text"} onChange ={props.onChangeContents} />

        <SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.CallGraphqlApi} isActive={props.isActive}> 
        {props.isEdit?"수정":"등록"}하기</SubmitButton>

    </>
    )
}    