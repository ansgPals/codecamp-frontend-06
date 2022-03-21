import {useRouter} from "next/router"




export default function StaticRoutingPage() {

    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/05-06-dynamic-routed-board/83011")
     }
     const onClickMove2 = () => {
        router.push("/05-06-dynamic-routed-board/83012")
     }

     const onClickMove3 = () => {
        router.push("/05-06-dynamic-routed-board/83013")
     }


    return(
    <>

        <button onClick={onClickMove1}> 83011번게시글로이동하기 </button>
        <button onClick={onClickMove2}> 83012번게시글로이동하기 </button>
        <button onClick={onClickMove3}> 83013번게시글로이동하기 </button>
    
    </>
    )
}
