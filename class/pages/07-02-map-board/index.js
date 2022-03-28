import { useQuery, gql } from "@apollo/client"
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
const MyRow = styled.div`
display: flex;
flex-direction: row;

`
const MyCal = styled.div`
    width: 25%;
`



export default function MapBoardPage(){

    const {data} = useQuery(FETCH_BOARDS)

    return(
        <div>
            {data?.fetchBoards.map((el)=>(
                <MyRow key = {el.number}>
                    <MyCal><input type = "checkbox" /></MyCal>
                    <MyCal>{el.number}</MyCal>
                    <MyCal>{el.writer}</MyCal>
                    <MyCal>{el.title}</MyCal>
                </MyRow>
            ))}
        </div>
    )
}
