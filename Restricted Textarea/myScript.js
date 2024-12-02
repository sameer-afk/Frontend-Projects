const max_len = 250;

document.querySelector(".Text").addEventListener("input",(ele)=>{
    const len = ele.target.value.length;
    const container = document.getElementById("test");
    if (len < max_len){
        document.querySelector(".chr_limit").textContent = `${len}/${max_len}`;
        container.classList.add("black");
        container.classList.remove("red");
    } else {
        document.querySelector(".chr_limit").textContent = `${len}/${max_len}`;
        container.classList.remove("black");
        container.classList.add("red");
    }
})