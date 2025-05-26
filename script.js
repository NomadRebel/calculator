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



const a = Number("2");
const o = "/";
const b = Number("0");
// console.log(typeof(o));
// console.log(a);
console.log(operation(a,o,b));
