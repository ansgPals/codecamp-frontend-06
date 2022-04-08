import * as M from './day08.show.styles'


export default function ShowProductUI(props){

    
    
    return(<>
    <M.JustBox>
        <M.Carrot></M.Carrot>
        <M.JustInput>판매자 : {props.data ? props.data.fetchProduct.seller : "loading..."} </M.JustInput>
        <M.JustInput >제품명 : {props.data?.fetchProduct.name}</M.JustInput>
        <M.JustInput >제품설명 : {props.data?.fetchProduct.detail}</M.JustInput>
        <M.JustInput>가격 : {props.data?.fetchProduct.price}원</M.JustInput>
        <M.ButtonBox>
                <M.JustButton id={props.data?.fetchProduct._id} onClick={props.ClickEdit}>수정하기</M.JustButton> <M.JustButton onClick={props.ClickList}>목록으로</M.JustButton>   
        </M.ButtonBox>
    </M.JustBox>        

    </>
    )
}