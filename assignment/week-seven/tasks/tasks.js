
function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000); 
  });
}


function processTask(previousOutput) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task B processed: ${previousOutput}`);
    }, 1500); 
  });
}


function finalizeTask(previousOutput) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Final result: ${previousOutput}`);
    }, 500);
  });
}


startTask()
  .then((resultA) => {
    console.log(resultA); 
    return processTask(resultA);
  })
  .then((resultB) => {
    console.log(resultB); 
    return finalizeTask(resultB);
  })
  .then((finalResult) => {
    console.log(finalResult); 
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
