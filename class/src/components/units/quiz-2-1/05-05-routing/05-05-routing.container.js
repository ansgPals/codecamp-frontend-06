import {useRouter} from "next/router"
import StaticRoutingPageUI from "./05-05-routig.presenter"

export default function StaticRouting() {

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


  return (
    <StaticRoutingPageUI 
    onClickMove1 = {onClickMove1}
    onClickMove2 = {onClickMove2}
    onClickMove3 = {onClickMove3}
    />

  )
  
  }