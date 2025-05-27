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

function operation(a,b,c){
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

document.querySelectorAll('button').forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("item").value=button.value;
    const input1 = document.getElementById("item").value;
    console.log(input1);
    const input2 = document.getElementById("item").value;
    console.log(input2);
  });
});
