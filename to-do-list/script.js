// ADDING TO THE TO THE LIST
document.querySelector(".main__form").addEventListener("submit",(e)=>{Additem(e)});

const Additem = (e)=>{
    e.preventDefault();
    const target = e.target.elements["name"].value;
    const li = document.createElement("li");
    li.innerText = target;
    document.querySelector(".ul").appendChild(li);
    e.target.elements["name"].value = "";
    document.querySelectorAll(".ul li").forEach((ele)=>{
        if (ele.innerText === target){
            ele.addEventListener("click",(e)=>{Removeitem(e)})
        }  
    });
}

// REMOVING FROM THE LIST
const Removeitem = (e)=>{
    const target = e.target;
    document.querySelector(".ul").removeChild(target);
}