function sum(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}

function multiplication(a,b){
  return a*b;
}

function divison(a,b){
  if(b===0){
    return "Are You Serious?"
  }
  else{
    return a/b;
  }
}

function operation(x,y,z){
  let a = Number(x);
  let b = (y);
  let c = Number(z);
  console.log(a);
  console.log(b);
  console.log(c);
  if(b=== '+'){
    return (sum(a,c));
  }
  else if (b==='-'){
    return (sub(a,c));
  }
  else if (b==="*"){
    return(multiplication(a,c));
  }
  else{
    return(divison(a,c));
  }
}
let input1 = 0;
let clickCount = 0;
let input2 = 0;
let input3 = 0;
let input4 =0;

document.querySelectorAll('button').forEach(button => {
  button.addEventListener("click", () => {
    clickCount++;
    console.log(clickCount);
    document.getElementById("item").value=button.value;
    if(clickCount===1){
      input1=document.getElementById("item").value;
      console.log(input1);
    };
    if(clickCount===2){
      input2=document.getElementById("item").value;
      console.log (input2);
    }
    if(clickCount===3){
      input3=document.getElementById("item").value;
      console.log (input3);
    }
    if(clickCount===4){
      input4=document.getElementById("item").value;
      if(input4==="="){
        clickCount===0;
        let vaue = document.getElementById("item").value
        vaue = (operation(input1,input2,input3));
        document.getElementById("item").value = vaue;
      }
    }
  });
});

console.log(input1);
console.log(input2);
