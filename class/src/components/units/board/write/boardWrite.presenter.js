import {SubmitButton, WriterInput}from './boardWrite.styles'

export default function BoardWriteUI(props){


    return(    <>
    
        {/* <div>{data}</div> */}
        작성자 :<WriterInput type={"text"} onChange ={props.onChangeWriter} /><br />
        제목 :<input type={"text"} onChange ={props.onChangeTitle} /><br />
        내용 :<input type={"text"} onChange ={props.onChangeContents} />

        <SubmitButton onClick={props.CallGraphqlApi} isActive={props.isActive}> Graphql API 요청하기</SubmitButton>

    </>
    )
}    
    
    
    
    
    
    
    
