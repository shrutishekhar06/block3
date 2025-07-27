function outerFunction() {
  let message = "Hello from closure!";
  
  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const myClosure = outerFunction(); 
myClosure(); 
