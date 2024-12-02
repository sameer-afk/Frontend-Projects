
prev = document.querySelector(".tab_1")

const Section = (ele)=>{
    ele.style.borderBottom = "2px solid black";
    ele.style.opacity = "1";
    prev.style.borderBottom = "0px";
    prev.style.opacity = "0.5";
    prev = ele;
    document.querySelector(".section").innerHTML = `${ele.textContent} element`;
}


document.querySelectorAll("li").forEach(ele=>{
    ele.addEventListener("click",()=>Section(ele))
})






