let call=document.createElement("div");
call.setAttribute("class","main");
let p=document.createElement("p");
call.append(p);
document.body.append(call);

setTimeout(() => {
    p.innerHTML="10"
    setTimeout(() => {
        p.innerHTML="9";
        setTimeout(() => {
            p.innerHTML="8";
            setTimeout(()=>{
                p.innerHTML="7";
                setTimeout(()=>{
                    p.innerHTML="6";
                    setTimeout(() => {
                        p.innerHTML="5";
                        setTimeout(() => {
                            p.innerHTML="4";
                            setTimeout(() => {
                                p.innerHTML="3";
                                setTimeout(() => {
                                    p.innerHTML="2";
                                    setTimeout(() => {
                                        p.innerHTML="1"
                                        setTimeout(()=>{
                                            p.innerHTML="Happy Independance Day";
                                        },1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                },1000);
            },1000);
        }, 1000);
    }, 1000);
}, 1000);