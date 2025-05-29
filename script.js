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
let a = '';
let b = '';
let c = '';
let result = '';
let display = document.getElementById("item");

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let val = button.value;

    if (!isNaN(val) || val === '.') {
  if (b === '') {
    //  one decimal in operand a
    if (val === '.' && a.includes('.')) return;
    a += val;
    display.value = a;
  } else {
    //  one decimal in operand c
    if (val === '.' && c.includes('.')) return;
    c += val;
    display.value = c;
  }
} else if (['+', '-', '*', '/'].includes(val)) {
      // if it's an operator
      if (a !== '') {
        b = val;
      }
    } else if (val === '=') {
      if (a !== '' && b !== '' && c !== '') {
        result = operation(a, b, c);
        display.value = result;
        
        a = result.toString();
        b = '';
        c = '';
      }
    } else if (val === 'clear') {
      // clear button
      a = '';
      b = '';
      c = '';
      result = '';
      display.value = '';
    } else if (val === 'back') {
      // backspace
      if (c !== '') {
        c = c.slice(0, -1);
        display.value = c;
      } else if (b !== '') {
        b = '';
      } else if (a !== '') {
        a = a.slice(0, -1);
        display.value = a;
      }
     }
  });
});
