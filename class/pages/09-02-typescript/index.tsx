export default function TypeScriptPage(){
    // 타입추론
    let aaa = "안녕하세요"
    aaa = 3

    // 타입명시
    let bbb : string = "반갑습니다."

    // 문자타입
    let ccc : string
    ccc = "반가워용"
    ccc = 3
    
    // 숫자타입
    let ddd : number = 10
    ddd = "숫자만들어갈수있즹"
    
    // 불린타입
    let eee : boolean =true
    eee = "false" //트루로작동하게된다규!!!!
    eee = "트루펄스만 되지롱 문자로된펄스도앙대"
    
    //배열타입
    let fff : number[] =[1,2,3,4,5, "안녕하세요"]
    let ggg : string[] = ["철수","영희","훈이",13] 
    let hhh : (number | string)[] = [1,2,3,4,5, "안녕하세요"]
    //타입스크립트에서는 오알을 | 앤드는& 하나씩만 써줌

    //객체타입
    interface IProfile{
        name : string
        age : string | number
        school : string
        hobby?: string
    }
    //물음표붙이면 있어도 좋고 없어도 좋당 물음표없는애들은 반드시 있어야하는애들임

    let profile : IProfile = {
        name : "철수",
        age : 8,
        school : "다람쥐초등학교"
    }
    profile.age = "8살"
    //age = 넘버로 이미 타입추론됨
    //인터페이스 적용시켜줬더니 된당!!!


    //함수타입
    const add = (money1 :number ,money2:number, unit:string):string =>{
        return money1 + money2 + unit
    }
   const result =  add(1000,2000,"원")



    return(<div>타입스크립트 연습하기</div>)
}