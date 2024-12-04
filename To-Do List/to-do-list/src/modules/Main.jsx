import "../Styles/Main.css";
import Items from "./Items.jsx";
import {useRef , useState} from 'react';


const Main = ()=>{
    const inputRef = useRef(null);
    const [ItemsList,ListItem] = useState([]);
    const ItemToList = (e)=>{
        e.preventDefault();
        const val = e.target.elements["task_input"].value;
        ListItem((state)=>[...state,val]);
        e.target.elements["task_input"].value = "";
    }

    const RemoveListItem = (ele)=>{
        ListItem(()=>{
            const new_arr = [];
            for (var i in ItemsList){
                if (ItemsList[i] !== ele){
                    new_arr.push(ItemsList[i])
                }
            }
            return new_arr
        });
    }
    return(
        <>
            <section className="form_container">
            <form onSubmit={ItemToList} className="form">
            <input
                type="text"
                name="task_input"
                ref={inputRef}
                placeholder="Enter task"
            />
            <button type="submit">ADD</button>
            </form>
            </section>

            <section className="form_items">
                <Items Item = {ItemsList} RemoveListItem={RemoveListItem}/>
            </section>
        </>
    );
}

export default Main;