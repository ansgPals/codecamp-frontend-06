import * as M from './day08.write.styles'

export default function ProductsWriteUI(props){


    return(<>
    <M.JustBox>
        <M.Carrot></M.Carrot>
        <M.JustInput type={"text"} onChange = {props.PutSellerName} placeholder='성함을 적어주세요'/>
        <M.JustInput type={"text"} onChange = {props.PutItemName} placeholder='판매하실 물건의 이름을 입력하세요'/>
        <M.JustInput type={"text"} onChange = {props.PutItemDetail} placeholder='판매하실 물건의 특징을 설명하세요'/>
        <M.JustInput type={"number"} onChange = {props.PutItemPrice} placeholder='판매하실 가격을 입력하세요'/>
        <M.JustButton onClick={props.ButtonClick}>{props.isEdit? "수정" : "판매등록"}하기</M.JustButton>
    </M.JustBox>
    
    </>
    )
}