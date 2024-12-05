import {useState} from "react";
import Accordion from "./modules/Accordion";
import "./Styles/main.css"
import { v4 as uuidv4 } from 'uuid';
import data from "./data.js";

function App() {
  // QnA is a list of JS Object where keys are Id,question,answer and display
  const [QnA,ChangeQnA] = useState([...data]);

  const AddQnA = (e)=>{
    e.preventDefault();
    const question = e.target.elements["que"].value;
    const answer = e.target.elements["ans"].value;
    ChangeQnA(()=>{
      return(
        [...QnA,{Id:uuidv4(),question:question,answer:answer,display:false}]
      )
    })
    e.target.elements["que"].value = "";
    e.target.elements["ans"].value = "";
  }

  const RemoveQnA = (Id)=>{
    ChangeQnA((state)=>{
      return state.filter((state_ele) => state_ele.Id !== Id);
    })
  }

  const ShowAns = (Id)=>{
    ChangeQnA((state)=>{
      // to change the display value of all the elements to false
      const arr = state.map((state_ele)=>{
        return state_ele.Id !==Id ? {...state_ele, display:false}:state_ele
      })

      return arr.map((state_ele)=>{
        return state_ele.Id === Id ? {...state_ele,display:!state_ele.display}:state_ele
      })
    })
  }

  return (
    <>
    <main>
      <section>
        <h1 className="heading">Accordion</h1>
        <form onSubmit={AddQnA} className="form">
          <label>Question:</label>
          <input 
          type="text" 
          placeholder="Enter the question" 
          name="que"
          className="input" />
          <label>Answer:</label>
          <input 
          type="text" 
          placeholder="Enter the answer" 
          name="ans"
          className="input" />
          <button type="submit">Submit</button>
        </form>
      </section>

      <section>
          <Accordion QnA={QnA} RemoveQnA={RemoveQnA} ShowAns={ShowAns} />
      </section>
    </main>
    </>
  );
}

export default App;
