// Factorial of a num by using recursion


function fact(n){
    if(n==0 || n==1){
        return 1;

    }

    return fact(n-1)*n;
}

let f=fact(5);


let btn=document.getElementById("btn");

btn.addEventListener("click",function(){

    let inp=document.getElementById("inp");
    let val=parseInt(inp.value);

    let op=fact(val);

    let p=document.getElementById("output");

    p.innerText=op;
    





})