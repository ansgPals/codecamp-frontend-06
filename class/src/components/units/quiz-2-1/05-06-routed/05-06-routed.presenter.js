


export default function StaticRoutedUI(props){
   
    
    return(<>
    <div>{props.data?.fetchBoard.number}번게시글로오신것을 환영합니다!!</div>
    <div>작성자: {props.data?.fetchBoard.writer}</div>
    {/* data&&data = data?   optional-Chaining */}
    <div> 제목 : {props.data?.fetchBoard.title}</div>
    <div>내용 : {props.data?.fetchBoard.contents}</div>
    
    </>
    )



}


    
    
    
    
    
    
