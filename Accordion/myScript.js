    const buttons = document.querySelectorAll("button");
    const para = document.querySelectorAll(".ans");

    buttons.forEach((ele,idx)=>{
        ele.addEventListener("click",()=>{
            para.forEach((p, i) => {
                if (i !== idx) {
                  p.classList.add("display_none");
                }
              });
            para[idx].classList.toggle("display_none");
        })
    })
