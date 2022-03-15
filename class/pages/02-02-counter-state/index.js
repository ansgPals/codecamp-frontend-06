import{useState} from 'react'
// State 가 리액트기능이라 리액트기능을 불러와야힘

export default function CounterStatePage(){
    const[count,setCount]=useState(0)


    function Counter(){
        setCount(count+1)
    }
    // let count =0
    // function counter(){
    //     count = count +1    
    // } 위와같은 내용은 출력이 안됨 let은 화면에 반영이 안됨
    

    return(
        <div>
            <div>{count}</div>
            <button onClick={Counter}>카운트 올리기!!</button>
        </div>

    )

}