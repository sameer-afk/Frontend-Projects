import "../styles/passage.css"

const Passage = (props)=>{
    const passage = props.data;
    const correct = props.correct ;
    const arr_1 = [];
    for (var idx in passage){   
        if (idx <= correct.length-1){
            var val = correct[idx];
            if (val === 0){
                arr_1.push(<span className="red" key={idx}>{passage[idx]}</span>)
            } else{
                arr_1.push(<span className="green" key={idx}>{passage[idx]}</span>)
            }
        } else {
            arr_1.push(<span key={idx}>{passage[idx]}</span>)
        }
        
    }
    return(
        <div className="passage">
            {arr_1}
        </div>
    )
}

export default Passage;