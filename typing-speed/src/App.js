import "./styles/app.css"
import Passage from "./modules/Passage";
import { useRef, useState } from "react";
import data from "./data";

function App() {
  const inputTxT = useRef(null);
  const [data_passage,ChangePassage]= useState(data[0]);
  const [correct,Changecorrect] = useState([]);
  const ModifyCorrect = ()=>{
    Changecorrect(()=>{
      var arr_2 = []
      for (var i in inputTxT.current.value){
        if (inputTxT.current.value[i] === data_passage[i]){
          arr_2.push(1);
        } else {
          arr_2.push(0);
        }
      }
      return arr_2
    })
  }

  const Reset = ()=>{
    inputTxT.current.value = null;
    Changecorrect([]);
    ChangePassage(data[Math.floor(Math.random() * 7)]);

  }

  return (
    <div className="app">
        <div className="input">
            <Passage correct={correct} data={data_passage} />
            <textarea className="input_text" ref={inputTxT} onChange={()=>ModifyCorrect()}></textarea>
        </div>
        <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
