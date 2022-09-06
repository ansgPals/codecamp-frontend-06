사용예시

<LevelChoice title="입문자">

map 사용예시

const aaa = ["입문지", "초급자", "중급자", "마스터"]
const [check, setCheck] = useState([false, false, false, false])

{aaa.map((el:sting, index:number) => (<LevelChoice title={el} index={index} checkArr={check} setCheckArr={setCheck} key={uuid()}>))}
