import { useQuery, gql, useMutation } from "@apollo/client"
import styled from "@emotion/styled"

const FETCH_BOARDS = gql`

    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
      }
    }

`
const DELETE_BOARD = gql`
 mutation deleteBoard($number:Int){
     deleteBoard(number : $number){
        message
     }
 }
`
const Row = styled.div`
display: flex;
flex-direction: row;
`
const Cal = styled.div`
    width: 20%;
`
export default function MapBoardPage(){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const {data} = useQuery(FETCH_BOARDS)


    const onClickDelete = (event) => {
        deleteBoard({
            variables : {number: Number(event.target.id)},
            refetchQueries : [{query : FETCH_BOARDS}]
        })
    }

    return(
        <div>
            {data?.fetchBoards.map((el)=>(
                <Row key = {el.number}>
                    <Cal><input type = "checkbox" /></Cal>
                    <Cal>{el.number}</Cal>
                    <Cal>{el.writer}</Cal>
                    <Cal>{el.title}</Cal>
                    <Cal>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                        {/* 이벤트핸들러함수 = html과 펑션연결 */}
                    </Cal>
                </Row>
            ))}
        </div>
    )
}
