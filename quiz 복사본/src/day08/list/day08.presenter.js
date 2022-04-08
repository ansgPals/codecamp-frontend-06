import * as MY from './day08.styles'

export default function FetchProductsUI(props){


    return(<MY.Back>
    <MY.Row1>
        <MY.Cal1>선택</MY.Cal1>
        <MY.Cal>판매자</MY.Cal>
        <MY.Cal>상품명</MY.Cal>
        <MY.Cal>상품설명</MY.Cal>
        <MY.Cal>가격</MY.Cal>
        <MY.Cal>삭제</MY.Cal>
    </MY.Row1>
    {props.data?.fetchProducts.map((el)=>(
        <MY.Row key = {el._id}>
            <MY.Cal1><input type="checkbox" /></MY.Cal1>
            <MY.Cal>{el.seller}</MY.Cal> 
            <MY.Cal>{el.name}</MY.Cal>            
            <MY.Cal>{el.detail}</MY.Cal>
            <MY.Cal>{el.price}</MY.Cal>
            <MY.Cal><MY.MyButton onClick={props.ClickDelete} id = {el._id}>삭제</MY.MyButton></MY.Cal>
        </MY.Row>

    ))}
    <MY.BoardButton onClick={props.ClickBoard}>글쓰기</MY.BoardButton>
    </MY.Back>
    )
}