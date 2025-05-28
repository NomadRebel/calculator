function addition(a,b){
  return a+b;
}

function subtraction(a,b){
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
    return (addition(a,c));
  }
  else if (b==='-'){
    return (subtraction(a,c));
  }
  else if (b==="*"){
    return(multiplication(a,c));
  }
  else{
    return(divison(a,c));
  }
}

