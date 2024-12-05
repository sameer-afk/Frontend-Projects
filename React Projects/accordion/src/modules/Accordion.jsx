import "../Styles/Accordion.css";

const Accordion = (props)=>{
    const Items = props.QnA.map((ele)=>{
        return(
            <>
            <article>
                <div className="ques_container">
                    <p className="question">
                        {ele.question}
                    </p>
                    <div className="buttons">
                    <button onClick={()=>props.ShowAns(ele.Id)}>
                        Show
                    </button>
                    <button onClick={()=>props.RemoveQnA(ele.Id)}>
                        Delete
                    </button>
                    </div>
                </div>
            </article>
            
            {ele.display && <article>
                <p className="answer">
                    {ele.answer}
                </p>
            </article>}
            </>
        )
    })

    return(
        Items
    )
}

export default Accordion;