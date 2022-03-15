export default function CounterDocumentPage(){

    function Counter(){
       const result = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = result
    }

    return(
        <div>
            <div id = "count">0</div>
            <button onClick={Counter}>카운트 올리기!!</button>
        </div>

    )

}