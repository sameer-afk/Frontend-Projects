import "../Styles/Items.css"
import crossImg from '../Styles/cross.png';


const Items = (props)=>{
    const todolist = props.Item.map((ele,index)=>{
        return(
            <li key={index} className="list_item">
                <div className="list_align">
                    <p className="list_ele">{ele}</p>
                </div>
                <button onClick={()=>props.RemoveListItem(ele)} className="button">
                    <img src={crossImg} alt="cross" />    
                </button>            
            </li>
        )
    })
    return(
        <>
            {todolist}
        </>
    );
}

export default Items;